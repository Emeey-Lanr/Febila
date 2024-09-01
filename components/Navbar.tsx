'use client'
import Link from "next/link";
import { useContext } from "react";
import { AppContextAPI } from "@/context api/context";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname()
    const {openCloseSideBarBtn} = useContext(AppContextAPI);
  return (
    <div className="helFnt px-[32px] py-[24px] md:py-[32px] mx-auto flex justify-between items-center">
      {/* Logo */}
      <div>
        <svg
          className="w-[24px] h-[24px] lg:w-[42px] lg:h-[42px]"
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
      </div>

      {/* navigation */}
      <div>
        <ul className="hidden md:flex">
          <li className="px-[24px] text-grey-800">
            <Link
              href={"/"}
              className={`text-base ${pathname === "/" && "font-bold"}`}
            >
              Home
            </Link>
          </li>
          <li className="group/services  flex justify-start items-center relative px-[24px] text-grey-800">
            <span className="text-base flex items-center">
              Services{" "}
              <span className="px-[8px]">
                <svg
                  className="rotate-[180deg] group-hover/services:rotate-[0deg]"
                  width="16"
                  height="8"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 9L9 0.999999L0.999998 9"
                    stroke="#2E3830"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </span>
            <ul
              // style={{ backgroundColor: "white" }}
              className="absolute z-50 bg-grey-50 border border-grey-200 px-[24px] py-[24px] top-[100%] hidden opacity-0 invisible translate-x-[-1rem] transition-all duration-75 delay-75 ease-in-out group-hover/services:block group-hover/services:visible group-hover/services:opacity-[1] group-hover/services:translate-x-0 group-hover/services:transition-all group-hover/services:ease-in-out "
            >
              <li>
                <Link
                  className="text-sm py-[8px] px-[8px] text-grey-700 rounded-sm flex justify-between hover:bg-grey-100 hover:text-grey-900"
                  href={""}
                >
                  Real Estate{" "}
                  <span>
                    <svg
                      className="rotate-[45deg]"
                      width="14"
                      height="6"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 9L9 0.999999L0.999998 9"
                        stroke="#2E3830"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-[8px] px-[8px] text-grey-700 flex justify-between hover:bg-grey-100 hover:text-grey-900"
                  href={""}
                >
                  Fashion{" "}
                  <span>
                    <svg
                      className="rotate-[45deg]"
                      width="14"
                      height="6"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 9L9 0.999999L0.999998 9"
                        stroke="#2E3830"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-[8px] px-[8px] text-grey-700 hover:bg-grey-100 hover:text-grey-900 w-[200px] flex justify-between"
                  href={""}
                >
                  Entertainment{" "}
                  <span>
                    <svg
                      className="rotate-[45deg]"
                      width="14"
                      height="6"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 9L9 0.999999L0.999998 9"
                        stroke="#2E3830"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-[8px] px-[8px] text-grey-700 hover:bg-grey-100 hover:text-grey-900 flex justify-between"
                  href={""}
                >
                  Agriculture{" "}
                  <span>
                    <svg
                      className="rotate-[45deg]"
                      width="14"
                      height="6"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 9L9 0.999999L0.999998 9"
                        stroke="#2E3830"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm py-[8px] px-[8px] text-grey-700 hover:bg-grey-100 hover:text-grey-900 flex justify-between"
                  href={""}
                >
                  Publishing{" "}
                  <span>
                    <svg
                      className="rotate-[45deg]"
                      width="14"
                      height="6"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 9L9 0.999999L0.999998 9"
                        stroke="#2E3830"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className="pr-[24px] text-md text-grey-800">
            <Link
              href={"/foundation"}
              className={`text-base ${
                pathname === "/foundation" && "font-bold"
              }`}
            >
              Foundation
            </Link>
          </li>
          <li className="px-[24px] text-grey-800">
            <Link
              href={"/"}
              className={`text-base ${pathname === "/about-us" && "font-bold"}`}
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              className="py-[12px] px-[32px] text-base  text-grey-50 bg-grey-900"
              href={"/"}
            >
              Contact-Us
            </Link>
          </li>
        </ul>

        {/* mobile vggie burger*/}
        <div className="group/zena md:hidden">
          <button onClick={() => openCloseSideBarBtn(true)}>
            <svg
              width="24"
              height="18"
              viewBox="0 0 26 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H25M1 19H25"
                stroke="#2E3830"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar