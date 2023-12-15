'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface SidebarData {
    close:string
}
const sidebarData:SidebarData = {close:"closeSidebar"}

export const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState: { value: sidebarData  },
    reducers: {
        changeSidebar: (state, action:PayloadAction<string>) => {
            state.value.close = action.payload
        }
    }
})

export const {changeSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer