'use client'

import IndicationBtn from "@/components/IndicationBtn"
import LearnMoreBtn from "@/components/LearnMoreBtn"
import Slide from "@/components/Slide"
import realEstate from "@/public/images/house 2.jpg"
import Image from "next/image"
import house1 from "@/public/images/house 1.jpg"
import hosue2 from "@/public/images/house 2.jpg"
import house3 from "@/public/images/house 3.jpg"
import storyImg from "@/public/images/story.jpg"
import agri from "@/public/images/farm.jpg"
import { useEffect, useState } from "react"


const Index = () => {
  const [before, setBefore] = useState(-1)
  const [after, setAfter] = useState(-1)
  const [styles, setStyles] = useState<string[]>(['hidden', 'hidden', 'hidden', 'hidden', 'hidden'])

//   const funcDo = () => {
  
//     if (before > after ) {
//     let notStyle = styles
//       setAfter(after + 1)
//       notStyle[after] = 'hidden'
//    setStyles(notStyle);
        
        
//     } else if (before < after) {
//      let notStyle = styles
//       setAfter(0)
//       notStyle[after] = "hidden";
//     setStyles(notStyle);
       
//     }
   
    
//     if (before === styles.length - 1) {
//        let notStyle = styles;
//        setBefore(0)
//       notStyle[before] = "block";
//        setStyles(notStyle);

//     } else {
//      let notStyle = styles;
//       setBefore(before + 1)
//       notStyle[before] = "block";
//        setStyles(notStyle);
//     }
   
  
  
//     console.log( styles)
 
//     // setTimeout(funcDo, 4000)
    
// }
//   useEffect(() => {
//     setTimeout(() => {
//       funcDo()
//     },3000)
 
// },[before])
  return (
    <div className="">
      <svg
        className="lg:hidden absolute left-0 top-[100px]"
        width="60"
        height="148"
        viewBox="0 0 60 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cy="74" rx="60" ry="74" fill="#D1FE51" />
      </svg>
      <svg
        className="lg:hidden absolute  left-0 top-[200px]"
        width="76"
        height="148"
        viewBox="0 0 76 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="16" cy="74" rx="60" ry="74" fill="#BFFA18" />
      </svg>
      <div className="relative px-[32px] py-[32px]">
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
                  <IndicationBtn width="w-[98px]" describtionName="Febila" />
                </div>

                <LearnMoreBtn
                  borderColor="border-transwhite-300"
                  color="text-grey-50"
                  url="real-estate"
                />
              </div>
              <div
                className={` border  w-[32px] flex justify-center items-center text-grey-50 h-[32px]   lg:h-[42px] lg:w-[42px]`}
              >
                {before > -1 && before + 1}
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
                people in need of those needs, you can make an impact by
                donating
              </p>
              <div className="flex">
                <button className=" text-grey-50 bg-green-500 flex justify-center items-center py-[8px] w-[98px] lg:w-[200px] lg:py-[16px]">
                  Donate
                </button>
                <div className="px-[8px]" />
                <LearnMoreBtn
                  borderColor="border-transwhite-300"
                  color="text-grey-50"
                  url="foundation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Estate */}
      <div className="gilFnt py-[32px] text-2xl px-[32px]">
        <div className="py-[16px] px-[16px] border border-grey-200  border-b-0 lg:w-full lg:flex lg:items-start lg:justify-between lg:py-[48px]">
          <h1 className="text-grey-800 text-2xl font-semibold lg:text-5xl lg:w-[30%]">
            Let Us Find A Home For You
          </h1>
          <div className="lg:w-[40%]">
            <p className="helFnt text-grey-700 text-sm py-[12px] lg:text-base ">
              Looking to become a home owner or start from the humble beginning
              of rent owne, we get you covered
            </p>
            <LearnMoreBtn
              borderColor="border-grey-300"
              color="text-grey-900"
              url="real-estate"
            />
          </div>
        </div>
        <div className="border border-t-0 border-grey-300 py-[16px] px-[8px] lg:border-0 lg:py-0 lg:px-0  lg:grid lg:grid-cols-3 lg:gap-x-6 ">
          <div className="h-[240px] lg:h-[464px] relative overflow-hidden">
            <Image
              className="h-[240px] object-cover absolute md:h-[464px]"
              alt=""
              src={hosue2}
            />
            <div className="flex justify-between items-end px-[8px] py-[8px] w-[90%] bg-transwhite-700 absolute top-[10px] left-[5%] right-[5%] lg:top-[72%] lg:h-[92px]">
              <div>
                <h6 className="text-lg pb-[4px] helFnt text-grey-900 lg:text-2xl">
                  Febila Home
                </h6>
                <p className=" text-xs pt-[4px] text-grey-700 lg:text-base">
                  <span className="text-sm text-grey-900 lg:text-lg">23</span>{" "}
                  units left
                </p>
              </div>
              <div>
                <button className="py-[8px] px-[8px] bg-green-500 rounded-lg">
                  <svg
                    className="w-[16px] h-[16px]"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9H17M17 9L9 1M17 9L9 17"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="h-[240px] mt-[16px] mb-[16px] relative overflow-hidden lg:m-0 lg:h-[464px]">
            <Image
              className="h-[240px] object-cover  absolute md:h-[464px]"
              alt=""
              src={house1}
            />
            <div className="flex justify-between items-end px-[8px] py-[8px] w-[90%] bg-transwhite-700 absolute top-[10px] left-[5%] right-[5%] lg:top-[72%] lg:h-[92px]">
              <div>
                <h6 className="text-lg pb-[4px] helFnt text-grey-900 lg:text-2xl">
                  Jarus Home
                </h6>
                <p className=" text-xs pt-[4px] text-grey-700 lg:text-base">
                  <span className="text-sm text-grey-900 lg:text-lg">23</span>{" "}
                  units left
                </p>
              </div>
              <div>
                <button className="py-[8px] px-[8px] bg-green-500  rounded-full">
                  <svg
                    className="w-[16px] h-[16px]"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9H17M17 9L9 1M17 9L9 17"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="h-[240px] relative overflow-hidden lg:h-[464px]">
            <Image
              className="h-[240px] object-cover absolute md:h-[464px]"
              alt=""
              src={house3}
            />
            <div className="flex justify-between items-end px-[8px] py-[8px] w-[90%] bg-transwhite-700 absolute  top-[10px] left-[5%] right-[5%] lg:top-[72%] lg:h-[92px]">
              <div>
                <h6 className="text-lg pb-[4px] helFnt text-grey-900 lg:text-2xl">
                  Jarus Home
                </h6>
                <p className=" text-xs pt-[4px] text-grey-700 lg:text-base">
                  <span className="text-sm text-grey-900 lg:text-lg">23</span>{" "}
                  units left
                </p>
              </div>
              <div>
                <button className="py-[8px] px-[8px] bg-green-500 rounded-lg">
                  <svg
                    className="w-[16px] h-[16px]"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 9H17M17 9L9 1M17 9L9 17"
                      stroke="white"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fashion */}
      <div className="py-[32px] ">
        <div className="fashionbg bg-fixed bg-no-repeat bg-cover h-[100vh] w-full md:bg-contain md:bg-repeat">
          <div className="bg-transblack-500  w-full h-[100vh] flex justify-center lg:justify-start items-center">
            <div className="px-[32px] py-[32px]">
              <h1 className="gilFnt pb-[12px] text-2xl text-grey-50 lg:text-5xl font-semibold lg:w-[45%]">
                Nothing Makes U Stylish More Than Some Febs On
              </h1>
              <p className="helFnt pt[12px] pb-[12px] text-sm text-grey-50 leading-[1.7rem] lg:w-[40%] lg:text-base">
                Our fashion collection creates a top notch identity for you,
                which makes you distinct from your peers, an embodiment of
                elegance which radiants your beauty when put on.
              </p>
              <div className="flex">
                <IndicationBtn width="w-[98px]" describtionName="Fashion" />
                <div className="px-[8px]" />
                <LearnMoreBtn
                  borderColor="border-transwhite-300"
                  color="text-grey-50"
                  url="http://vercel.febfas.com"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="entertainmentbg bg-fixed bg-no-repeat bg-cover h-[100vh] w-full">
          <div className="bg-transblack-500  w-full h-[100vh] flex justify-center lg:justify-start items-center">
            <div className="px-[32px] py-[32px]">
              <h1 className="gilFnt pb-[12px] text-2xl text-grey-50 lg:text-5xl font-semibold lg:w-[45%]">
                We Have The Needed Starter For Your Events
              </h1>
              <p className="helFnt pt[12px] pb-[12px] text-sm text-grey-50 leading-[1.7rem] lg:w-[40%] lg:text-base">
                Looking to start an event ? Our ticket event platform offers you
                a space not just to sell your tickets but also to sell
                assesories associated with the event
              </p>
              <div className="flex">
                <IndicationBtn
                  width="w-[120px]"
                  describtionName="Entertainment"
                />
                <div className="px-[8px]" />
                <LearnMoreBtn
                  url=""
                  borderColor="border-transwhite-300"
                  color="text-grey-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publishing */}
      <div className="py-[32px] text-2xl px-[32px]">
        <div className="py-[16px] px-[16px] border border-grey-200  border-b-0 lg:w-full lg:flex lg:items-start lg:justify-between lg:py-[48px]">
          <h1 className="gilFnt text-grey-800 text-2xl font-semibold lg:text-5xl lg:w-[30%]">
            Let Us Publish Your Story
          </h1>
          <div className="lg:w-[40%]">
            <p className="helFnt text-grey-700 text-sm py-[12px] lg:text-base ">
              Looking forward to have the best selling book ? You can never go
              wrong with Febila Publishing. We publish all types of books, bring
              ou that dream out of your shelves let us publish
            </p>
            <LearnMoreBtn
              url="/publishing"
              borderColor="border-grey-300"
              color="text-grey-900"
            />
          </div>
        </div>

        <div className="px-[8px] py-[12px] border border-grey-200 border-t-0 lg:m-0  lg:border-0 lg:py-0 lg:px-0">
          <Image
            className="h-[240px] object-cover   md:h-[464px]"
            alt=""
            src={storyImg}
          />
        </div>
      </div>

      {/* Agriculture */}
      <div className="py-[32px] text-2xl px-[32px] lg:pb-[64px]">
        <div className="py-[16px] px-[16px] border border-grey-200  border-b-0 lg:w-full lg:flex lg:items-start lg:justify-between lg:py-[48px]">
          <h1 className="gilFnt text-grey-800 text-2xl font-semibold lg:text-5xl lg:w-[30%]">
            Embark On The Best Agriculture Investment With Us
          </h1>
          <div className="lg:w-[40%]">
            <p className="helFnt text-grey-700 text-sm py-[12px] lg:text-base ">
              We have the best agricultural investment scheme to boast your
              income in term of raw materials, food and financial gain
            </p>
            <LearnMoreBtn
              url="/agriculture"
              borderColor="border-grey-300"
              color="text-grey-900"
            />
          </div>
        </div>

        <div className="px-[8px] py-[12px] border border-grey-200 border-t-0 lg:m-0  lg:border-0 lg:px-0 lg:py-0">
          <Image
            className="h-[240px] object-cover   md:h-[464px]"
            alt=""
            src={agri}
          />
        </div>
      </div>
    </div>
  );
}

export default Index
