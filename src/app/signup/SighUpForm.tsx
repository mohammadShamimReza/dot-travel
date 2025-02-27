"use client";
import { useUser } from "@/lib/UserProvider";
import {
  useCreateUserMutation,
  useUserLoginMutation,
} from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface SignupFormProps {
  onSubmit: (data: any) => void;
}
interface ErrorType {
  response: {
    statusCode: number;
    message: string;
    errorMessages: string;
  };
}

const SignupForm: React.FC = () => {
  const [createUser, { data, error, status }] = useCreateUserMutation();
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();
  const { user, setUser } = useUser();

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    repassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Please re-enter your password"),
    address: yup.string().required("Address is required"),

    phone: yup
      .string()
      //   .matches(/^\d{10}$/, "Invalid phone number")
      .required("phone is required"),
    terms: yup.boolean().oneOf([true], "Terms and Conditions must be accepted"),
  });

  const { control, handleSubmit, watch, setValue, formState, setError, reset } =
    useForm({
      resolver: yupResolver(validationSchema),
    });

  const handleSignup = async (data: any) => {
    message.loading("Creating User..");

    delete data.terms;
    delete data.repassword;

    data.role = "user";
    data.profileImage = "";
    try {
      const result = await createUser({ ...data }).unwrap();

      if (result?.data?.accessToken) {
        message.success("User log in successfully!");

        storeUserInfo({ accessToken: result?.data?.accessToken });
        const { role, id } = getUserInfo() as any;
        router.push(`/profile/${id}`);

        setUser({ role: role, id: id });

        reset({
          address: "",
          phone: "",
          password: "",
          email: "",
          firstName: "",
          lastName: "",
          repassword: "",
          terms: false,
        });
      } else {
        message.error("User log was not successful! Please try again.");
      }
    } catch (err: any) {
      console.error(error);
      console.log(error);
      const specificError = error as ErrorType;

      const logError = specificError?.response;

      message.error(logError?.errorMessages);
    }
  };

  const { errors } = formState;

  const toggleTermsCheckbox = () => {
    setValue("terms", !watch("terms"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl m-auto p-6 bg-white rounded-lg shadow-md mb-40">
        <h1 className="text-2xl text-center mb-4 font-semibold text-blue-600">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">First Name</label>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">Last Name</label>
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="email"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              Recheck Password
            </label>
            <Controller
              name="repassword"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="password"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.repassword && (
              <p className="text-red-500 text-xs">
                {errors.repassword.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">Address</label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm text-gray-600">phone Number</label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                checked={watch("terms")}
                onChange={toggleTermsCheckbox}
                className="text-blue-500"
              />
              <label className="text-sm text-blue-600 ml-2">
                I agree to the terms and conditions
              </label>
            </div>
            {errors.terms && (
              <p className="text-red-500 text-xs">{errors.terms.message}</p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md w-full`}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
