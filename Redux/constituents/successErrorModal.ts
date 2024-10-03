import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SuccessErrorData = { color: string; message: string; type: string, hidden:boolean };
const data: SuccessErrorData = { color: "", message: "", type: "", hidden:true};
export const successErrorModalSlice = createSlice({
  name: "successErrorModal",
  initialState: { value: data },
  reducers: {
    changeStatusR: (state, action: PayloadAction<SuccessErrorData>) => {
      state.value = action.payload;
    },
  },
});

export const {changeStatusR} = successErrorModalSlice.actions;
export default successErrorModalSlice.reducer;
