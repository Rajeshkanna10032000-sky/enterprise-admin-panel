// src/app/store/index.js

import { configureStore, createSlice } from "@reduxjs/toolkit";

// Dummy slice to make store valid
const dummySlice = createSlice({
  name: "dummy",
  initialState: {},
  reducers: {},
});

const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;