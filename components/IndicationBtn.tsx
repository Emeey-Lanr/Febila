
const IndicationBtn = ({describtionName, width}:{width:string, describtionName:string}) => {
  return (
      <div className={`bg-green-500 flex justify-center items-center py-[8px]  ${width} lg:w-[200px] lg:py-[16px]`}>
          <span className="pr-[4px]">
              
                    <svg className="h-[12px] w-[12px] lg:h-[16px] lg:w-[16px]"
                    //   width="12"
                    //   height="12"
                      viewBox="0 0 14 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L13.9282 12H0.0717969L7 0Z" fill="white" />
                    </svg>
          </span>
          <span className="text-sm pl-[4px] text-grey-50 lg:text-base">{ describtionName}</span>
    </div>
  )
}

export default IndicationBtn