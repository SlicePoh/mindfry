import React from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import { YouTicker } from './YouTicker'


export const You = () => {
  return (
    <div className="flex flex-col justify-center overflow-hidden text-center items-center mt-10">
      <div className="text-xl text-bold text-green-2">
        Your Unique Mental Health 
        Journey Begins Here!
      </div>
      <div className="text-green-3 font-lato text-xs mt-3"> 
        Tailored Mental Health Care at Your Fingertips 
      </div>
      <YouTicker/>
      <button className="w-3/5 h-12 m-5 text-sm p-4 rounded-lg font-hind text-center text-white bg-green-3">
        Book your demo session
      </button>
      <div className="text-green-1 font-lato font-xl mt-5 w-4/5  text-left">
        Unlocking Well-being, Virtually Worldwide.
      </div>
      
      <div className="flex flex-col justify-center items-center my-8 bg-bigblob bg-cover bg-no-repeat w-[480px] font-lato">
        
      </div>
      <div className="flex justify-start w-4/5  font-lato">
        <div className=" font-bold">What our clients </div>
        <div className="text-green-2 ml-2">say about us</div>
      </div>
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
