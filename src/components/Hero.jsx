import React from 'react'
import you from '../assets/you.svg'
import blob from '../assets/blob.svg'
import blob1 from '../assets/blob1.svg'
import blob2 from '../assets/blob2.svg'
//import bigblob from '../assets/bigblob.png'
import line1 from '../assets/line1.png'
import line2 from '../assets/line2.png'
import startup from '../assets/startup.svg'

import {AiOutlineDown} from 'react-icons/ai'
import { Slider } from './Slider'
import { Link } from 'react-router-dom'
import { Carousal } from './Carousal'
import { Navbar } from './Navbar'



export const Hero = () => {
  return (
    <div className="flex flex-col justify-center bg-back bg-contain bg-no-repeat bg-blend-lighten bg-green-5 text-center w-screen px-2 overflow-hidden items-center ">
      <Navbar/>
      <div className="text-xl md:text-4xl text-bold text-green-2 mt-5">
        Mental Health Made Simple,
        Support Made Accessible
      </div>
      <div className="text-green-3 font-lato text-xs md:text-2xl mt-3 md:my-5"> 
        We're young, we're cool, and we're right there with YOU
      </div>
      <div className="flex flex-wrap justify-center">
        <Link to="/you" className="flex justify-between md:justify-center md:p-8 items-center w-4/5 lg:w-[30rem] lg:mx-3 h-32 lg:h-56 text-white bg-green-1 rounded-lg md:rounded-xl mt-5 p-3">
          <img src={you} alt="for you" className="w-28 lg:w-44 h-auto" />
          <div className="flex flex-col justify-center items-center">
            <div className=" md:mb-4 text-base md:text-2xl">For You</div>
            <div className="text-2xs  md:w-3/5 md:text-base font-hind">
              Discover a Life of Fulfillment Through Comprehensive Mental Health Care and Support
            </div>
          </div>
        </Link>
        <Link to="/startup" className="flex justify-between md:justify-center md:p-8 items-center w-4/5 lg:w-[30rem] lg:mx-3 h-32 lg:h-56 text-black md:text-white bg-green-3 md:bg-green-1 rounded-lg md:rounded-xl mt-5 p-3">
          <img src={startup} alt="for you" className="w-28 lg:w-44 h-auto" />
          <div className="flex flex-col justify-center items-center">
            <div className=" md:mb-4 text-base md:text-2xl">For Startups</div>
            <div className="text-2xs  md:w-3/5 md:text-base font-hind">
            Give your startup team a healthy mental bandwidth & enhance their productivity
            </div>
          </div>
        </Link>
      </div>
      <button className="w-3/5 lg:w-1/3 h-12 lg:h-16 m-5 text-sm lg:text-xl p-4 rounded-lg font-hind font-bold text-center text-white md:text-black bg-green-1 md:bg-green-3">
        Book your demo session
      </button>
      <div className="text-green-1 md:text-center font-lato md:text-2xl mt-5 w-4/5  text-left">
        Unlocking Well-being, Virtually Worldwide.
      </div>
      {/* stats pc */}
      <div className="hidden md:flex text-2xl justify-center w-full mt-4">
        <div className="flex flex-col px-32 text-start">
          <img src={blob} alt="blob" className="absolute -translate-x-3 w-6 h-auto" />
          <div className="relative ">10 years</div>
          <div className="text-green-2 ">on the market</div>
        </div>
        <div className="flex flex-col px-32 text-start">
          <img src={blob1} alt="blob" className="absolute -translate-x-3 w-8 h-auto" />
          <div className="relative ">10 lakh</div>
          <div className="text-green-2 ">people helped</div>
        </div>
        <div className="flex flex-col px-32 text-start  ">
          <img src={blob2} alt="blob" className="absolute -translate-x-4 w-9 h-auto" />
          <div className="relative  ">2,500</div>
          <div className="text-green-2 ">licensed therapists</div>
      </div>
      {/* stats mobile */}
      </div>
      <div className="flex md:hidden justify-between w-10/12 mt-4">
        <div className="flex flex-col text-xs text-start">
          <img src={blob} alt="blob" className="absolute w-6 h-auto" />
          <div className="relative mt-1 ml-3">10 years</div>
          <div className="text-green-2 ml-2">on the market</div>
        </div>
        <div className="flex flex-col text-xs text-start">
          <img src={blob1} alt="blob" className="absolute w-8 h-auto" />
          <div className="relative mt-1 ml-4">10 lakh</div>
          <div className="text-green-2 ml-3">people helped</div>
        </div>
      </div>
      <div className="flex md:hidden flex-col text-xs text-start mr-36 mt-3">
        <img src={blob2} alt="blob" className="absolute w-9 h-auto" />
        <div className="relative mt-2 ml-4">2,500</div>
        <div className="text-green-2 ml-2">licensed therapists</div>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="font-lato text-xl text-green-2 mr-20 md:mr-1 ">Thousands of highly</div>
        <div className="font-lato text-gray-600 mr-5 ">rated, and verified experts</div>
      </div>
      <Carousal/>

      <div className="flex flex-col justify-center items-center my-8 bg-bigblob bg-cover bg-no-repeat w-[480px] font-lato">
        <div className="flex flex-col w-screen px-4 ">
          <div className="text-green-1 text-xl font-laren">How it works?</div>
          <div className="flex justify-between">
            <div className="">
              <div className="text-xl font-bold">Step 1</div>
              <div className="w-40 h-20 rounded-lg bg-green-1 text-white text-2xs p-2 text-center">
                We understand your needs by asking a set of questions and then find the perfect counsellor for you who fits your needs.
              </div>
            </div>
            <img src={line1} alt="line1" className="w-28 -translate-x-8 translate-y-8" />
          </div>
          <div className="flex justify-between">
            <img src={line2} alt="line2" className="w-24 translate-x-9 translate-y-6 " />
            <div>
            <div className="mt-4 text-xl font-bold">Step 2</div>
            <div className="w-40 h-20 rounded-lg bg-green-3 text-2xs p-4 text-center">
            Talk to your therapist however you feel comfortable — text, chat, phone, or video.
            </div>
            </div>
          </div>
          <div className="flex flex-col w-fit justify-between">
            <div className="mt-4 text-xl font-bold">Step 3</div>
            <div className="w-40 h-20 rounded-lg bg-green-1 text-white text-2xs p-2 mb-3 text-center">
            Connect with your therapist as per your time from anywhere in the world. In case it doesn’t work we can rematch you with others too! 
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-4/5  font-lato">
        <div className=" font-bold">What our clients </div>
        <div className="text-green-2 ml-2">say about us</div>
      </div>
      <Slider/>
      <div className="font-hind my-5">Frequently Asked Questions</div>
      <div className="font-lato text-sm w-4/5">
        <div className="border-black border-b-2 "></div>
        <div className="flex justify-between my-1 w-full text-green-2">
          <div className="">is MindFry right for me?</div>
          <AiOutlineDown className=""/>
        </div>
        <div className="border-black border-b-2 "></div>
        <div className="flex justify-between my-1 w-full text-green-2">
          <div className="">How much does it cost?</div>
          <AiOutlineDown className=""/>
        </div>
        <div className="border-black border-b-2 "></div>
        <div className="flex justify-between my-1 w-full text-green-2">
          <div className="">Does it really help?</div>
          <AiOutlineDown className=""/>
        </div>
      </div>
      <div className="text-lato underline text-sm my-5">More FAQs</div>
    </div>
  )
}
