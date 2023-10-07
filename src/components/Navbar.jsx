import React, { useState } from 'react'
import {IoReorderThree} from 'react-icons/io5'
import {RxCross1} from 'react-icons/rx'
import logo from '../assets/logo.png'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };
  return (
    <div className="flex justify-between items-center font-laren bg-transparent w-full p-2 md:p-3 ">
      <Link to="/" className="w-20 md:w-32 h-auto">
        <img src={logo} alt="logo" />
      </Link>
      <div className="md:invisible">
        <button onClick={handleClick} className={isActive ? `hidden` :`text-4xl text-green-2`}>
          <IoReorderThree/>
        </button>
        <button onClick={handleClick} className={isActive ? `text-4xl text-green-2`:`hidden`}>
          <RxCross1/>
        </button>
      </div>
      <motion.div className={isActive? `text-green-1 rounded-lg flex md:hidden flex-col justify-center items-center fixed w-3/5 h-auto p-5 bg-green-3 `: `hidden`}
        animate={{ 
          x: 100,
          y: 110
        }}
      >
        <Link to="/you" className="my-2">For you</Link>
        <Link to="/startup" className="my-2">Statups</Link>
        <Link to="/about" className="my-2">About Us</Link>
        <Link to="/blogs" className="my-2">Blogs</Link>
      </motion.div>
      <div className="hidden md:flex font-bold  text-green-2">
        <Link to="/about" className="px-6">About Us</Link>
        <Link to="/blogs" className="px-6">Blogs</Link>
      </div>

    </div>
  )
}
