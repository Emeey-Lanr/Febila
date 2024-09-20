'use client'
import axios from "axios"
 import {useState} from "react"
const page = () => {
  const [disbaled, setDisabled] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const loginF = async (e:React.FormEvent) => {
  
    try {
      if (username !== "" && password !== "") {
        setErrorMessage('')
        e.preventDefault()
        setDisabled(true)
        const login = await axios.post(`http://localhost:3000/api/signin`, { username, password })
        console.log(login)

      } else {
        setErrorMessage('Fill in all details')
      }
    } catch (error) {
      setErrorMessage('An error occured. Please, try again')
    }
  
  }

  return (
    <div className="py-[60px]">
      <div
        style={{ background: "white" }}
        className="lg:w-[400px] shadow-sm mx-auto py-[12px] px-[12px]"
      >
        <h1></h1>
        <h2 className="text-2xl text-center text-grey-500 gilFnt font-semibold  lg:text-4xl">
          Login as admin
        </h2>
        <p className="pt-[8px] text-grey-700 text-sm lg:text-base">
          Fill in details to access as an admin
        </p>
        {errorMessage !== "" && <div style={{ background: "hsl(0, 50, 5)" }} className="py-[12px] px-[12px]">
          <p style={{ color: "hsl(0, 50, 90)" }} className="text-sm">{errorMessage}</p>
        </div>}
        <form onSubmit={(e) => loginF(e)}>
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
          </div>
          <div>
            <button className=" w-full flex justify-center items-center bg-green-500 py-[8px] lg:py-[12px]">
              {" "}
              {disbaled ? (
                <div className="flex">
                  <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping"></span>
                  <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping"></span>
                  <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping"></span>
                </div>
              ) : (
                <span> Access</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page