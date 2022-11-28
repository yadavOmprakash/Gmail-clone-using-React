import {createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState:{
    sendMessageIsOpen : false,
    selectedMessage: null,
  },

  reducers: {
    openMessage: (state,action) => {
      state.selectedMessage= action.payload
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen= true
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen= false
    },

  },

});

export const { openSendMessage, closeSendMessage,openMessage} = mailSlice.actions;


export const selectSendMessageIsOpen  = (state) => state.mail.sendMessageIsOpen;
export const SelectedMail  = (state) => state.mail.selectedMessage;


export default mailSlice.reducer;
