'use client'
import Image from "next/image"
const page = () => {
  return (
    <div>
            <div className="relative py-[16px] px-[16px]  lg:px-[32px] lg:py-[32px]">
        {/* text sec */}
        <div className="py-[16px] px-[16px]  border border-b-0 border-grey-200 ">
          <h1 className="gilFnt text-[32px] text-center text-grey-800 font-semibold pb-[6px] md:leading-[5rem] md:text-6xl">
            WELCOME TO FEBILA FOUNDATION
          </h1>
          <p className="helFnt text-sm text-grey-700 text-center leading-[1.7em] pt-[6px] md:text-lg ">
            <span className="text-lg text-green-500  italic font-semibold">
              Febila
            </span>{" "}
            foundation is a home for all and it is also an hope for all
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[210px] md:h-[510px]">
          {/* image */}
          <div className="absolute h-[210px] w-full md:h-[510px] z-0">
           <Image
              alt=""
              className="h-[210px] w-full  md:h-[510px] object-cover"
              src={''}
            /> 
          </div>
          {/* cover */}
          {/* put the indicator inside */}
          <div className="bg-transblack-500  w-full absolute md:h-[510px]  h-[210px]">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default page