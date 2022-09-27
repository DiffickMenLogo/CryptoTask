import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coincap.io/v2' }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (limit: number) => ({
        url: '/assets?limit=' + limit,
        method: 'GET',
      }),
    }),
    getCryptosById: builder.query({
      query: (coinId: string) => ({
        url: '/assets/' + coinId,
        method: 'GET',
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }: { coinId: string; timeperiod: string }) => ({
        url: `/assets/${coinId}/history?interval=${timeperiod}`,
        method: 'GET',
      }),
    }),
  }),
})

export const { useGetCryptosQuery, useGetCryptosByIdQuery, useGetCryptoHistoryQuery } = cryptoApi
