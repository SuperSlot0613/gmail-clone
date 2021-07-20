import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },

    OpenSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    CloseSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectMail, OpenSendMessage, CloseSendMessage } =
  mailSlice.actions;

export const selectOpenMail = (state) => state.mail.selectedMail;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
