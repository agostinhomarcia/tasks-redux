import { createSlice } from "@reduxjs/toolkit";

const localStorageSlice = createSlice({
  name: "localStorage",
  initialState: [],
  reducers: {
    loadFromLocalStorage: (state) => {
      const savedData = localStorage.getItem("todos");
      if (savedData) {
        return JSON.parse(savedData);
      }
      return state;
    },
    saveToLocalStorage: (state) => {
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const { loadFromLocalStorage, saveToLocalStorage } = localStorageSlice.actions;
export default localStorageSlice.reducer;
