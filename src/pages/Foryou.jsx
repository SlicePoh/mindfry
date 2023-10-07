import React from 'react'
import { You } from '../components/You'
import { Navbar } from '../components/Navbar'

export const Foryou = () => {
  return (
    <div className="font-laren w-full overflow-hidden bg-green-5 h-full">
        <Navbar/>
        <You/>
    </div>
  )
}
