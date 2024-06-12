import React from "react";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BottomSheet {
  isOpen: boolean;
  content: string;
}

const initialState: BottomSheet = {
  isOpen: false,
  content: "",
};

export const bottomSheet = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment: (state) => {
    //   state.value += 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
    open: (state, action: PayloadAction<string>) => {
      if (!state.isOpen) {
        state.isOpen = true;
      }
      state.content = action.payload;
    },
    close: (state) => {
      state.isOpen = false;
      state.content = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = bottomSheet.actions;

export default bottomSheet.reducer;
