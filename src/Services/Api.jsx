import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("x-cg-demo-api-key", "CG-1yCpeW7dGdBJeegVRTz3mSJU");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoByName: builder.query({
      query: () => `/coins/markets?vs_currency=usd`,
    }),
  }),
});

export const { useGetCryptoByNameQuery } = cryptoApi;
