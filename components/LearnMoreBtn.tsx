import React from 'react'

const LearnMoreBtn = ({borderColor, color }:{borderColor:string, color:string}) => {
  return (
      <button className={`w-[98px] lg:w-[200px] lg:py-[16px] lg:text-base ${color} text-sm py-[8px] border ${borderColor} `}>
        learn more     
     </button>
  )
}

export default LearnMoreBtn