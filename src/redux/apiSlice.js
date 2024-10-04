import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env['API_BASE_PATH'],
    credentials: 'include'
  }),
  reducerPath: 'appApi',
  endpoints: () => ({})
})
