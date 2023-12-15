import { configureStore } from "@reduxjs/toolkit"

import sidebar from "./constituents/sidebar"
import hero from "./constituents/hero"
import errorSuccessModal from "./constituents/errorSuccessModal"
import donate from "./constituents/donate"
export const store = configureStore({
    reducer: {
        sidebar,
        hero,
        errorSuccessModal,
        donate
        
     
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch