import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "myContacts",
  initialState: { isShow: false },
  reducers: {
    showEditForm: (state, action) => {
      state.isShow = !state.isShow;
    },
  },
});

export const { showEditForm } = contactSlice.actions;
