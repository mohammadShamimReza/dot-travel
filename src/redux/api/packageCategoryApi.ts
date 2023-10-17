import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const PACKAGE_CATEGORY_URL = "/packages-category";

export const packageCategoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPackageCategory: build.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `${PACKAGE_CATEGORY_URL}`,
          method: "POST",
          data: data,
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    PackageCategory: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: PACKAGE_CATEGORY_URL,
          method: "GET",
          params: arg,
        };
      },

      providesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    packageCategoryById: build.query({
      query: (id: string) => {
        return {
          url: `${PACKAGE_CATEGORY_URL}/${id}`,
          method: "GET",
        };
      },

      providesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    deletePackageCategory: build.mutation({
      query: (id: string) => {
        return {
          url: `${PACKAGE_CATEGORY_URL}/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
    updatePackageCategory: build.mutation({
      query: (data) => {
        return {
          url: `${PACKAGE_CATEGORY_URL}/${data.id}`,
          method: "PATCH",
          data: data.body,
        };
      },
      invalidatesTags: [
        tagTypes.package,
        tagTypes.bookPackage,
        tagTypes.packageReviewRating,
      ],
    }),
  }),
});

export const {
  useCreatePackageCategoryMutation,
  usePackageCategoryQuery,
  usePackageCategoryByIdQuery,
  useUpdatePackageCategoryMutation,
  useDeletePackageCategoryMutation,
} = packageCategoryApi;
