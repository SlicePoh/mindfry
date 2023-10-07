import React, { useEffect, useRef, useState } from 'react'
import { BiSolidStar } from 'react-icons/bi'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { motion } from "framer-motion"
import { psych } from './Customer'

export const Carousal = () => {
    const [width,setWidth]=useState(0);
    const carousel=useRef();

    useEffect(()=>{
        console.log(carousel);
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])
    return (
        <div ref={carousel} whileTap={{cursor:"grabbing"}} className="flex w-11/12 overflow-hidden wcursor-grab mt-10 ">
            <motion.div className="flex md:hidden"
                drag="x"
                dragElastic="1"
                dragConstraints={{
                    right: 1,
                    left: -width
                }}
                
            >
                {psych.map((data, key) => {
                    return (
                        <motion.div key={key} className="  flex justify-between w-64 mx-5 mt-5">
                            <div className="flex ml-2 mr-4">
                                <div className="w-28 h-28 rounded-lg bg-green-3 absolute z-0 -rotate-6"></div>
                                <img src={data.img} alt="pic" className="w-28 h-28 object-cover rounded-lg z-10 rotate-6" />
                            </div>
                            <div className="flex flex-col justify-center items-center font-lato ml-4">
                                <div className=" text-green-2 font-bold">{data.names}</div>
                                <div className="text-2xs">{data.desg}</div>
                                <div className="flex my-2">
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                </div>
                                <div className="flex">
                                    <button className="w-12 h-5 mr-2 rounded-md text-2xs text-white bg-green-1">Reviews</button>
                                    <button className="w-12 h-5 rounded-md text-2xs bg-green-3">LinkedIN</button>
                                </div>
                                <button className="md:invisible" >
                                    <FaAngleDoubleRight className="mt-2 ml-20" />
                                </button>
                            </div>
                        </motion.div>
                    )
                })}

            </motion.div>
            <div className="hidden md:flex justify-center items-center flex-wrap w-full">
                {psych.map((data, key) => {
                    return (
                        <div key={key} className="flex items-center justify-center w-96 p-4  border-green-1 rounded-xl mx-8 my-5">
                            <div className="flex ml-2 mr-4">
                                <div className="w-44 h-44 rounded-lg bg-green-3 absolute z-0 -rotate-6"></div>
                                <img src={data.img} alt="pic" className="w-44 h-44 object-cover rounded-lg z-10 rotate-6" />
                            </div>
                            <div className="flex flex-col justify-center items-center font-lato ml-4">
                                <div className=" text-green-2 font-bold">{data.names}</div>
                                <div className="text-xs">{data.desg}</div>
                                <div className="flex my-4">
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                    <BiSolidStar className="text-xl text-amber-400 " />
                                </div>
                                <div className="flex">
                                    <button className="w-12 h-5 mr-2 rounded-md text-2xs text-white bg-green-1">Reviews</button>
                                    <button className="w-12 h-5 rounded-md text-2xs bg-green-3">LinkedIN</button>
                                </div>
                                <button className="md:invisible" >
                                    <FaAngleDoubleRight className="mt-2 ml-20" />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
