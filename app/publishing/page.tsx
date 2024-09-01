import React from 'react'
import Image from 'next/image';
import storyImg from "@/public/images/story.jpg";
import novel from "@/public/images/novel.jpg"
import magazine from "@/public/images/magazine.jpg"
import textbook from "@/public/images/text-book.jpg"
const page = () => {
  return (
    <div>
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
      <div className="relative py-[16px] px-[16px] lg:px-[32px] lg:py-[32px]">
        {/* text sec */}
        <div className="py-[16px] px-[16px]  border border-b-0 border-grey-200 lg:flex lg:justify-between lg:items-end">
          <h1 className="gilFnt text-[32px] text-grey-800 font-semibold pb-[6px] md:leading-[5rem] md:text-6xl lg:w-[40%]">
            WELCOME TO FEBILA PUBLISHING
          </h1>
          <p className="helFnt text-sm text-grey-700 leading-[1.7em] pt-[6px] md:text-lg lg:w-[30%]">
            <span className="text-lg text-green-500  italic font-semibold">
              Febila
            </span>{" "}
            foundation is a home for all and it is also an hope for all
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[210px] md:h-[510px]">
          {/* image */}
          <div className="absolute h-[210px] md:h-[510px] z-0">
            <Image
              alt=""
              className="h-[210px] md:h-[510px] object-cover"
              src={storyImg}
            />
          </div>
          {/* cover */}
          {/* put the indicator inside */}
          <div className="bg-transblack-500  w-full absolute md:h-[510px]  h-[210px]"></div>
        </div>
      </div>

      <div className="py-[16px] px-[16px] lg:py-[32px] lg:px-[32px]">
        <div className="pb-[16px] ">
          <h1 className="gilFnt font-semibold text-grey-800 text-2xl lg:text-5xl">
            Our Areas Of Concentration
          </h1>
        </div>
        <div className="py-[16px] px-[16px] lg:py-[32px] lg:px-[32px] border border-grey-200">
          <div className="lg:grid lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="gilFnt text-2xl font-semibold text-grey-800 lg:text-3xl">
                Literary Books
              </h1>
              <p className="helFnt text-grey-700 text-sm py-[16px] lg:text-base">
                Febila is skilled when it comes to publishing literary books
                like:
              </p>
              <ul className="flex">
                <li className="flex items-center text-sm helFnt text-grey-600 font-semibold lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Novel</span>
                </li>
                <li className="flex px-[16px] items-center text-sm helFnt text-grey-600 font-semibold py-[16px] lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Drama</span>
                </li>
                <li className="flex items-center text-sm helFnt text-grey-600 font-semibold lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Poem</span>
                </li>
              </ul>
            </div>
            <div className="py-[16px]">
              <Image
                className="h-[250px] w-full lg:h-[510px] object-cover lg:object-none"
                src={novel}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="py-[16px] px-[16px] lg:py-[32px] lg:px-[32px] border border-grey-200 mt-[16px] lg:mt-[48px]">
          <div className="lg:grid lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="gilFnt text-2xl font-semibold text-grey-800 lg:text-3xl">
                Textbook
              </h1>
              <p className="helFnt text-grey-700 text-sm py-[16px] lg:text-base">
                We can help your publish your textbook in various studies like:
              </p>
              <ul className="flex">
                <li className="flex items-center text-sm helFnt text-grey-600 font-semibold lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Mathematics</span>
                </li>
                <li className="flex px-[16px] items-center text-sm helFnt text-grey-600 font-semibold py-[16px] lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">English</span>
                </li>
                <li className="flex items-center text-sm helFnt text-grey-600 font-semibold lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Physics</span>
                </li>
              </ul>
              <p className="text-xs text-grey-500 italics">And many more</p>
            </div>
            <div className="py-[16px]">
              <Image
                className="h-[250px] w-full object-cover lg:object-none lg:h-[510px]"
                src={textbook}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="py-[16px] px-[16px] lg:py-[32px] lg:px-[32px] border border-grey-200 mt-[16px] lg:mt-[48px] ">
          <div className="lg:grid lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="gilFnt text-2xl font-semibold text-grey-800 lg:text-3xl">
                Magazine
              </h1>
              <p className="helFnt text-grey-700 text-sm py-[16px] lg:text-base">
                We can help your publish your magazine variety like:
              </p>
              <ul className="flex">
                <li className="flex items-center text-sm helFnt text-grey-600 font-semibold lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Lifestyle</span>
                </li>
                <li className="flex px-[16px] items-center text-sm helFnt text-grey-600 font-semibold py-[16px] lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Fashion</span>
                </li>
                <li className="flex items-center text-sm helFnt text-grey-600 font-semibold lg:text-base">
                  <span className=" rotate-[80deg]">
                    <svg
                      className="w-[14px] h-[12px] lg:w-16px lg:h-14px"
                      viewBox="0 0 14 12"
                      fill="#38E761"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" />
                    </svg>
                  </span>{" "}
                  <span className="pl-[8px]">Health</span>
                </li>
              </ul>
              <p className="text-xs text-grey-500 italics">
                And many not mentioned
              </p>
            </div>
            <div className="py-[16px]">
              <Image
                className="h-[250px] w-full lg:h-[510px] object-cover lg:object-none  "
                src={magazine}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page