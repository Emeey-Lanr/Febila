'use client'
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useReducer, useState } from "react"
import { addEstateR } from "@/Redux/constituents/modalStatus"
import { RootState } from "@/Redux/Store"
import { addDetailsR } from "@/Redux/constituents/real_estate_data"
import { realEstateData } from "@/types/realEstateData"

const RealEstateModal = () => {
  const dispatch = useDispatch()
  const modalStatus = useSelector((state:RootState)=>state.modalStatus.value)
  const username = useSelector((state:RootState)=>state.admin.value)
  const [img, setImg] = useState<any>('')
    const  [type, setType] = useState('')
    const [price, setPrice] = useState('')
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [disabled, setDisabled] =useState(false)
  

    const uploadImg = (e:any) => {
        const imgUpload = new FileReader()
        imgUpload.readAsDataURL(e.target.files[0])
      imgUpload.onload = () => {
          console.log(imgUpload.result)
            setImg(`${imgUpload.result}`)
        }
  }
  const emptyValues = () => {
    dispatch(addEstateR(false));
    setImg('')
    setPrice('')
    setType('')
    setTitle('')
    setLocation('')

  }
  
  const submitBtn = async (e: any) => {
    try {
      e.preventDefault()
      setDisabled(true)
      if ((price !== '' && title !== '') && (img !== '' && location !== '')) {
        const register = await axios.post('http://localhost:3000/api/add_realestate', {img, price, type, title, location, username})
        setDisabled(false)
        const data:realEstateData = register.data.realEstateData
        dispatch(addDetailsR(data))
        emptyValues()
      } else {
      setErrorMessage('fill in details')
      }
    
    } catch (error) {
      
    }
  
    
    
  }
  return (
    <>
      {modalStatus.addEstate && (
        <div className="w-full h-full flex justify-center items-center fixed top-0 bg-transblack-500 py-[16px] px-[16px]">
          <div
            style={{ background: "white" }}
            className=" lg:w-[500px] w-[95%] px-[16px] py-[16px] rounded-sm"
          >
            <div className="">
              <form onSubmit={(e) => submitBtn(e)}>
                <div>
                  <button
                    onClick={() => dispatch(addEstateR(false))}
                    className="text-lg font-bold"
                  >
                    X
                  </button>
                </div>
                {errorMessage !== "" && (
                  <div
                    style={{ background: "hsl(0, 100%, 80%)" }}
                    className="py-[12px] px-[12px]"
                  >
                    <p
                      style={{ color: "hsl(0, 100%, 10%)" }}
                      className="text-sm font-bold helFnt text-center"
                    >
                      {errorMessage}
                    </p>
                  </div>
                )}
                <div className="h-[200px] px-[12px] py-[12px] border border-grey-200 my-[24px] flex justify-center items-center">
                  {img !== "" ? (
                    <img
                      src={`${img}`}
                      className="w-full h-full object-cover"
                      width={100}
                      alt=""
                    />
                  ) : (
                    <label id="image" className="text-xl text-grey-700">
                      Add Image <span>+</span>
                      <input
                        id="image"
                        hidden
                        onChange={(e) => uploadImg(e)}
                        type="file"
                      />
                    </label>
                  )}
                </div>
                <div className="flex justify-between items-center my-[18px]">
                  <p className="gilFnt text-sm font-semibold text-grey-700">
                    Price
                  </p>
                  <div className="border border-grey-200 flex justify-center">
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      className="h-[18px] text-center border-grey-200 w-[60px]"
                    />
                  </div>
                </div>
                {/* <div className="flex justify-between items-center mb-[18px]">
                  <p className="gilFnt text-sm font-semibold text-grey-700">
                    Units
                  </p>
                  <div className="border border-grey-200 flex justify-center">
                    <button
                      onClick={() => setUnit(unit + 1)}
                      className="w-[20px] border-r border-grey-200"
                    >
                      +
                    </button>
                    <p className="helFnt w-[20px] text-base text-grey-700">
                      {unit > 0 && unit}
                    </p>
                    <button
                      onClick={() => decreaseBtn()}
                      className="w-[20px] border-l border-grey-200"
                    >
                      -
                    </button>
                  </div>
                </div> */}
                <input
                  onChange={(e) => setType(e.target.value)}
                  className="helFnt text-sm mb-[24px] px-[8px] text-grey-700 py-[12px] block w-full border border-grey-200 bg-none fcus:border-grey-400"
                  placeholder="type"
                  type="text"
                />
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  className="helFnt text-sm mb-[24px] px-[8px] text-grey-700 py-[12px] block w-full border border-grey-200 bg-none fcus:border-grey-400"
                  placeholder="Title"
                  type="text"
                />
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  className="helFnt text-sm mb-[24px] px-[8px] text-grey-700 py-[12px] block w-full border border-grey-200 bg-none fcus:border-grey-400"
                  placeholder="location"
                  type="text"
                />

                <div>
                  <button className="helFnt py-[12px] w-full bg-green-500 text-grey-100">
                    {disabled ? (
                <div className="flex">
                  <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping"></span>
                  <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping mx-[12px]"></span>
                  <span className="block w-[12px] h-[12px] bg-grey-50 animate-ping"></span>
                </div>
              ) : (
                <span className="text-grey-50 font-semibold"> Access</span>
              )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RealEstateModal