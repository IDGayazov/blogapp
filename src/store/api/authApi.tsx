import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { AuthResponse, SignInRequest, SignUpRequest } from './types'

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8082/blog/v1/auth' }),
  endpoints: (build) => ({
    getAuthTokenForSignIn: build.mutation<AuthResponse, SignInRequest>({
      query: (body) => ({
        url: 'sign-in',
        method: 'POST',
        body,
      }),
    }),
    getAuthTokenForSignUp: build.mutation<AuthResponse, SignUpRequest>({
      query: (body) => ({
        url: 'sign-up',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetAuthTokenForSignInMutation, useGetAuthTokenForSignUpMutation } = authApi;