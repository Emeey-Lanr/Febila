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
              <Link
                href="/real-estate"
                className="text-sm text-grey-700 lg:text-base"
              >
                Real Estate
              </Link>
            </li>
            <li className="py-[8px]">
              <Link
                href="/agriculture"
                className="text-sm text-grey-700 lg:text-base"
              >
                Agriculture
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="" className="text-sm text-grey-700 lg:text-base">
                Fashion
              </Link>
            </li>
            <li className="py-[8px]">
              <Link href="/" className="text-sm text-grey-700 lg:text-base">
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
          </ul>
        </div>

        <div className="lg:w-[20%] ">
          <div className="flex items-center">
            <svg
              className='w-[24px] h-[24px]'
              viewBox="0 0 28 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 22L6 14M26 22L17.5777 5.15542C16.1036 2.20722 11.8964 2.20722 10.4223 5.15542L6 14M6 14H14"
                stroke="#1CE34A"
                stroke-width="4"
                stroke-linecap="round"
              />
            </svg>

            <h1 className="gilFnt text-2xl font-semibold text-grey-800 px-[8px] lg:text-3xl">
              Febila
            </h1>
          </div>

          <div className="py-[8px]">
            <p className="flex items-center text-xs text-grey-700 font-helvetica">
              copyright{" "}
              <span className="px-[4px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="6" cy="6" r="5.5" stroke="#2E3830" />
                  <path
                    d="M7.5 3.40135C7.05874 3.14609 6.54643 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9C6.54643 9 7.05874 8.85391 7.5 8.59865"
                    stroke="#2E3830"
                    stroke-width="0.5"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
              2024. Febila.
            </p>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Footer