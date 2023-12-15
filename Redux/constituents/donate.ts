import { PayloadAction, createSlice } from "@reduxjs/toolkit";
const donateValue:{state:boolean} = {
    state:false
}
export  const donateSlice = createSlice({
    name: "donateSlice",
    initialState:{value:donateValue},
    reducers: {
        openCloseModal: (state, action:PayloadAction<boolean>) => {
            state.value.state = action.payload
        }
    }
})

export const {openCloseModal} = donateSlice.actions
export default donateSlice.reducer