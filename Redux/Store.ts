import { configureStore } from "@reduxjs/toolkit"


import donate from "./constituents/donate"
export const store = configureStore({
    reducer: {
   
        donate
        
     
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch