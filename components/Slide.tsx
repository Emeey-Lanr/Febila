'use client'
import { time } from "console"
import Image from "next/image"
import { useState, useEffect } from "react"
import farm from "@/public/images/farm.jpg"
const Slide = () => {
    const [slide, setSlide] = useState(['hidden', 'hidden', 'hidden', 'hidden'])

    const [timee, setTimee] = useState(1)
    const slideFunc = () => {
        // if slide is lesser than slide length
        // i.e 0 + 1 = 1, slide at the index of 1 should be hidden
        // while we increase the time to + 1  when if timeis greater than the length of slide its hsould turn to zer0
        // 
        let slidex = slide
        for (let i = 0; i < slide.length; i++){
        
            slidex[i] = 'hidden'
            setSlide(slidex)
  
        }
        setTimee(timee + 1)
        if (timee > slide.length) {
            setTimee(1)
        }
        slidex[timee - 1] = 'block'
        setSlide(slidex)
       
        // setTimeout(slideFunc, 5000)
        
    } 
    useEffect(() => {
      setTimeout(() => {
        slideFunc()
      }, 3000);
      
   },[timee])

    
    return (
        <>
            <div>
                <div className={``}>
                    <Image className="filter saturate-[-20px]" alt="" src={farm}/>
                </div>
                {/* <div className={`$ fade`}>2</div>
                <div className={`${slide[2]} fade`}>3</div>
                <div className={`${slide[3]} fade`}>4</div> */}
                
         </div>
        </>
    )

}

export default Slide