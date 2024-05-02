"use client";
import { useUser } from "@/lib/UserProvider";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import Link from "next/link";
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

interface ErrorType {
  response: {
    statusCode: number;
    message: string;
    errorMessages: string;
  };
}

const LoginForm: React.FC = () => {
  const { user, setUser } = useUser();
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleLogin = async (data: any) => {
    message.loading("Logging ...");

    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);

      if (res?.data?.accessToken) {
        storeUserInfo({ accessToken: res?.data?.accessToken });
        const { role, id } = getUserInfo() as any;
        reset({ email: "", password: "" });

        router.push(`/profile/${id}`);

        setUser({ role: role, id: id });

        message.success("User log in successfully!");
      } else {
        message.error("User log was not successful! Please try again.");
      }
    } catch (error) {
      console.error(error);
      const specificError = error as ErrorType;

      const logError = specificError?.response;

      message.error(logError?.errorMessages);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl m-4 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-center mb-4 font-semibold text-blue-600">
          Login
        </h1>
        <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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
              className="bg-blue-500 text-white font-bold p-2 rounded-md w-full hover:bg-blue-600"
            >
              Login
            </button>
          </div>
        </form>
        <br />
        <br />
        <div className=" underline text-blue-500">
          <Link href={"/forgetPassword"}>Forget Password</Link>{" "}
        </div>
        <div className="text-right pt-4">
          <Link
            href={"signup"}
            className="bg-blue-400 text-white font-bold p-2 rounded-md w-full hover:bg-blue-500 text-right"
          >
            signUp
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
