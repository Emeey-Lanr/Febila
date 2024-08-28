import Image from "next/image";
import LearnMoreBtn from "@/components/LearnMoreBtn";
import IndicationBtn from "@/components/IndicationBtn";
import foundationhero from "@/public/images/donation.jpg"
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
      <div className="relative px-[32px] py-[32px]">
        {/* text sec */}
        <div className="py-[16px] px-[16px]  border border-b-0 border-grey-200 lg:flex lg:items-end md:py-[48px] md:justify-between">
          <h1 className="gilFnt text-[32px] text-grey-800 font-semibold pb-[6px] md:leading-[5rem] md:text-6xl">
            FREE WATER FOR ALL CLEAN WATER FOR ALL
          </h1>
          <p className="helFnt text-sm text-grey-700 leading-[1.7em] pt-[6px] md:text-lg lg:w-[50%]">
            <span className="text-lg text-green-500  italic font-semibold">
              Febila
            </span>{" "}
            has provided and still aims to provide clean and free water for
            certain demographic of people who don't have access to clean and
            free water
          </p>
        </div>

        {/* Carousel */}
        <div className="relative h-[210px] md:h-[510px]">
          {/* image */}
          <div className="absolute h-[210px] md:h-[510px] z-0">
            <Image
              alt=""
              className="h-[210px] md:h-[510px] object-cover"
              src={foundationhero}
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
              <div className="w-[32px] flex justify-center items-center text-grey-50 h-[32px]  border border-transwhite-300 lg:h-[42px] lg:w-[42px]">
                1
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who we are Do */}

      {/*What we do  */}
      <div>
        {" "}
        <div className="py-[32px] px-[32px]">
          <h1 className="gilFnt font-semibold text-2xl text-grey-800 lg:text-5xl lg:text-center pb-[12px] lg:pb-[16px]">
            What We Do
          </h1>
          <div className="md:grid md:grid-cols-2 lg:gap-3 lg:grid-cols-4 md:gap-3 pt-[12px] lg:pb-[16px]">
            <div className="px-[24px] py-[32px] border border-grey-200 lg:py-[96px]">
              {/* Heading */}
              <div className="flex items-center">
                <span>
                  <svg
                    className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px]"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.5285 16.1765L41.6911 3.22825L58.8874 8.82588V23.6085L50.3686 32.9861L49.9915 33.4013L50.4471 33.7285L63.0854 42.8019L47.6019 51.9329L47.5566 51.9597L47.5179 51.9952L35.3941 63.117L31.6075 52.1998L31.4571 51.7661L31.0122 51.879L17.4626 55.317L4.40118 58.6312L0.564515 43.0444L12.9848 33.7222L13.5176 33.3223L12.9848 32.9224L0.56912 23.6036L4.46911 8.78183L17.4851 0.652283L30.7549 16.1925L31.1514 16.6568L31.5285 16.1765Z"
                      fill="#E7FE58"
                      stroke="#788B00"
                    />

                    <path
                      d="M43 33H19V35.25C19 37.6107 20.1115 39.8336 22 41.25L24.7796 43.3347C24.9183 43.4388 25 43.6021 25 43.7755C25 44.4518 25.5482 45 26.2245 45H35.7755C36.4518 45 37 44.4518 37 43.7755C37 43.6021 37.0817 43.4388 37.2204 43.3347L40 41.25C41.8885 39.8336 43 37.6107 43 35.25V33Z"
                      stroke="black"
                      stroke-linecap="round"
                    />
                    <path
                      d="M27.1439 26.9925L26.5911 30.8625C26.5388 31.2283 26.2256 31.5 25.8561 31.5C25.4042 31.5 25.0572 31.0998 25.1211 30.6525L25.5881 27.3834C25.6955 26.6316 25.6955 25.8684 25.5881 25.1166L25.1211 21.8475C25.0572 21.4002 25.4042 21 25.8561 21C26.2256 21 26.5388 21.2717 26.5911 21.6375L27.1439 25.5075C27.2143 26 27.2143 26.5 27.1439 26.9925Z"
                      stroke="black"
                      stroke-width="0.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M33.1439 26.9925L32.5911 30.8625C32.5388 31.2283 32.2256 31.5 31.8561 31.5C31.4042 31.5 31.0572 31.0998 31.1211 30.6525L31.5881 27.3834C31.6955 26.6316 31.6955 25.8684 31.5881 25.1166L31.1211 21.8475C31.0572 21.4002 31.4042 21 31.8561 21C32.2256 21 32.5388 21.2717 32.5911 21.6375L33.1439 25.5075C33.2143 26 33.2143 26.5 33.1439 26.9925Z"
                      stroke="black"
                      stroke-width="0.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M39.1439 26.9925L38.5911 30.8625C38.5388 31.2283 38.2256 31.5 37.8561 31.5C37.4042 31.5 37.0572 31.0998 37.1211 30.6525L37.5881 27.3834C37.6955 26.6316 37.6955 25.8684 37.5881 25.1166L37.1211 21.8475C37.0572 21.4002 37.4042 21 37.8561 21C38.2256 21 38.5388 21.2717 38.5911 21.6375L39.1439 25.5075C39.2143 26 39.2143 26.5 39.1439 26.9925Z"
                      stroke="black"
                      stroke-width="0.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p className="pl-[12px]">
                  <span className="helFnt text-xs text-grey-700 lg:text-base block">
                    Fight
                  </span>
                  <span className="gilFnt  font-semibold  text-xl text-grey-800 lg:text-3xl block">
                    Poverty
                  </span>
                </p>
              </div>
              {/*text  */}
              <div className="pt-[16px] ">
                <p className="text-sm text-grey-700 lg:text-base leading-[32px] lg:leading-[36px]">
                  {" "}
                  One of the pillars of Febila Foundation, holding and
                  properling our vision is good health and well being. She
                  provides health services for rural areas and pay bill of those
                  in need of urgent medical attention
                </p>
              </div>
            </div>

            <div className="px-[24px] py-[32px] border border-grey-200 mt-[16px] md:mt-0 lg:mt-0 lg:py-[96px]">
              {/* Heading */}
              <div className="flex items-center">
                <span>
                  <svg
                    className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px]"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.5285 16.1765L41.6911 3.22825L58.8874 8.82588V23.6085L50.3686 32.9861L49.9915 33.4013L50.4471 33.7285L63.0854 42.8019L47.6019 51.9329L47.5566 51.9597L47.5179 51.9952L35.3941 63.117L31.6075 52.1998L31.4571 51.7661L31.0122 51.879L17.4626 55.317L4.40118 58.6312L0.564515 43.0444L12.9848 33.7222L13.5176 33.3223L12.9848 32.9224L0.56912 23.6036L4.46911 8.78183L17.4851 0.652283L30.7549 16.1925L31.1514 16.6568L31.5285 16.1765Z"
                      fill="#58FE58"
                      stroke="#008B00"
                    />

                    <path
                      d="M19 33H22L25 29L28 37L31 27L34 41L37 25L40 33"
                      stroke="#080808"
                      stroke-linecap="round"
                    />
                    <path
                      d="M42.6367 37.4844L40 41L37.3633 37.4844C37.1275 37.17 37 36.7875 37 36.3944C37 34.9435 38.6171 34.0781 39.8244 34.8829L40 35L40.1756 34.8829C41.3829 34.0781 43 34.9435 43 36.3944C43 36.7875 42.8725 37.17 42.6367 37.4844Z"
                      stroke="#080808"
                      stroke-width="0.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p className="pl-[12px]">
                  <span className="helFnt text-xs text-grey-700 lg:text-base block">
                    Free
                  </span>
                  <span className="gilFnt  font-semibold  text-xl text-grey-800 lg:text-3xl block">
                    Health
                  </span>
                </p>
              </div>
              {/*text  */}
              <div className="pt-[16px] ">
                <p className="text-sm text-grey-700 lg:text-base leading-[32px] lg:leading-[36px]">
                  {" "}
                  One of the pillars of Febila Foundation, holding and
                  properling our vision is good health and well being. She
                  provides health services for rural areas and pay bill of those
                  in need of urgent medical attention
                </p>
              </div>
            </div>

            <div className="px-[24px] py-[32px] border border-grey-200 mt-[16px] md:mt-0 lg:mt-0 lg:py-[96px]">
              {/* Heading */}
              <div className="flex items-center">
                <span>
                  <svg
                    className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px]"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.5285 16.1765L41.6911 3.22825L58.8874 8.82588V23.6085L50.3686 32.9861L49.9915 33.4013L50.4471 33.7285L63.0854 42.8019L47.6019 51.9329L47.5566 51.9597L47.5179 51.9952L35.3941 63.117L31.6075 52.1998L31.4571 51.7661L31.0122 51.879L17.4626 55.317L4.40118 58.6312L0.564515 43.0444L12.9848 33.7222L13.5176 33.3223L12.9848 32.9224L0.56912 23.6036L4.46911 8.78183L17.4851 0.652283L30.7549 16.1925L31.1514 16.6568L31.5285 16.1765Z"
                      fill="#5858FE"
                      stroke="#00008B"
                    />

                    <path
                      d="M31 30L31.9667 31.8011C32.0721 31.9975 32.1627 32.2014 32.2378 32.4112L32.3428 32.7047C32.4468 32.9955 32.5 33.302 32.5 33.6108V33.8679C32.5 34.0816 32.4543 34.2928 32.3661 34.4874C31.8337 35.6614 30.1663 35.6614 29.6339 34.4874C29.5457 34.2928 29.5 34.0816 29.5 33.8679V33.6108C29.5 33.302 29.5532 32.9955 29.6572 32.7047L29.7622 32.4112C29.8373 32.2014 29.9279 31.9975 30.0333 31.8011L31 30Z"
                      stroke="#080808"
                      stroke-width="0.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M20.5 25.5L24.9214 26.9738C24.9717 26.9906 25.0267 26.9867 25.0741 26.963L27.9106 25.5447C27.9669 25.5166 28.0331 25.5166 28.0894 25.5447L30.9106 26.9553C30.9669 26.9834 31.0331 26.9834 31.0894 26.9553L33.9106 25.5447C33.9669 25.5166 34.0331 25.5166 34.0894 25.5447L36.9296 26.9648C36.9749 26.9874 37.027 26.9921 37.0755 26.9778L42.1 25.5M42.1 25.5L42.9522 21.2392C42.9769 21.1155 42.8822 21 42.756 21H19.244C19.1178 21 19.0231 21.1155 19.0478 21.2392L21.9678 35.8392C21.9865 35.9327 22.0686 36 22.164 36H27.8C27.9105 36 28 36.0895 28 36.2V41.8C28 41.9105 27.9105 42 27.8 42H25.8472C25.6362 42 25.569 42.2845 25.7578 42.3789L30.9106 44.9553C30.9669 44.9834 31.0331 44.9834 31.0894 44.9553L36.2422 42.3789C36.431 42.2845 36.3638 42 36.1528 42H34.2C34.0895 42 34 41.9105 34 41.8V36.2C34 36.0895 34.0895 36 34.2 36H39.836C39.9314 36 40.0135 35.9327 40.0322 35.8392L42.1 25.5Z"
                      stroke="#080808"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p className="pl-[12px]">
                  <span className="helFnt text-xs text-grey-700 lg:text-base block">
                    Free
                  </span>
                  <span className="gilFnt  font-semibold  text-xl text-grey-800 lg:text-3xl block">
                    Water
                  </span>
                </p>
              </div>
              {/*text  */}
              <div className="pt-[16px] ">
                <p className="text-sm text-grey-700 lg:text-base leading-[32px] lg:leading-[36px]">
                  {" "}
                  One of the pillars of Febila Foundation, holding and
                  properling our vision is good health and well being. She
                  provides health services for rural areas and pay bill of those
                  in need of urgent medical attention
                </p>
              </div>
            </div>

            <div className="px-[24px] py-[32px] border border-grey-200 mt-[16px] md:mt-0 lg:mt-0 lg:py-[96px]">
              {/* Heading */}
              <div className="flex items-center">
                <span>
                  <svg
                    className="w-[64px] h-[64px] lg:w-[72px] lg:h-[72px]"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.5285 16.1765L41.6911 3.22825L58.8874 8.82588V23.6085L50.3686 32.9861L49.9915 33.4013L50.4471 33.7285L63.0854 42.8019L47.6019 51.9329L47.5566 51.9597L47.5179 51.9952L35.3941 63.117L31.6075 52.1998L31.4571 51.7661L31.0122 51.879L17.4626 55.317L4.40118 58.6312L0.564515 43.0444L12.9848 33.7222L13.5176 33.3223L12.9848 32.9224L0.56912 23.6036L4.46911 8.78183L17.4851 0.652283L30.7549 16.1925L31.1514 16.6568L31.5285 16.1765Z"
                      fill="#FE5858"
                      stroke="#8B0000"
                    />

                    <path
                      d="M29.6875 22.4L20.5 21V40.6L29.6875 42V22.4Z"
                      stroke="#080808"
                      stroke-width="0.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M41.5 21L32.3125 22.4V42L41.5 40.6V21Z"
                      stroke="#080808"
                      stroke-width="0.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M19 21V42L31 45L43 42V21"
                      stroke="#080808"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p className="pl-[12px]">
                  <span className="helFnt text-xs text-grey-700 lg:text-base block">
                    Free
                  </span>
                  <span className="gilFnt  font-semibold  text-xl text-grey-800 lg:text-3xl block">
                    Education
                  </span>
                </p>
              </div>
              {/*text  */}
              <div className="pt-[16px] ">
                <p className="text-sm text-grey-700 lg:text-base leading-[32px] lg:leading-[36px]">
                  {" "}
                  One of the pillars of Febila Foundation, holding and
                  properling our vision is good health and well being. She
                  provides health services for rural areas and pay bill of those
                  in need of urgent medical attention
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page