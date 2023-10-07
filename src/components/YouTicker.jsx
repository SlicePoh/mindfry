import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import 'swiper/css';
import { psych } from './Customer';


export const YouTicker = () => {
    const [width,setWidth]=useState(0);
    const carousel=useRef();

    useEffect(()=>{
        console.log(carousel);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])

    return (
        <motion.div ref={carousel} whileTap={"grabbing"} className="carousel flex justify-center items-center flex-col w-11/12 cursor-grab overflow-hidden">
            <motion.div className="inner flex items-start"
                drag="x"
                dragConstraints={{
                    right: 0,
                    left: -width
                }}
            >
                {psych.map((data,key) => {
                    return (
                        <motion.div className="font-lato mx-2" key={key}>
                            <div className="my-4"></div>
                            <div className="flex flex-col justify-center items-center w-40 h-auto p-4 rounded-lg bg-green-1 text-white text-2xs text-center">
                                <div className="">
                                    Thank you for all the help. It is nice to know that this service is here for people like us, who is unsure about how to go about these things and whom to consult.
                                </div>
                                <div className="flex">
                                    <img src={data.img} alt="pfp" className="w-10 h-10 object-cover rounded-full" />
                                    <div className="flex flex-col mx-4 mt-2 items-start font-bold">
                                        <div className="text-2xs">{data.names}</div>
                                        <div className="text-2xs">India</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}

            </motion.div>

        </motion.div>
    )
}
