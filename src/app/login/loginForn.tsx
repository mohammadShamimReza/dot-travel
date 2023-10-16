import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface LoginFormProps {
  onSubmit: (data: any) => void;
}

type LoinFormValue = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSignup = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      message.loading("Logging!");

      if (res?.accessToken) {
        storeUserInfo({ accessToken: res?.accessToken });
        const { role } = getUserInfo() as any;
        console.log(role, "form role");
        if (role === "super_admin") {
          router.push("/super_admin");
        }
        if (role === "admin") {
          router.push("/admin");
        }
        if (role === "host") {
          router.push("/host");
        }
        message.success("User logged in successfully!");
      } else {
        message.error("User login was not successful! Please try again.");
      }
    } catch (err: any) {
      console.log(err.message, "this is error message");
      // You can handle the error here, e.g., display an error message to the user.
      message.error("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md m-4 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-center mb-4 font-semibold text-pink-600">
          Login
        </h1>
        <form onSubmit={handleSubmit(handleSignup)} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  id="password"
                  type="password"
                  placeholder="Your Password"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-pink-500 text-white font-bold p-2 rounded-md w-full hover:bg-pink-600"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
