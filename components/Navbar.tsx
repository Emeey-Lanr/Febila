'use client'
import Link from "next/link";
import { useContext } from "react";
import { AppContextAPI } from "@/context api/context";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const pathname = usePathname()
    const {openCloseSideBarBtn} = useContext(AppContextAPI);
  return (
    <div className="helFnt px-[16px] lg:px-[32px]  py-[24px] md:py-[32px] mx-auto flex justify-between items-center">
      {/* Logo */}
      <div>
        <svg
          className="hidden lg:block w-[48px] h-[48px]"
          viewBox="0 0 56 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 43L12 27M52 43L35.1554 9.31084C32.2072 3.41445 23.7928 3.41444 20.8446 9.31083L12 27M12 27H28"
            stroke="#1CE34A"
            stroke-width="8"
            stroke-linecap="round"
          />
        </svg>

        <svg className="lg:hidden w-[24px] h-[24px]"
          width="28"
          height="24"
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
            <span
              className={`text-base flex items-center ${
                (pathname === "/publishing" ||
                  pathname === "/agriculture" ||
                  pathname === "/real-estate") &&
                "font-bold"
              }`}
            >
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
                  href={"/real-estate"}
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
                  href={"/"}
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
                  href={"/"}
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
                  href={"/agriculture"}
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
                  href={"/publishing"}
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
              href={"/about-us"}
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