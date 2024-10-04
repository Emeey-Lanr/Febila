import { configureStore } from "@reduxjs/toolkit"


import donate from "./constituents/donate"
import modalStatus from "./constituents/modalStatus"
import real_estate_data from "./constituents/real_estate_data"
import successErrorModal from "./constituents/successErrorModal"
import admin from "./constituents/admin"
export const store = configureStore({
    reducer: {

        donate,
        modalStatus,
        real_estate_data,
       successErrorModal,
       admin
        
     
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch