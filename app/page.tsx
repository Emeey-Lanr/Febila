'use client'

import IndicationBtn from "@/components/IndicationBtn"
import LearnMoreBtn from "@/components/LearnMoreBtn"
import Slide from "@/components/Slide"
import realEstate from "@/public/images/real estate.jpg"
import  Image from "next/image"
const Index = () => {
  return (
    <div className="">
      <svg
        className="lg:hidden absolute left-0 top-[40px]"
        width="60"
        height="148"
        viewBox="0 0 60 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cy="74" rx="60" ry="74" fill="#D1FE51" />
      </svg>
      <svg
        className="lg:hidden absolute  left-0 top-[120px]"
        width="76"
        height="148"
        viewBox="0 0 76 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="16" cy="74" rx="60" ry="74" fill="#BFFA18" />
      </svg>
      <div className="relative px-[32px] py-[16px]">
        {/* text sec */}
        <div className="py-[16px] px-[16px]  border border-b-0 border-grey-200 lg:flex lg:items-end md:py-[48px] md:justify-between">
          <h1 className="gilFnt text-[32px] text-grey-800 font-semibold pb-[6px] md:leading-[5rem] md:text-6xl">
            UNLOCKING INFINITE POSSIBILITIES FOR U
          </h1>
          <p className="helFnt text-sm text-grey-700 leading-[1.7em] pt-[6px] md:text-lg lg:w-[50%]">
            <span className="text-lg text-green-500  italic font-semibold">
              Febila
            </span>{" "}
            is a gate way that offers different services in fashion,
            entertainment, real esate, publishing, agriculture and also cater
            for people’s needs through her charity foudation
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[210px] md:h-[510px]">
          {/* image */}
          <div className="absolute h-[210px] md:h-[510px] z-0">
            <Image
              alt=""
              className="h-[210px] md:h-[510px] object-cover"
              src={realEstate}
            />
          </div>
          {/* cover */}
          {/* put the indicator inside */}
          <div className="bg-transblack-500  w-full absolute md:h-[510px]  h-[210px]">
            <div className="w-full absolute bottom-[10px] flex items-end justify-between px-[16px]">
              <div>
                <div className="py-[12px]">
                  <IndicationBtn describtionName="Febila" />
                </div>

                <LearnMoreBtn />
              </div>
              <div className="w-[32px] flex justify-center items-center text-grey-50 h-[32px]  border border-transwhite-300 lg:h-[42px] lg:w-[42px]">
                1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What we Do */}
      <div></div>

      {/* Foundation */}
      <div className="py-[32px] ">
        <div className="foundationbg_img   bg-fixed bg-no-repeat bg-cover h-[100vh] w-full">
          <div className="bg-transblack-500  w-full h-[100vh] flex justify-center lg:justify-start items-center">
            <div className="px-[32px] py-[32px]">
              <h1 className="gilFnt pb-[12px] text-2xl text-grey-50 lg:text-5xl font-semibold lg:w-[45%]">
                Impact & Save Lives Through Our Foundation
              </h1>
              <p className="helFnt pt[12px] pb-[12px] text-sm text-grey-50 leading-[1.7rem] lg:w-[40%] lg:text-base">
                We’ve initiated a lot project tailed towards providing health
                care services, free water, free eductaion and free food for
                people in need of those needs, you can make an impact by donating
              </p>
              <div className="flex">
                <button className=" text-grey-50 bg-green-500 flex justify-center items-center py-[8px] w-[98px] lg:w-[200px] lg:py-[16px]">
                  Donate
                </button>
                <div className="px-[8px]" />
                <LearnMoreBtn />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Estate */}

      {/* Fashion */}
      {/* Entertainment */}
      {/* Publishing */}
      {/* Agriculture */}
    </div>
  );
}

export default Index
