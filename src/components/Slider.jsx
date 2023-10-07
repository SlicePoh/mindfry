import React from 'react'
import { psych } from './Customer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { GrNext, GrPrevious } from 'react-icons/gr'

export const Slider = () => {

    return (
        <div className="swiper-container flex flex-col justify-center items-center px-8 py-4 my-auto ">
            <Swiper className="swiper-con "
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
            >
                {psych.map((data, key) => {
                    return (
                        <SwiperSlide className="swiper-slide font-lato p-4 rounded-lg bg-green-1 text-white text-2xs text-center" key={key}>
                            <div className="">
                                Thank you for all the help. It is nice to know that this service is here for people like us, who is unsure about how to go about these things and whom to consult.
                            </div>
                            <div className="flex">
                                <img src={data.img} alt="pfp" className="w-10 h-10 object-cover rounded-full" />
                                <div className="flex flex-col mx-2 mt-2 items-start font-bold">
                                    <div className="text-2xs">{data.names}</div>
                                    <div className="text-2xs">India</div>
                                </div>
                            </div>

                        </SwiperSlide>
                    )
                })}

                <div className="swiper-controller">
                    <div className="swiper-button-prev bg-green-3 rounded-full p-1">
                        <GrPrevious className="text-green-1"/>
                    </div>
                    <div className="swiper-button-next bg-green-3 rounded-full p-1">
                        <GrNext className="text-green-1"/>
                    </div>
                    <div className="swiper-pagination relative w-52 "></div>
                </div>
            </Swiper>
            <div className="hidden md:flex justify-center w-4/5 items-center flex-wrap ">
                {psych.map((data, key) => {
                    return (
                        <div className="relative w-40 h-40 font-lato my-3 mx-6  flex flex-col justify-center items-center  p-4 rounded-lg bg-green-1 text-white text-2xs text-center" key={key}>
                            <div className="">
                                Thank you for all the help. It is nice to know that this service is here for people like us, who is unsure about how to go about these things and whom to consult.
                            </div>
                            <div className="flex">
                                <img src={data.img} alt="pfp" className="w-10 h-10 object-cover rounded-full" />
                                <div className="flex flex-col mx-2 mt-2 items-start font-bold">
                                    <div className="text-2xs">{data.names}</div>
                                    <div className="text-2xs">India</div>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
