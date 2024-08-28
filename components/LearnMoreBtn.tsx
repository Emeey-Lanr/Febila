import React from 'react'

import Link from 'next/link'
const LearnMoreBtn = ({borderColor, color, url }:{borderColor:string, color:string, url:string}) => {

  return (
      <button  className={`w-[98px] lg:w-[200px] lg:py-[16px] lg:text-base text-sm py-[8px] border ${borderColor} ${color} `}>
      <Link href={url}> 
            learn more 
      </Link>
        
     </button>
  )
}

export default LearnMoreBtn