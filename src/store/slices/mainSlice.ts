import { createSlice } from "@reduxjs/toolkit";

export interface MainInitialStateType {
  openViewingFiles: []
}

const initialState: MainInitialStateType = {
  openViewingFiles: []
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {

  }
})

export default mainSlice.reducer;