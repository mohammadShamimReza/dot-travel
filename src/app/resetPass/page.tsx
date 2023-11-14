"use client";

import { useResetPasswordMutation } from "@/redux/api/authApi";
import { decodedToken } from "@/utils/jwt";
import { message } from "antd";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

interface ErrorType {
  response: {
    statusCode: number;
    message: string;
    errorMessages: string;
  };
}

function ResetPass() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");

  const userInfo = decodedToken(token as string);

  const { id, role } = userInfo as any;

  const [resetPassword, { data }] = useResetPasswordMutation();
  const { register, handleSubmit, formState, watch, reset } = useForm({
    defaultValues: {
      password: "",
      newPassword: "",
    },
  });

  const { errors } = formState;
  const password = watch("password");
  const newPassword = watch("newPassword");

  const onSubmit = async (data: any) => {
    data.id = id;
    console.log(data);
    message.loading("Sending");
    try {
      if (password !== newPassword) {
        message.error("Passwords do not match");
        return;
      }

      const res = await resetPassword({ ...data }).unwrap;

      reset({ newPassword: "", password: "" });

      router.push("/login");

      message.success("reset password successfully!");
      
      
    } catch (error) {
      const specificError = error as ErrorType;

      const logError = specificError?.response;

      message.error(logError?.errorMessages);
    }
  };

  // Your component logic here

  return (
    <div className="min-h-screen">
      {" "}
      <div className="min-h-screen">
        <form
          className="max-w-md mx-auto my-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* ... (email input) */}
          <label
            className="block mb-2 text-sm font-bold text-gray-600 rounded-lg"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`w-full p-2 border rounded-lg ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              // Add more password validation rules if needed
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}

          <label
            className="block mb-2 text-sm font-bold text-gray-600 rounded-lg"
            htmlFor="newPassword"
          >
            Confirm Password
          </label>
          <input
            className={`w-full p-2 border rounded-lg ${
              errors.newPassword ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
            id="newPassword"
            {...register("newPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.newPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.newPassword.message}
            </p>
          )}

          <button
            className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPass;
