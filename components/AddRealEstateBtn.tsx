'use client'
import { addEstateR } from "@/Redux/constituents/modalStatus"
import { useDispatch } from "react-redux"

const AddRealEstateBtn = () => {
  const dispatch = useDispatch()
  return (
    <div className="fixed z-50 bottom-[18px] right-2"><button onClick={()=>dispatch(addEstateR(true))} className="shadow-sm flex justify-center items-center w-[40px] h-[40px] bg-green-500"><span style={{background:"white"}} className="w-[20px] h-[20px] text-grey-900 text-xl flex justify-center items-center">+</span></button></div>
  )
}

export default AddRealEstateBtn