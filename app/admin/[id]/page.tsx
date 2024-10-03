'use client'
import Image from "next/image"
import house1 from "@/public/images/house 1.jpg"
import AddRealEstateBtn from "@/components/AddRealEstateBtn"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter, usePathname } from "next/navigation"

const page = () => {
  const path = usePathname()
  const router = useRouter()
  const [id, setId] = useState(localStorage.session ?  `${localStorage.sessionToken}` : '');

//  console.log(path.split)
  const confirmAndGetDetails = async () => {
     try{
const get = await axios.get(`http://localhost:3000/api/admin`, {
  headers: {
    Authorization: `bearer ${path.split("/")[2]}-${id}`,
    "Content-Type": "application/json",
    Accept: `application/json`,
  },
});
       
     }catch(error){
      //  router.push('/admin/signin')
     }
    
  }

  useEffect(() => {
    confirmAndGetDetails()
  },[])
  return (
    <div className="py-[16px] px-[16px]">
      <div className="py-[12px] px-[12px] grid grid-cols-1 lg:grid-cols-4">
        <div
          style={{ background: "white" }}
          className="shadow-md py-[8px] px-[8px]"
        >
          <div className="relative">
            {/* button */}
            {/* <div className="absolute flex py-[12px] px-[12px] right-0">
            <button style={{background:"white"}} className="py-[8px] px-[8px] rounded-full">E</button>
            <button style={{background:"white"}} className="py-[8px] px-[8px] rounded-full ">D</button>
          </div> */}
            <Image className="h-[200px] object-cover" src={house1} alt="" />
          </div>
          <div className="py-[12px]">
            <div className="flex justify-between">
                <div>
                <p className="text-green-500 text-2xl helFnt  font-bold ">
                  $100
                </p>
              </div>
              <p
                style={{
                  color: "hsl(120, 75%, 10%)",
                  background: "hsl(120, 75%, 98%)",
                }}
                className="font-semibold helFnt text-sm lg:text-base px-[16px] py-[8px]"
              >
                Apartment
              </p>
            
            </div>

            <h1 className="text-xl gilFnt font-semibold text-grey-700 py-[8px]">
              Winner House
            </h1>
            <div className="">
              <span></span>{" "}
              <span className="text-grey-600 text-base">Ogbomose Nigeria</span>
            </div>
          </div>
        </div>
      </div>
      <AddRealEstateBtn />
    </div>
  );
}

export default page