"use client";
import { useForgetPasswordMutation } from "@/redux/api/authApi";
import { message } from "antd";
import { useForm } from "react-hook-form";
interface ErrorType {
  response: {
    statusCode: number;
    message: string;
    errorMessages: string;
  };
}
function ForgetPassword() {
  const [forgetPassword, { data }] = useForgetPasswordMutation();
  // const { user } = useUser()
  // const {role, id} = user

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: "", // provide default values if needed
    },
  });

  const { errors } = formState;

  const onSubmit = async (data: any) => {
    message.loading("sending");
    try {
      const result = await forgetPassword(data);
     
       message.success("please check your email");
      
    } catch (error) {
      console.log(error);
      const specificError = error as ErrorType;

      const logError = specificError?.response;

      message.error(logError?.errorMessages);
    }
  };

  return (
    <div className="min-h-screen">
      <div className="text-center text-lg">Please give you email</div>
      <form className="max-w-md mx-auto my-8" onSubmit={handleSubmit(onSubmit)}>
        <label
          className="block mb-2 text-sm font-bold text-gray-600 rounded-lg"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`w-full p-2 border rounded-lg ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
        <button
          className="w-full mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
