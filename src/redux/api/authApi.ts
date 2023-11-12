import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const AUTH_URL = "/auth";
const USER_URL = "/users";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    userLogin: build.mutation({
      query: (loginData) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data: loginData,
      }),

      invalidatesTags: [tagTypes.user],
    }),
    createUser: build.mutation({
      query: (singUpData) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data: singUpData,
      }),

      invalidatesTags: [tagTypes.user],
    }),
    forgetPassword: build.mutation({
      query: (email) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        data: email,
      }),

      invalidatesTags: [tagTypes.user],
    }),
    resetPassword: build.mutation({
      query: (newPassword) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        data: newPassword,
      }),

      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const {
  useUserLoginMutation,
  useCreateUserMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
} = authApi;