import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="border border-grey-200 border-x-0 relative">
      <svg
        className="absolute left-0 top-[40px]"
        width="60"
        height="148"
        viewBox="0 0 60 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cy="74" rx="60" ry="74" fill="#D1FE51" />
      </svg>
      <svg
        className="absolute left-0 top-[120px]"
        width="76"
        height="148"
        viewBox="0 0 76 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="16" cy="74" rx="60" ry="74" fill="#BFFA18" />
      </svg>

      <div className="py-[32px] px-[32px] relative  items-start lg:flex lg:justify-between lg:py-[48px] md:grid md:grid-cols-3">
        <div className="py-[16px] lg:w-[30%] md:col-span-4">
          <h2 className="gilFnttext-grey-800 text-xl font-semibold lg:text-2xl">
            News Letter
          </h2>
          <p className="helFnt text-sm text-grey-700 py-[16px] lg:text-base">
            Subscribe to our news letter to hear the latest about our project
            and help contribute{" "}
          </p>
          <div>
            <input
              style={{ background: "none" }}
              className="h-[32px] px-[4px] text-sm caret-grey-600 focus:rounded-none focus:outline-grey-600 border border-grey-300 bg-transparent w-full lg:h-[48px]"
              type="text"
            />
            <p className="py-[8px] text-xs"></p>
            <button className="py-[8px] px-[16px] text-grey-50 font-semibold text-sm bg-green-500 lg:py-[16px] lg:w-[200px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="py-[16px] lg:pt-0 lg:w-[20%]">
          <p className="gilFnt text-base text-grey-800 font-semibold lg:text-lg">
            Services
          </p>
          <ul className="helFnt">
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Real Estate
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Agriculture
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Fashion
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Entertainment
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-[16px] lg:pt-0 lg:w-[20%] ">
          <p className="gilFnt text-base text-grey-800 font-semibold lg:text-lg">
            Contact
          </p>
          <ul className="helFnt">
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Facebook
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Instagram
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                X
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Gmail
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700">
                Whatsppp
              </Link>
            </li>
          </ul>
        </div>

        <div className='lg:w-[20%] '>
          <div className="flex items-center">
            <svg className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
             
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
            <h1 className="gilFnt text-2xl font-semibold text-grey-800 px-[8px] lg:text-3xl">
              Febila
            </h1>
          </div>
          <div className="py-[8px]">
            <p className="helFnt text-xs text-grey-700 lg:text-base">Lagos Nigeria</p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Footer