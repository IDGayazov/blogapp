import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const imageApi = createApi({
  reducerPath: 'imageApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://localhost:8082/blog/v1/images',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
  }),
  endpoints: (build) => ({
    getImageByFilename: build.query<string, string>({
      query: (filename) => ({
        url: `${filename}`,
        method: 'GET',
        responseHandler: async (response) => {
          const blob = await response.blob();
          return URL.createObjectURL(blob);
        },
      }),
    }),
  })
});

export const { useGetImageByFilenameQuery } = imageApi;