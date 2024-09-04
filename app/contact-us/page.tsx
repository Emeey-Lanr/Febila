import React from 'react'

const page = () => {
  return (
    <div className="py-[16px] px-[16px]  lg:px-[32px] lg:py-[32px]">
      <div  className="py-[16px] px-[16px] border border-grey-200 lg:w-[60%] lg:mx-auto lg:py-[32px] ">
        <h1 className="gilFnt text-2xl  text-grey-800 font-semibold lg:text-5xl">
          Contact Us
        </h1>
        <p className="helFnt text-sm text-grey-700 py-[16px] ">
          Fill in the details with your message for us
        </p>
        <form action="">
          <div>
            <label htmlFor="text-sm gilFnt font-semibold text-grey-800 pb-[12px] lg:text-base">
              Name
            </label>
            <br />
            <input
              type="text"
              className="h-[46px] w-full border border-grey-200 focus:outline-2 focus:outline-transblack-500 lg:h-[48px]"
            />
          </div>
          <div className="py-[16px] lg:py-[24px]">
            <label htmlFor="" className="pb-12px text-grey-700 lg:text-base">
              Email address
            </label>
            <br />
            <input
              type="text"
              className="h-[46px] w-full border border-grey-200 focus:outline-2 focus:outline-transblack-500 lg:h-[48px]"
            />
          </div>
          <div className='pb-[16px] lg:[pb-24px]'>
            <label htmlFor="" className="pb-[12px] text-grey-700 lg:text-base">
              Message
            </label>
            <br />
            <textarea className=" resize-none h-[92px] w-full border border-grey-200 focus:outline-2 focus:outline-transblack-500"></textarea>
          </div>
          <div className='flex justify-end'>
            <button className='py-[16px] w-[200px] bg-green-500 text-grey-50 text-base font-bold gilFnt'>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default page