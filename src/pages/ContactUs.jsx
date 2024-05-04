import React from 'react'
import { ContactForm } from '../components/ContactForm';

export const ContactUs = () => {
  return (
    <div className="items-center w-full">

       <div className="flex items-center justify-center w-full h-24 dark:border-gray-700 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r dark:bg-gray-700 bg-gray-100">

        <div className="text-center text-2xl font-bold">Contact Us</div>
        <ContactForm/>
        
    </div>
    </div>
  )
}
