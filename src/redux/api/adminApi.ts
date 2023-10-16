import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const URL = "/users";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    admin: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: URL,
          method: "GET",
          params: arg,
        };
      },
      // transformResponse: (response: IAdmin[]) => {
      //   return {
      //     admins: response,
      //   };
      // },
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const { useAdminQuery } = adminApi;
