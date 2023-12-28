'use client'
import { AppDispatch, RootState } from "@/Redux/Store"
import { changeSidebar } from "@/Redux/constituents/sidebar"
import "@/styles/sidebar.css"
import { useSelector, useDispatch } from "react-redux"
import { useRouter } from "next/navigation"
import Image from "next/image"
import logo from "@/public/icons/logo_green_png.png"
import { FaArrowRight, FaTimes } from "react-icons/fa"
const Sidebar = () => {
  const router = useRouter()
    const dispatch = useDispatch<AppDispatch>()
    const sidebarData = useSelector((state:RootState)=>state.sidebar.value)
  const switchRoute = (routeName: string) => {
     dispatch(changeSidebar("closeSidebar"));
      router.push(`/${routeName}`)
   }
  return (
    <div
      className={`hidden  sm:w-full sm:h-full sm:block sm:fixed ${sidebarData.close}`}
    >
      <div className="p-3 flex justify-end">
        <button
          className="w-10 h-10 border border-blue-200 rounded-full flex justify-center items-center text-green-500 font-bold"
          onClick={() => dispatch(changeSidebar("closeSidebar"))}
        >
          <FaTimes />
        </button>
      </div>
      <div>
        <div className="w-4/5 mx-auto flex items-center ">
          <div className="">
            <Image src={logo} className="w-6 h-6" alt="" />
          </div>
          <h1 className="font-bold my-5 px-2">Febila</h1>
        </div>

        <button
          onClick={() => switchRoute("")}
          className="w-4/5 mb-5  flex justify-start items-center  mx-auto h-10 border-b border-gray-200 font-bold   "
        >
          Home
        </button>
        <button
          onClick={() => switchRoute("about-us")}
          className="w-4/5 mb-5 flex justify-start items-center  mx-auto h-10 border-b border-gray-200 font-bold  "
        >
          About Us
        </button>
        <button
          onClick={() => switchRoute("contact")}
          className="w-4/5  bg-green-500  rounded-full mb-5 flex text-sm font-bold  justify-between items-center  mx-auto h-10   text-white "
        >
          <span className="ml-2">Contact Us</span>
          <span className="w-7 h-7 rounded-full flex justify-center items-center bg-white mr-2">
           <FaArrowRight className="text-gray-700"/>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar