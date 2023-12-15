'use client'
import { RootState } from "@/Redux/Store";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AppContextAPI } from "@/context api/context";
const ErrorSuccessModal = () => {
  const { openModalExitModal } = useContext(AppContextAPI)
  
  const errorSuccess = useSelector((state:RootState)=>state.errorSuccessModal.value)
  return (
    <>
      {errorSuccess.state && <div className="w-full h-full fixed top-0 flex justify-center items-center modal_background">
        <div className="bg-white w-96 rounded-md py-6 px-2 sm:w-11/12">
          <div className="flex justify-end">
            <button onClick={()=>openModalExitModal(false, "")} className="h-6 w-6 rounded-full border border-blue-600   text-blue-600 hover:bg-blue-600 hover:text-white">x</button>
          </div>
          <p className="text-sm text-center text-gray-700 py-2">{errorSuccess.message}</p>
        </div>
      </div>}
    </>
  );
}

export default ErrorSuccessModal