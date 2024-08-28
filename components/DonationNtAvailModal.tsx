'use client'
import { AppContextAPI } from "@/context api/context";
import { useContext } from "react";

const DonationNtAvailModal = () => {
  const {notAvailableModalState, openCloseDonationNotAvailableBtn} = useContext(AppContextAPI)
  return (
    <>
      {notAvailableModalState && (
        <div className="transition-all opacity-100 visible w-full h-full fixed top-0 bg-transblack-500 flex justify-center items-center">
          <div className="pb-[24px] px-[24px] bg-grey-50  shadow-md transition visible opacity-1 translate-y-1 lg:pb-[32px] lg:px-[32px]">
            <div>
              <button onClick={()=>openCloseDonationNotAvailableBtn(false)} className="py-[16px]">
                <svg
                  className="rotate-[180deg] w-[14px] h-[14px] lg:w-[16px] lg:h-[16px "
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9H17M17 9L9 1M17 9L9 17"
                    stroke="#2E3830"
                    strokeWidth={2}
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center py-[12px]">
              <svg
                className="w-[24px] h-[24px]"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 25V1H25V25H1Z" fill="#1CE34A" />
                <path
                  d="M2.5 8.5V2.5H23.5V16M2.5 8.5H13V10H2.5M2.5 8.5V10M2.5 10V23.5H23.5V17.5M23.5 17.5H13V16H23.5M23.5 17.5V16M1 1V25H25V1H1Z"
                  stroke="white"
                  stroke-linecap="round"
                />
              </svg>
              <h1 className=" gilFnt pl-[8px] font-semibold text-2xl text-grey-800 lg:text-2xl">
                Febila Foundation
              </h1>
            </div>
            <div className="">
              <p className="helFnt text-sm  text-grey-700 lg:text-sm">
                Sorry ! Donation not available
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DonationNtAvailModal