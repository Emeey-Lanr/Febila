import Image from "next/image"
import house1 from "@/public/images/house 1.jpg"
import AddRealEstateBtn from "@/components/AddRealEstateBtn"

const page = () => {
  return (
    <>
      <div className="py-[12px] px-[12px] grid grid-cols-1 lg:grid-cols-4">
      <div className="py-[8px] px-[8px] border border-grey-200">
        <div className="relative">
          {/* button */}
          <div className="absolute flex py-[12px] px-[12px] right-0">
            <button style={{background:"white"}} className="py-[8px] px-[8px] rounded-full">E</button>
            <button style={{background:"white"}} className="py-[8px] px-[8px] rounded-full ">D</button>
          </div>
          <Image className="h-[200px] object-cover" src={house1} alt=""/>
        </div>
        <div>
          <div className="py-[16px] flex justify-between items-baseline"><h1 className="text-grey-700 text-2xl font-bold">$12</h1>
           <div className="flex items-center"><span className="block w-[16px] h-[16px]  bg-green-500"></span> <span className="helFnt text-base text-grey-600 pl-[8px]">12K</span> </div>
          </div>
          <p className="helFnt text-sm text-grey-600"><span className="font-semibold">12</span> units available</p>
          <div>
            <h1 className="text-2xl gilFnt text-grey-800 py-[16px]">2 Bedrooms Flat</h1>
            <p className="text-grey-700 text-sm ">2 bedrooms flat are available at 2 pack junction behind winners road</p>
          </div>            
        </div>
      </div>

    </div>
     <AddRealEstateBtn/>
    </>
  
  )
}

export default page