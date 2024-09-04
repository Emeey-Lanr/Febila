import Image from "next/image";
import aboutUs from "@/public/images/about us.jpg"
const page = () => {
  return (
    <div>
      <div className="relative py-[16px] px-[16px]  lg:px-[32px] lg:py-[32px]">
        {/* text sec */}
        <div className="py-[16px] px-[16px]  border border-b-0 border-grey-200  md:py-[48px] md:justify-between">
          <h1 className="gilFnt text-[32px]  text-grey-800 font-semibold pb-[6px] md:leading-[5rem] md:text-6xl lg:text-center">
            ABOUT US
          </h1>
          <p className="helFnt text-sm  text-grey-700 leading-[1.7em] pt-[6px] md:text-lg lg:text-center">
            A story about
            <span className="text-lg text-green-500  italic font-semibold">
              Febila
            </span>{" "}
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[210px] md:h-[510px]">
          {/* image */}
          <div className="absolute w-[100%] h-[210px] md:h-[510px]  z-0">
            <Image
              alt=""
              className="h-[210px] w-[100%]  md:h-[510px] object-cover"
              src={aboutUs}
            />
          
          </div>
          {/* cover */}
          {/* put the indicator inside */}
          <div className="bg-transblack-500  w-full absolute md:h-[510px]  h-[210px]"></div>
        </div>
      </div>

      <div className="py-[16px] px-[16px]   lg:px-[32px] lg:py-[32px]">
        <div>
          <h1 className="gilFnt text-2xl text-grey-800  font-semibold pb-[16px] lg:text-5xl">
            Our Chain Of Interest
          </h1>
        </div>

        <div className="md:grid md:grid-cols-2 gap-[24px] lg:grid-cols-3 lg:pt-[24px] ">
          <div>
            {/* Icon */}
            <div className="flex items-center pb-[16px]">
              <div
                // style={{ background: "hsl(133, 76%, 95%)" }}
                className=" flex justify-center items-center "
              >
                <span
                  // style={{ background: "hsl(133, 76%, 90%)" }}
                  className="px-[16px] py-[16px]  flex justify-center items-center border border-grey-200 lg:px-[20px] lg:py-[20p16"
                >
                  <svg
                    className="w-[20px] h-[20px]"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21L15 19C13.8954 17.8954 12.1046 17.8954 11 19C9.89543 20.1046 9.89543 21.8954 11 23L17 29L23 23C24.1046 21.8954 24.1046 20.1046 23 19C21.8954 17.8954 20.1046 17.8954 19 19L17 21Z"
                      stroke="#38E761"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M21 13V7.04721C21 7.01616 21.0072 6.98554 21.0211 6.95777L23.7722 1.45554C23.8535 1.29296 23.6933 1.115 23.5231 1.17883L16.0502 3.98117C16.0173 3.99351 15.9818 3.99696 15.9471 3.99118L10.2858 3.04764C10.1478 3.02463 10.0294 3.1469 10.0568 3.28414L10.9961 7.98058C10.9987 7.9935 11 8.00663 11 8.0198V13M5 15.883V28.9172C5 28.9702 4.97893 29.0211 4.94142 29.0586L1.34142 32.6586C1.21543 32.7846 1.30466 33 1.48284 33H32.5172C32.6953 33 32.7846 32.7846 32.6586 32.6586L29.0586 29.0586C29.0211 29.0211 29 28.9702 29 28.9172V15.883C29 14.1613 27.8983 12.6328 26.2649 12.0883L18.8974 9.63246C17.6658 9.22192 16.3342 9.22192 15.1026 9.63246L7.73509 12.0883C6.10172 12.6328 5 14.1613 5 15.883Z"
                      stroke="#38E761"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="pl-[16px]">
                <p className="gilFnt  italic text-xs  text-green-500 font-semibold lg:font-bold lg:text-base">
                  Febila
                </p>
                <h1 className="gilFnt text-lg text-grey-800 font-semibold lg:text-3xl">
                  Foundation
                </h1>
              </div>
            </div>

            <div>
              <p className="helFnt text-sm text-grey-700 leading-[34px] lg:text-base">
                Febila is into charity where she seeks to improve people's Lives
                through her charity foundation by catering for people's needs
              </p>
            </div>
          </div>

          <div className="mt-[24px] lg:mt-0">
            {/* Icon */}
            <div className="flex items-center pb-[16px]">
              <div
                // style={{ background: "hsl(133, 76%, 95%)" }}
                className=" flex justify-center items-center "
              >
                <span
                  // style={{ background: "hsl(133, 76%, 90%)" }}
                  className="px-[16px] py-[16px] flex justify-center items-center border border-grey-200 lg:py-[20px] lg:px-[20px]"
                >
                  <svg
                    className="w-[20px] h-[20px]"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29 33V9.2C29 9.08954 29.0895 9 29.2 9H32.1528C32.3638 9 32.431 8.7155 32.2422 8.62111L17.0894 1.04472C17.0331 1.01657 16.9669 1.01657 16.9106 1.04472L3 8M29 33H33M29 33H21M5 33V9.2C5 9.08954 4.91046 9 4.8 9H1.84721C1.63617 9 1.56901 8.7155 1.75777 8.62111L3 8M5 33H1M5 33H13M3 1V8M13 33V17.2C13 17.0895 13.0895 17 13.2 17H20.8C20.9105 17 21 17.0895 21 17.2V33M13 33H21"
                      stroke="#38E761"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="pl-[16px]">
                <p className="gilFnt  italic text-xs  text-green-500 font-semibold lg:font-bold lg:text-base">
                  Febila
                </p>
                <h1 className="gilFnt text-lg text-grey-800 font-semibold lg:text-3xl">
                  Real Estate
                </h1>
              </div>
            </div>

            <div>
              <p className="helFnt text-sm text-grey-700 leading-[34px] lg:text-base">
                Febila is into Real Estate, where she finds houses for people to
                own or rent and also sell landed properties
              </p>
            </div>
          </div>

          <div className="mt-[24px] lg:mt-0">
            {/* Icon */}
            <div className="flex items-center pb-[16px]">
              <div
                // style={{ background: "hsl(133, 76%, 95%)" }}
                className=" flex justify-center items-center "
              >
                <span
                  // style={{ background: "hsl(133, 76%, 90%)" }}
                  className="px-[16px] py-[16px] flex justify-center items-center border border-grey-200 lg:py-[20px] lg:px-[20px]"
                >
                  <svg
                    className="w-[20px] h-[20px]"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M33 3L1.75777 18.6211C1.56901 18.7155 1.63617 19 1.84721 19H17M33 3L17.3789 34.2422C17.2845 34.431 17 34.3638 17 34.1528V19M33 3L17 19"
                      stroke="hsl(133, 76%, 50%)"
                      stroke-width="2"
                    />
                    <path
                      d="M1 35L9 27M9 35L13 31M1 27L5 23"
                      stroke="hsl(133, 76%, 50%)"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="pl-[16px]">
                <p className="gilFnt  italic text-xs  text-green-500 font-semibold lg:font-bold lg:text-base">
                  Febila
                </p>
                <h1 className="gilFnt text-lg text-grey-800 font-semibold lg:text-3xl">
                  Publishing
                </h1>
              </div>
            </div>

            <div>
              <p className="helFnt text-sm text-grey-700 leading-[34px] lg:text-base">
                Febila is also into publishing. We can help you publish your
                novels, poem, magazine, textbooks and many more
              </p>
            </div>
          </div>

          <div className="mt-[18px]  lg:mt-[32px]">
            {/* Icon */}
            <div className="flex items-center pb-[16px]">
              <div
                // style={{ background: "hsl(133, 76%, 95%)" }}
                className=" flex justify-center items-center "
              >
                <span
                  // style={{ background: "hsl(133, 76%, 90%)" }}
                  className="px-[16px] py-[16px] flex justify-center items-center border border-grey-200 lg:py-[20px] lg:px-[20px]"
                >
                  <svg
                    className="w-[20px] h-[20px]"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 33H5M33 33H29M5 33L1.02111 25.0422C1.00723 25.0145 1 24.9838 1 24.9528V17.0828C1 17.0298 1.02107 16.9789 1.05858 16.9414L8.94142 9.05858C8.97893 9.02107 9.0298 9 9.08284 9H24.9172C24.9702 9 25.0211 9.02107 25.0586 9.05858L32.9414 16.9414C32.9789 16.9789 33 17.0298 33 17.0828V24.9528C33 24.9838 32.9928 25.0145 32.9789 25.0422L29 33M5 33H29M13 17V1.2C13 1.08954 13.0895 1 13.2 1H20.8C20.9105 1 21 1.08954 21 1.2V17"
                      stroke="hsl(133, 76%, 50%)"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="pl-[16px]">
                <p className="gilFnt  italic text-xs  text-green-500 font-semibold lg:font-bold lg:text-base">
                  Febila
                </p>
                <h1 className="gilFnt text-lg text-grey-800 font-semibold lg:text-3xl">
                  Fashion
                </h1>
              </div>
            </div>

            <div>
              <p className="helFnt text-sm text-grey-700 leading-[34px] lg:text-base">
                Febila also has it fashion brand where she makes clothing
                accesories to complement your look
              </p>
            </div>
          </div>

          <div className="mt-[18px]  lg:mt-[32px]">
            {/* Icon */}
            <div className="flex items-center pb-[16px]">
              <div
                // style={{ background: "hsl(133, 76%, 95%)" }}
                className=" flex justify-center items-center "
              >
                <span
                  // style={{ background: "hsl(133, 76%, 90%)" }}
                  className="px-[16px] py-[16px] flex justify-center items-center border border-grey-200 lg:py-[20px] lg:px-[20px]"
                >
                  <svg
                    className="w-[20px] h-[20px]"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 12.8V1.2C1 1.08954 1.08954 1 1.2 1H32.8C32.9105 1 33 1.08954 33 1.2V12.8C33 12.9105 32.9105 13 32.8 13H25.2C25.0895 13 25 13.0895 25 13.2V20.8C25 20.9105 25.0895 21 25.2 21H32.8C32.9105 21 33 21.0895 33 21.2V32.8C33 32.9105 32.9105 33 32.8 33H1.2C1.08954 33 1 32.9105 1 32.8V21.2C1 21.0895 1.08954 21 1.2 21H8.8C8.91046 21 9 20.9105 9 20.8V13.2C9 13.0895 8.91046 13 8.8 13H1.2C1.08954 13 1 12.9105 1 12.8Z"
                      stroke="hsl(133, 76%, 50%)"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13 9L17.2353 16.4118M21 23L17.2353 16.4118M13 23L17.2353 16.4118M22 9L17.2353 16.4118M12 16L17.2353 16.4118M17.2353 16.4118L22 17"
                      stroke="hsl(133, 76%, 50%)"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="pl-[16px]">
                <p className="gilFnt  italic text-xs  text-green-500 font-semibold lg:font-bold lg:text-base">
                  Febila
                </p>
                <h1 className="gilFnt text-lg text-grey-800 font-semibold lg:text-3xl">
                  Entertainment
                </h1>
              </div>
            </div>

            <div>
              <p className="helFnt text-sm text-grey-700 leading-[34px] lg:text-base">
                Febila is into charity where she seeks to improve people's Lives
                through her charity foundation by catering for people's needs
              </p>
            </div>
          </div>

          <div className="mt-[18px]  lg:mt-[32px]">
            {/* Icon */}
            <div className="flex items-center pb-[16px]">
              <div
                // style={{ background: "hsl(133, 76%, 95%)" }}
                className=" flex justify-center items-center "
              >
                <span
                  // style={{ background: "hsl(133, 76%, 90%)" }}
                  className="px-[16px] py-[16px] flex justify-center items-center border border-grey-200 lg:py-[20px] lg:px-[20px]"
                >
                  <svg
                    className="w-[12px] h-[12px]"
                    viewBox="0 0 18px 18px"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L17 17M17 1L1 17"
                      stroke="hsl(133, 76%, 50%)"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="pl-[16px]">
                <p className="gilFnt  italic text-xs  text-green-500 font-semibold lg:font-bold lg:text-base">
                  Febila
                </p>
                <h1 className="gilFnt text-lg text-grey-800 font-semibold lg:text-3xl">
                  Agriculture
                </h1>
              </div>
            </div>

            <div>
              <p className="helFnt text-sm text-grey-700 leading-[34px] lg:text-base">
                Febila is into agriculture with an intiative to empower people
                through agriculture by investing in her agricultural scheme.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[16px] px-[16px]   lg:px-[32px] lg:py-[32px]">
        <div className="mission  bg-fixed  bg-cover">
          <div className="bg-transblack-500 py-[48px] flex justify-center items-center lg:py-[128px]">
            <div className="py-[16px] px-[16px]">
              <h1 className="gilFnt font-semibold text-2xl text-grey-50 lg:text-5xl">
                Our <span className="font-bold text-green-500">Mission</span>:
              </h1>
              <p className="helFnt text-sm pt-[16px] text-grey-50 leading-[24px] w-[80%] lg:w-[50%] lg:text-base ">
                We strive to build affordable services to cater for people's
                wants while striving for excellence through the output of the
                services rendered whether in the real-estate, fashion,
                entertainment and we also seek to improve people's lives
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[16px] px-[16px]   lg:px-[32px] lg:py-[32px]">
        <div className="vision  bg-fixed  bg-cover">
          <div className="bg-transblack-500 py-[48px] flex items-center lg:py-[128px]">
            <div className="py-[16px] px-[16px]">
              <h1 className="gilFnt font-semibold text-2xl text-grey-50 lg:text-5xl">
                Our <span className="font-bold text-green-500">Vision</span>:
              </h1>
              <p className="helFnt text-sm pt-[16px] text-grey-50 leading-[24px] w-[80%] lg:w-[50%] lg:text-base ">
                We want to be a force to reckon with while building our catalogue with excellence and innovative landmark strides 
                in every sector we dive in 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page