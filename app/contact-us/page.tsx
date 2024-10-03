"use client"

import { RootState } from "@/Redux/Store";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()
 
  const submitForm = async (e:React.FormEvent) => {
    try {
      e.preventDefault()
      if (name !== '' && email !== '' && message !== '') {
        const add = await axios.post("http://localhost:3000/api/contact", {
          name,
          email,
          message,
        });
        setDisabled(true)
        console.log(add)
      } else {
         
      }

    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <>
      <div className="py-[16px] px-[16px]  lg:px-[32px] lg:py-[32px]">
        <div
          style={{ background: "white" }}
          className="shadow-md py-[16px] px-[16px]  lg:w-[60%] lg:mx-auto lg:py-[32px] "
        >
          <h1 className="gilFnt text-2xl  text-grey-800 font-semibold lg:text-5xl">
            Contact Us
          </h1>
          <p className="helFnt text-sm text-grey-700 py-[16px] ">
            Fill in the details with your message for us
          </p>
          <form onSubmit={(e) => submitForm(e)}>
            <div>
              <label htmlFor="text-sm gilFnt font-semibold text-grey-800 pb-[12px] lg:text-base">
                Name
              </label>
              <br />
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="py-[12px] px-[12px] h-[46px] w-full border border-grey-200 focus:outline-2 focus:outline-transblack-500 lg:h-[48px]"
              />
            </div>
            <div className="py-[16px] lg:py-[24px]">
              <label htmlFor="" className="pb-12px text-grey-700 lg:text-base">
                Email address
              </label>
              <br />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="py-[12px] px-[12px] h-[46px] w-full border border-grey-200 focus:outline-2 focus:outline-transblack-500 lg:h-[48px]"
              />
            </div>
            <div className="pb-[16px] lg:[pb-24px]">
              <label
                htmlFor=""
                className="pb-[12px] text-grey-700 lg:text-base"
              >
                Message
              </label>
              <br />
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                className="py-[12px] px-[12px]  resize-none h-[92px] w-full border border-grey-200 focus:outline-2 focus:outline-transblack-500"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                disabled={disabled}
                className="py-[16px] w-full bg-green-500 text-grey-50 text-base font-bold gilFnt"
              >
                {disabled ? <div></div> : <span>Send</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
     
    </>
  );
}

export default page