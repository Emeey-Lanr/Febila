
'use client'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";

const SuccessErrorPage = () => {
  
   const successErrorDetails = useSelector((state: RootState) => state.successErrorModal.value);
  return (
  <>
       {!successErrorDetails.hidden  && <div className="fixed top-[20px]  left-[50%] justify-center flex ">
        <div style={{ background: successErrorDetails.color }} className="w-[4px] py-[18px]"></div>
        <div
          style={{ background: "white" }}
          className="w-full bg-white flex justify-between px-[16px] py-[12px] "
        >
          <div className="flex items-center">
            {/* <div
              style={{ background: successErrorDetails.color }}
              className="w-[16px] h-[16px] rounded-full"
            ></div> */}
            <div className="ml-[8px] pr-[48px]">
              <p className="text-sm text-grey-800 font-bold">{successErrorDetails.type}</p>
              <p className="text-xs text-grey-600">{successErrorDetails.message}</p>
            </div>
          </div>
          <div>
            <button className="text-grey-600 text-xs ">X</button>
          </div>
        </div>
      </div>}
    </> 
  );
};

export default SuccessErrorPage