'use client'
import insta from "@/public/icons/insta.svg";
import x from "@/public/icons/x.svg";
import location from "@/public/icons/location.svg";
import mail from "@/public/icons/mail.svg";
import facebook from "@/public/icons/facebook.svg";
import phone from "@/public/icons/phone.svg";
import Image from "next/image";
import { useFormik } from "formik";
import * as yup from "yup"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { exitOpenModal } from "@/Redux/constituents/errorSuccessModal";
 import Loading from "./Loading";
import "@/styles/home.css"
import axios from  "axios"
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  const dispatch = useDispatch()
  const [btnStatus, setBtnStatus] = useState<boolean>(false)
   const formik = useFormik({
     initialValues: {
       email: "",
     },
     onSubmit: async() => {
      try{
        setBtnStatus(
          true
        )
      const addNewsLetterEmail = await axios.post(`${process.env.NEXT_PUBLIC_API_ROUTE}/newsletter`,formik.values)
       setBtnStatus(false)
        dispatch(
         exitOpenModal({ modalState: true, message: `${addNewsLetterEmail.data.message}` })
       );
      } catch (error) {
        
      }
      
      //  setBtnStatus(true);
      //  dispatch(
      //    exitOpenModal({ modalState: true, message: "Thanks for subscribing" })
      //  );

       // dispatch(openModalExitModal(true, "Thanks for subscribing"))
     },
     validationSchema: yup.object({
       email: yup.string().email().required(),
     }),
   });
  return (
    <>
      <div className="w-full  py-20 bg-gray-100 footer border-t border-blue-200">
        <div className="">
          <h1 className="text-2xl  font-bold text-green-500">FEBILA</h1>
          <p className="text-sm text-gray-400 leading-10">
            Your partner in Endless Possibilities
          </p>
          <div className="py-1">
            <h2 className="text-2xl capitalize py-2 mb-3 font-semibold text-gray-500">
              Subscribe to Our NewsLetter
            </h2>
            <form
              onSubmit={formik.handleSubmit}
              className="rounded-full px-1 flex justify-between items-center border border-gray-400 h-14"
            >
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="rounded-full w-11/12 h-full pl-1 focus:outline-none bg-gray-100 placeholder:text-sm"
              />

              <button
                type="submit"
                className="h-12 w-32 flex justify-center items-center bg-green-500 rounded-full text-white text-sm "
              >
                {btnStatus ? <Loading /> : "Subscribe"}
              </button>
            </form>
            {formik.errors.email && (
              <p className="text-sm text-red-500 py-1">{formik.errors.email}</p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center mds:justify-start my-3">
          <ul>
            <li className="text-gray-700 leading-12 font-semibold">Links</li>
            <li className="text-gray-600 leading-12 text-sm">Home</li>
            <li className="text-gray-600 leading-12 text-sm">Donate</li>
            <li className="text-gray-600 leading-12 text-sm">Contact Us</li>
          </ul>
        </div>
        <div className="flex justify-center items-center mds:justify-start my-3">
          <ul>
            <li className="text-gray-700 leading-12 font-semibold ">
              <span>Socials</span>
            </li>
            <li className="text-gray-600 leading-12 text-sm flex  items-center">
              <a href="" className="flex items-center">
                <Image src={x} alt="x" className="w-4 h-4 " />
                <span className="mx-2">Twitter</span>
              </a>
            </li>
            <li className="text-gray-600 leading-12 text-sm flex  items-center">
              <a href="" className="flex items-center">
                <Image src={facebook} alt="facebook" className="w-4 h-4 " />{" "}
                <span className="mx-2">Facebook</span>
              </a>
            </li>
            <li className="text-gray-600 leading-12 text-sm flex  items-center">
              <a href="" className="flex items-center">
                <Image src={insta} alt="instagram" className="w-4 h-4 " />{" "}
                <span className="mx-2">Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center  mds:justify-start my-3">
          <ul>
            <li className="text-gray-600 leading-12 text-sm flex items-center">
              <Image src={location} alt="" className="w-4 h-4 " />{" "}
              <span className="mx-2">Ogbomoso, Oyo State</span>
            </li>
            <li className="text-gray-600 leading-12 text-sm flex items-center">
              <a href="" className="flex items-center">
                <Image src={phone} alt="" className="w-4 h-4 " />
                <span className="mx-2">+2348083947330</span>
              </a>
            </li>
            <li className="text-gray-600 leading-12 text- flex items-center">
              <a href="" className="flex items-center">
                <Image src={mail} alt="email" className="w-4 h-4 " />
                <span className="mx-2">febila@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm flex justify-center items-center text-gray-500 py-4 border-t broder-blue-100">
        <span> copyright</span> <span className="px-2"><FaCopyright  /></span>  <span>2023</span>
      </p>
    </>
  );
};

export default Footer;
