import { configureStore } from "@reduxjs/toolkit"


import donate from "./constituents/donate"
import modalStatus from "./constituents/modalStatus"
export const store = configureStore({
    reducer: {

        donate,
        modalStatus
        
     
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch