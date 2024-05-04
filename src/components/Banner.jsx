import React from 'react';
import Shipping from '../assets/green-sea.jpg';
import { FaArrowRight, FaFacebook, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitterSquare,
} from 'react-icons/fa';


export const Banner = () => {
  return (<>
    <div className='w-full bg-white py-16 px-4 bg-gray-700 opacity-80'
     style={{ backgroundImage: `url(${Shipping})`, backgroundSize: 'cover', backgroundPosition: 'center',height:'450px' }}>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <div class="grid grid-flow-col gap-3">
  <div class=" col-span-1 z-50">
    <div className='flex fixed flex-col justify-between my-6 space-y-4 left-5'>
  <a href="#" className="hover:text-green-800 ">
    <FaWhatsapp size={30} />
  </a>
  <a href="#" className="hover:text-[#E4405F]">
    <FaInstagram size={30} />
  </a>
  <a href="#" className=" hover:text-[#1877F2]">
    <FaFacebook size={30} />
  </a>
  <a href="#" className="hover:text-[#0A66C2]">
    <FaLinkedinIn size={30} />
  </a>
        </div>
   </div>
  
      </div>
      </div>

    </div>
  </>
    
  )
}


