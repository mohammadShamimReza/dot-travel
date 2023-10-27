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
        url: `${USER_URL}/`,
        method: "POST",
        data: singUpData,
      }),

      invalidatesTags: [tagTypes.user],
    }),
  }),
});

export const { useUserLoginMutation, useCreateUserMutation } = authApi;