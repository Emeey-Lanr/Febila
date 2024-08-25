'use client'
import React, { createContext, useState } from "react";
import { appContextSchema } from "./context.schema";
import { useDispatch } from "react-redux";

export const AppContextAPI = createContext(appContextSchema)
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [sideBarState, setSideBarState] = useState<boolean>(false)
  const dispatch = useDispatch();
  
  // Remeber to delete it but watch it for how it's done
   const openModalExitModal = (modalState: boolean, message: string) => {
    //  dispatch(exitOpenModal({ modalState, message }));
  };
  
  const openCloseSideBarBtn = (value: boolean) => {
    console.log(value)
    setSideBarState(value)

  }
    return ( <AppContextAPI.Provider value={{openModalExitModal, openCloseSideBarBtn, sideBarState}}>
     {children}
    </AppContextAPI.Provider>)
}