import {PayloadAction, createSlice } from "@reduxjs/toolkit";

const modalValue:{addEstate:boolean, estateDescription:boolean, estateData:boolean} = {
    addEstate: false,
    estateDescription: false,
    estateData:false

}

export const modalSlice = createSlice({
    name: "modalslice",
    initialState:{value:modalValue},
    reducers: {
        addEstateR: (state, action:PayloadAction<boolean>) => {
            state.value.addEstate = action.payload
        },
        estateDescriptionR: (state, action:PayloadAction<boolean>) => {
            state.value.estateDescription = action.payload
        },
        estateDataR: (state, action:PayloadAction<boolean>) => {
            state.value.estateData = action.payload
        }
        
    }
})

export const { addEstateR, estateDescriptionR, estateDataR } = modalSlice.actions
export default modalSlice.reducer