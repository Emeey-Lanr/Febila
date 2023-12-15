'use client'
import Image from "next/image"
import children from "@/public/images/children.jpg"
import { useDispatch } from "react-redux";
import { openCloseModal } from "@/Redux/constituents/donate"; 
const Donate = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <div className="fixed right-5 bottom-8">
        <button
          onClick={() => dispatch(openCloseModal(true))}
          className="h-10 bg-blue-600 text-white px-7 text-sm rounded-full"
        >
          Donate
        </button>
      </div>
      <div className="w-4/5 mx-auto ">
        <h1 className="text-4xl text-blue-600 py-6 font-medium">
          <span>FEBILA FOUNDATION</span>
        </h1>
        <h1 className="text-gray-600 text-sm text-justify leading-12">
          In the heart of our mission at Febila Foundation lies a profound
          commitment to transforming lives through strategic initiatives in
          education, health, water, and poverty alleviation. These pillars serve
          as the keys unlocking doors to brighter futures for communities in
          need.
        </h1>
      </div>
      <div className="w-4/5 mx-auto">
        <div className="w-full py-5 mt-4">
          <Image
            className="rounded-md w-full h-96 object-cover"
            src={children}
            alt=""
          />
        </div>
        <p className="border-b border-blue-100 p-2">
          <span className="text-2xl py-2 font-semibold text-gray-600">
            Education: Illuminating Paths to Knowledge and Progress
          </span>
        </p>

        <p className="text-sm   text-justify leading-10 text-gray-500">
          In the pursuit of knowledge, Febila Foundation is dedicated to
          ensuring every individual has access to quality education. We believe
          education is the cornerstone of empowerment, opening doors to
          opportunities that break the cycle of poverty. Through scholarships,
          infrastructure development, and innovative learning programs, we
          illuminate paths to a brighter future for the next generation.
        </p>
      </div>
      <div className="w-4/5 mx-auto">
        <div className="w-full py-5 mt-4">
          <Image
            className="rounded-md w-full h-96 object-cover"
            src={children}
            alt=""
          />
        </div>
        <p className="border-b border-blue-100 p-2">
          <span className="text-2xl py-2 font-semibold text-gray-600">
            Education: Illuminating Paths to Knowledge and Progress
          </span>
        </p>

        <p className="text-sm   text-justify leading-10 text-gray-500">
          In the pursuit of knowledge, Febila Foundation is dedicated to
          ensuring every individual has access to quality education. We believe
          education is the cornerstone of empowerment, opening doors to
          opportunities that break the cycle of poverty. Through scholarships,
          infrastructure development, and innovative learning programs, we
          illuminate paths to a brighter future for the next generation.
        </p>
      </div>
    </div>
  );
}

export default Donate