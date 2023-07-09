import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "myValue",
  initialState: {
    filter: "",
  },
  reducers: {
    filter(state, action) {
      state.filter = action.payload;
    },

    // addContacts(state, action) {
    //   const newContact = state.contacts
    //     .map((contact) => contact.name.toLowerCase())
    //     .includes(action.payload.name.toLowerCase());

    //   if (newContact) {
    //     alert(`${action.payload.name} is already in contacts.`);
    //   } else {
    //     const contact = {
    //       id: nanoid(),
    //       name: action.payload.name,
    //       number: action.payload.number,
    //     };

    //     state.contacts.push(contact);
    //     console.log("state.contacts:", state.contacts);
    //   }
    // },

    // removeContact(state, action) {
    //   state.contacts = state.contacts.filter(
    //     (contact) => contact.id !== action.payload
    //   );
    // },
  },
});

export const { filter } = filterSlice.actions;
