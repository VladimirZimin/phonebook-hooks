import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64a680a6096b3f0fcc7fea42.mockapi.io",
  }),
  tagTypes: ["Contacts"],

  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),

    addContact: builder.mutation({
      query: ({ ...contacts }) => ({
        url: `/contacts`,
        method: "POST",
        body: contacts,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactApi;
