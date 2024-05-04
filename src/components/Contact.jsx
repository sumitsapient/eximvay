import React,{useState} from 'react'
import { ContactForm } from './ContactForm';

export const Contact = () => {
    
    
  return (
    <>
    <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-full text-center mb-2">
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold ">CONTACT US</h2>
                    <p className="font-normal text-sm text-gray-600 dark:text-gray-100 mt-1 mb-4 ">Don't Hesitate to Drop Us a Line</p>
    </div>
    <ContactForm/>

    </>

  )
}
