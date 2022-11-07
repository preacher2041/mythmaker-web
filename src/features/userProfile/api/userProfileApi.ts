import { baseApi } from "@/lib/rtkQuery/baseApi";

import {
  UpdatePasswordRequest,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from "../types";

export const userProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateUserProfile: build.mutation<
      UpdateProfileResponse,
      UpdateProfileRequest
    >({
      query: (body) => {
        return {
          url: "auth/updateProfile",
          method: "patch",
          body,
        };
      },
    }),
    updateUserPassword: build.mutation<void, UpdatePasswordRequest>({
      query: (body) => {
        return {
          url: "auth/updatePassword",
          method: "put",
          body,
        };
      },
    }),
  }),
});

export const { useUpdateUserProfileMutation, useUpdateUserPasswordMutation } =
  userProfileApi;
