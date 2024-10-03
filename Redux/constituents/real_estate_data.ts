import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { realEstateData } from "@/types/realEstateData";

const data: realEstateData[] = []
export const realEstateDataSlice = createSlice({
    name: "real estate data",
    initialState: {value:data},
    reducers: {
        onLoadDetailsR: (state, action:PayloadAction<realEstateData[]>)=>{
            state.value = action.payload
        },

        addDetailsR: (state, action:PayloadAction<realEstateData>)=>{
             state.value.push(action.payload)
        },
        deleteR: (state, action:PayloadAction<number>) => {
             state.value = state.value.filter((_, index)=> index === action.payload)
        }
        
    }
})


export const { onLoadDetailsR, addDetailsR, deleteR} = realEstateDataSlice.actions
export default realEstateDataSlice.reducer