"use client"
import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/Redux/Store"
import { useDispatch } from "react-redux"
import { openCloseModal } from "@/Redux/constituents/donate"
const DonateModal = () => {
  const [phase, setPhase] = useState(0)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const donate = useSelector((state:RootState)=>state.donate.value)
  const dispatch  = useDispatch()
  const openDonateModal = () => {
    if (acceptTerms) {
      setPhase(1)
    }
  }

  return (
    <>
      {donate.state && (
        <div className="w-full h-full fixed top-0 flex justify-center items-center modal_background">
          {phase === 0 && (
            <div className="w-3/5 h-4/5 bg-white rounded-md md:w-11/12 md:overflow-y-auto">
              <div className="w-11/12 mx-auto py-2 flex justify-end">
                <button onClick={()=>dispatch(openCloseModal(false))} className="h-8 w-8 rounded-full border-2 text-gray-800 border-blue-600 text-xl flex justify-center items-center font-medium">
                  x
                </button>
              </div>
              <div className="h-40 w-40 rounded-full bg-blue-600 mx-auto flex justify-center items-center">
                {/* <Image src={invest} alt="" /> */}
              </div>
              <div className="w-11/12 mx-auto my-3">
                <p className="text-sm leading-10 text-gray-700">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Atque voluptates iure culpa et soluta illo, in consequuntur
                  itaque quis nostrum unde nihil eius, expedita autem
                  asperiores, officia commodi tempora. Ab dolore illum
                  perspiciatis sed. Doloribus blanditiis rem, accusamus
                  accusantium omnis error neque ex? Ratione sit illo saepe sint
                  quisquam obcaecati numquam quibusdam aut, provident omnis
                  aliquid! Quia ea fuga doloremque perferendis quisquam earum,
                  cumque voluptas dicta magni. Officiis dolores enim unde quos!
                  Excepturi laudantium ipsam nobis nulla voluptas dicta ex quam
                  quidem consequuntur, sit qui at distinctio? Velit incidunt
                  vitae placeat cum, molestiae adipisci. Voluptates ea sequi
                  voluptate quo nemo!
                </p>
              </div>
              <div className="w-11/12 mx-auto  flex items-center  py-4">
                <button
                  onClick={() => setAcceptTerms(!acceptTerms)}
                  className="w-4 h-4 flex justify-center items-center border border-blue-600 rounded-sm"
                >
                  <span
                    className={`w-2 h-2 rounded-full block ${
                      acceptTerms && "bg-blue-600"
                    }`}
                  ></span>
                </button>
                <p className="text-sm text-gray-600 px-2">
                  I agree to the terms and condition involved
                </p>
              </div>
              <div className="w-11/12 mx-auto ">
                <button
                  onClick={() => openDonateModal()}
                  className="w-full h-10 rounded-full text-white bg-blue-600"
                >
                  <p>Proceed</p>
                </button>
              </div>
            </div>
          )}
          {phase === 1 && (
            <div className="bg-white w-2/5  py-4 rounded-md md:w-11/12">
              <form action="">
                <div className="w-4/5 mx-auto">
                  <div className="flex justify-start items-center">
                    <button className="h-8 w-8 border border-blue-600 rounded-full text-blue-600 font-bold">
                      v
                    </button>
                  </div>
                  <div className="w-full py-2">
                    <label className="py-1 text-sm text-gray-600">
                      Full Name
                    </label>
                    <div>
                      <input
                        type="text"
                        className="h-10 px-2 text-sm w-full border border-gray-300 rounded-md focus:outline-gray-300"
                      />
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <label className="py-1 text-sm text-gray-600">Email</label>
                    <div>
                      <input
                        type="text"
                        className="h-10 px-2 text-sm w-full border border-gray-300 rounded-md focus:outline-gray-300"
                      />
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <label className="py-1 text-sm text-gray-600">
                      Amount To Donate
                    </label>
                    <div>
                      <input
                        type="number"
                        className="h-10 px-2 text-sm w-full border border-gray-300  rounded-md focus:outline-gray-300"
                      />
                    </div>
                  </div>
                  <div className="w-full py-5">
                    <button className="w-full h-10 bg-blue-600 rounded-md text-white text-sm">
                      Proceed
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default DonateModal