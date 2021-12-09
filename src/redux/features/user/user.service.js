import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_REDUCER_PATH } from "./user.config";

export const userApi = createApi({
  reducerPath: USER_REDUCER_PATH,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vaidhyamitrabackend.herokuapp.com/",
    mode: "no-cors",
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ name = "Manirathnam", password = "Manirathnam123_" }) => ({
        url: "login",
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: {
          name,
          password,
        },
      }),
    }),
  }),
});

export const { useLoginUserMutation } = userApi;
