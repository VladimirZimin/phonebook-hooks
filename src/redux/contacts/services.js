import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com",
    prepareHeaders: (headers, { getState }) => {
      const { token = "" } = getState().auth;
      if (token) {
        headers.set("Authorization", token);
      }
      return headers;
    },
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

    editContacts: builder.mutation({
      query: ({ ...contact }) => ({
        url: `/contacts/${contact.id}`,
        method: "PATCH",
        body: { name: contact.name, number: contact.number },
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactsMutation,
} = contactApi;
