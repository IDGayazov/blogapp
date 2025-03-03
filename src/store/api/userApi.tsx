import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { UserData } from './types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8082/blog/v1/users',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
  }),
  endpoints: (build) => ({
    getUsersById: build.query<UserData, string>({
      query: (id) => ({
        url: `${id}`, 
        method: 'GET',
      }),
    }),
  })
});

export const { useGetUsersByIdQuery } = userApi;