"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

interface SignupFormProps {
  onSubmit: (data: any) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit }) => {
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
    district: yup.string().required("District is required"),
    division: yup.string().required("Division is required"),
    village: yup.string().required("Village is required"),
    phone: yup
      .string()
      //   .matches(/^\d{10}$/, "Invalid phone number")
      .required("Phone is required"),
    terms: yup.boolean().oneOf([true], "Terms and Conditions must be accepted"),
  });

  const { control, handleSubmit, watch, setValue, formState, setError } =
    useForm({
      resolver: yupResolver(validationSchema),
    });

  const { errors } = formState;

  const isSubmitDisabled = errors.terms || formState.isSubmitting;

  const toggleTermsCheckbox = () => {
    setValue("terms", !watch("terms"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md m-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl text-center mb-4 font-semibold text-pink-600">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <label className="block text-sm text-gray-600">District</label>
            <Controller
              name="district"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.district && (
              <p className="text-red-500 text-xs">{errors.district.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">Division</label>
            <Controller
              name="division"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.division && (
              <p className="text-red-500 text-xs">{errors.division.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">Village</label>
            <Controller
              name="village"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full border p-2 rounded-md"
                />
              )}
            />
            {errors.village && (
              <p className="text-red-500 text-xs">{errors.village.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm text-gray-600">Phone Number</label>
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
                className="text-pink-500"
              />
              <label className="text-sm text-pink-600 ml-2">
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
              className={`${
                isSubmitDisabled
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-pink-500 hover:bg-pink-600"
              } text-white font-semibold py-2 rounded-md w-full`}
              disabled={isSubmitDisabled as boolean}
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
