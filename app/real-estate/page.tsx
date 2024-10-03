'use client'
import Image from "next/image"
import house from "@/public/images/house 1.jpg"
const page = () => {
  return (
    <div>
      <div className="relative py-[16px] px-[16px]  lg:px-[32px] lg:py-[32px]">
        {/* text sec */}
        {/* <div className="py-[16px] px-[16px]  border border-b-0 border-grey-200 ">
          <h1 className="gilFnt text-[32px] text-center text-grey-800 font-semibold pb-[6px] md:leading-[5rem] md:text-6xl">
            WELCOME TO FEBILA FOUNDATION
          </h1>
          <p className="helFnt text-sm text-grey-700 text-center leading-[1.7em] pt-[6px] md:text-lg ">
            <span className="text-lg text-green-500  italic font-semibold">
              Febila
            </span>{" "}
            foundation is a home for all and it is also an hope for all
          </p>
        </div> */}

        {/* Carousel */}
        <div className="relative h-[310px] md:h-[510px]">
          {/* image */}
          <div className="absolute h-[310px] w-full md:h-[510px] z-0">
            <Image
              alt=""
              className="h-[310px] w-full  md:h-[510px] object-cover"
              src={house}
            />
          </div>
          {/* cover */}
          {/* put the indicator inside */}
          <div className="bg-transblack-500 flex items-center  w-full absolute md:h-[510px]  h-[310px] px-[12px] lg:px-[32px]">
            <div className="block  lg:flex  justify-between items-center w-full relative  py-[16px]">
              <div>
                <h1 className="gilFnt text-lg  text-grey-50 lg:text-2xl">
                  Latest Property
                </h1>
                <div className=" py-[12px]">
                  <p className="text-grey-800 text-sm bg-grey-50 py-[4px] rounded-sm px-[24px] font-semibold w-[120px]">Apartmenet</p>
                  <h1 className="font-semibold helFnt text-lg text-grey-50 lg:text-2xl">$100</h1>
                  
                </div>
                <div>
                  <h1 className="text-grey-100 helFnt text-base  pb-[8px] lg:text-lg">Wooland Center</h1>
                  <p className="text-grey-50 helFnt text-sm lg:text-base">Ogbomoso, Oyo state.</p>
                </div>
              </div>

              <div className="pt-[12px]">
                <button className="border border-grey-100 py-[8px] px-[32px] text-grey-50">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[16px] lg:px-[32px]">
        <h1 className="gilFnt font-semibold">Recomended Property </h1>
      </div>
      <div className="py-[16px] px-[16px]  grid grid-cols-1 lg:grid-cols-4 lg:px-[32px] lg:py-[32px]">
        <div
          style={{ background: "white" }}
          className="shadow-md py-[8px] px-[8px]"
        >
          <div className="relative">
            <Image className="h-[200px] object-cover" src={house} alt="" />
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
    </div>
  );
}

export default page