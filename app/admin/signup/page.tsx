'use client'
import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusR } from '@/Redux/constituents/successErrorModal';
import { useRouter } from 'next/navigation';

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [disbaled, setDisabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputEmpty, setInputEmpty] = useState(false)
  const [key, setKey] = useState("")

   
  const registerF = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (username !== "" && password !== ""  && key !== "") {
        setErrorMessage("");

        setDisabled(true);
        const register = await axios.post(`/api/signup`, { username, password, key })
         console.log(register)
        if (register.data.error) {
          dispatch(changeStatusR({ color: `hsl(0, 100%, 50%)`, message: `${register.data.message}`, type: 'Error', hidden:false }))
        } else {

          localStorage.setItem("sessionToken", `${register.data.token}`);
          setDisabled(false)
          router.push(`/admin/${register.data.username}`)
        }
      } else {
          setInputEmpty(true)
      }
    } catch (error) {
      console.log(error)
       dispatch(
         changeStatusR({
           color: `hsl(0, 100%, 50%)`,
           message: `An error occured, please try again`,
           type: "Error",
           hidden:false
         })
       );
    }
  };
  return (
    <>
      <div className="py-[94px] px-[12px]">
        <div
          style={{ background: "white" }}
          className="lg:w-[400px] shadow-sm mx-auto py-[24px] px-[24px]"
        >
          <h1></h1>
          <h2 className="text-2xl text-center text-grey-700 gilFnt font-semibold  lg:text-4xl">
            Admin 
          </h2>
          <p className="pt-[8px] helFnt   text-grey-600 text-center text-sm lg:text-base">
            Fill in details to access as an admin
          </p>

          <form onSubmit={(e) => registerF(e)}>
            <div className="py-[16px]">
              <label className="helFnt text-sm text-grey-700 pb-[12px] lg:text-base">
                Username
              </label>{" "}
              <br />
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                className="helFnt w-full  px-[8px] border border-grey-200 py-[8px] lg:py-[12px]"
              />
              {username == "" && inputEmpty && (
                <p style={{ color: "hsl(0, 100%, 50%)" }} className="text-xs helFnt pt-[4px]">
                  Fill In Inputs
                </p>
              )}
            </div>
            <div className="pb-[16px]">
              <label className="helFnt text-sm text-grey-700 pb-[12px] lg:text-base">
                Password
              </label>{" "}
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="text"
                className="helFnt w-full  px-[8px] border border-grey-200 py-[8px] lg:py-[12px]"
              />
              {password == "" && inputEmpty && (
                <p style={{ color: "hsl(0, 100%, 50%)" }} className="text-xs helFnt pt-[4px]">
                  Fill In Inputs
                </p>
              )}
            </div>
            <div className="pb-[16px]">
              <label className="helFnt text-sm text-grey-700 pb-[12px] lg:text-base">
                Key
              </label>{" "}
              <br />
              <input
                onChange={(e) => setKey(e.target.value)}
                type="text"
                className="helFnt w-full  px-[8px] border border-grey-200 py-[8px] lg:py-[12px]"
              />
              {key == "" && inputEmpty && (
                <p style={{ color: "hsl(0, 100%, 50%)" }} className="text-xs helFnt pt-[4px]">
                  Fill In Inputs
                </p>
              )}
            </div>
            <div>
              <button className=" w-full flex justify-center items-center bg-green-500 py-[8px] lg:py-[12px]">
                {" "}
                {disbaled ? (
                  <div className="flex">
                    <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping"></span>
                    <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping mx-[12px]"></span>
                    <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping"></span>
                  </div>
                ) : (
                  <span className="text-grey-50 font-semibold">Register</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default page