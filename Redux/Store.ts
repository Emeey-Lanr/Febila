import { configureStore } from "@reduxjs/toolkit"


import donate from "./constituents/donate"
import modalStatus from "./constituents/modalStatus"
import real_estate_data from "./constituents/real_estate_data"
import successErrorModal from "./constituents/successErrorModal"
export const store = configureStore({
    reducer: {

        donate,
        modalStatus,
        real_estate_data,
       successErrorModal
        
     
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch