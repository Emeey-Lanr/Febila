import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const data:string = '';
export const adminSlice = createSlice({
  name: "real estate data",
  initialState: { value: data },
  reducers: {
    getDataR: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },

    
  },
});

export const { getDataR} = 
  adminSlice.actions;
export default adminSlice.reducer;
