'use client'
import Image from "next/image"
import house1 from "@/public/images/house 1.jpg"
import AddRealEstateBtn from "@/components/AddRealEstateBtn"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter, usePathname } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { getDataR } from "@/Redux/constituents/admin"
import { onLoadDetailsR } from "@/Redux/constituents/real_estate_data"
import { realEstateData } from "@/types/realEstateData"
import { RootState } from "@/Redux/Store"
const page = () => {
  const path = usePathname()
  const router = useRouter()
  const dispatch  = useDispatch()
  const realEstateStore  = useSelector((state:RootState)=>state.real_estate_data.value)
  //  const token = localStorage.getItem("session")
//  console.log(path.split)
  const confirmAndGetDetails = async (token:any) => {
     try{
const get = await axios.get(`http://localhost:3000/api/admin`, {
  headers: {
    Authorization: `bearer ${path.split("/")[2]}-${token}`,
    "Content-Type": "application/json",
    Accept: `application/json`,
  },
});
console.log(get)
       const data:realEstateData[] = get.data.realEstateData 
       dispatch(onLoadDetailsR(data))
       dispatch(getDataR(`${get.data.username}`))
     }catch(error){
      //  router.push('/admin/signin')
     }
    
  }

  useEffect(() => {
    if (localStorage.sessionToken) {
       confirmAndGetDetails(localStorage.sessionToken)
    }
   
  },[])
  return (
    <div className="py-[16px] px-[16px]">
      <div className="py-[12px] px-[12px] grid grid-cols-1 lg:grid-cols-4">
        {realEstateStore.length > 0 ? realEstateStore.map((value, id)=>(
<div key={id}
          style={{ background: "white" }}
          className="shadow-md py-[8px] px-[8px]">
          <div className="relative">
            {/* button */}
            {/* <div className="absolute flex py-[12px] px-[12px] right-0">
            <button style={{background:"white"}} className="py-[8px] px-[8px] rounded-full">E</button>
            <button style={{background:"white"}} className="py-[8px] px-[8px] rounded-full ">D</button>
          </div> */}
            <Image className="h-[200px] object-cover" src={value.img} alt="" />
          </div>
          <div className="py-[12px]">
            <div className="flex justify-between">
              <div>
                <p className="text-green-500 text-2xl helFnt  font-bold ">
                  ${value.price}
                </p>
              </div>
              <p
                style={{
                  color: "hsl(120, 75%, 10%)",
                  background: "hsl(120, 75%, 98%)",
                }}
                className="font-semibold helFnt text-sm lg:text-base px-[16px] py-[8px]"
              >
              {value.type}
              </p>
            
            </div>non

            <h1 className="text-xl gilFnt font-semibold text-grey-700 py-[8px]">
              {value.title}
            </h1>
            <div className="">
              <span></span>{" "}
                <span className="text-grey-600 text-base">{value.location }</span>
            </div>
          </div>
        </div>
        )) : <div className="flex justify-center items-center w-full  py-120">
        <h1 className="text-xl text-grey-600">Seems you don't have any  data added, click the button below to start creating</h1>
        </div>}
      </div>
      <AddRealEstateBtn />
    </div>
  );
}

export default page