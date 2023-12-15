'use client'
import React, { createContext } from "react";
import { appContextSchema } from "./context.schema";
import { useDispatch } from "react-redux";
import { exitOpenModal } from "@/Redux/constituents/errorSuccessModal";
export const AppContextAPI = createContext(appContextSchema)
export const AppProvider = ({children}:{children:React.ReactNode}) => {
   const dispatch = useDispatch();
   const openModalExitModal = (modalState: boolean, message: string) => {
     dispatch(exitOpenModal({ modalState, message }));
   };
    return ( <AppContextAPI.Provider value={{openModalExitModal}}>
     {children}
    </AppContextAPI.Provider>)
}