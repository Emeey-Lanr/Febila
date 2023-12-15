import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const successModalValue:{state:boolean, message:string} = {
    state: false,
    message:""
}
export const eSmodalSlice = createSlice({
    name: "esModalSlice",
    initialState: { value: successModalValue },
    reducers: {
        exitOpenModal: (state, action:PayloadAction<{modalState:boolean, message:string}>) => {
            state.value.state = action.payload.modalState
            state.value.message = action.payload.message
        }
        
    }
})


export const {exitOpenModal} = eSmodalSlice.actions

export default eSmodalSlice.reducer
