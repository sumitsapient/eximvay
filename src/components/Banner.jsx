import React from 'react'
import Shipping from '../assets/shipping.jpg';

export const Banner = () => {
  return (
    <div className="relative mx-auto">
    <img className="w-full object-cover rounded-md" src={Shipping} alt="Random image"/>
    <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
    <div className="absolute inset-0 flex items-center">
        <h2 className="text-white text-3xl font-bold pl-6">Welcome to VAY, your trusted partner in international trade!</h2>
    </div>
  </div>


  
  
  )
}
