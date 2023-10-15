// ... (other imports and component definition)
"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface LoginFormProps {
  onSubmit: (data: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { formState } = useForm();
  const { errors } = formState;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md m-4 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-center mb-4 font-semibold text-pink-600">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            {errors.email && (
              <p className="text-red-500 text-xs">
                {String(errors.email.message)} {/* Cast to string */}
              </p>
            )}
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
            {errors.password && (
              <p className="text-red-500 text-xs">
                {String(errors.password.message)} {/* Cast to string */}
              </p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-pink-500 text-white font-bold p-2 rounded-md w-full hover:bg-pink-600 "
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
