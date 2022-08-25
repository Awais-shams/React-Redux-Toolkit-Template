import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const ModelSlice = createSlice({
  name: "ModelSlice",
  initialState,
  reducers: {
    handleClickOpen: (state) => {
      state.open = true;
    },
    handleClickClose: (state) => {
      state.open = false;
    },
  },
});

export default ModelSlice.reducer;
export const { handleClickOpen, handleClickClose } = ModelSlice.actions;
