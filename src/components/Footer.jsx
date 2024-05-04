import React from 'react';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitterSquare,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className=' mx-auto pt-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 footer'>
      <div>
        <h1 className='w-full text-3xl font-bold '>VAY</h1>
        <p className='py-4'>Coyright &#169; 2024 VAY. All rights reserved. </p>
      </div>
      <div className='flex'>
    <div>
        <h6 className='font-medium text-gray-400'>Contact</h6>
        <ul>
            <li className='py-2 text-sm flex items-center'><FaLocationDot size={25} /> <span>&nbsp; Mumbai & Bengaluru</span></li>
            <li className='py-2 text-sm flex items-center'><FaEnvelope size={25} /><span>&nbsp; contact@eximvay.com</span></li>
            <li className='py-2 text-sm flex items-center'><FaPhone size={25} /><span>&nbsp;+91 123456789</span></li>
          
        </ul>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaLinkedin size={30} />
        </div>
    </div>
      </div>
    </div>
  );
};

export default Footer;
