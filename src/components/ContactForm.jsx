import React, { useState } from 'react'
import axios from "axios";

export const ContactForm = () => {

    const [client, setClient] = useState("");  
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post("https://nodemailer-en33.onrender.com/api/send", { 
            client,
            email,
            company,
            country,
            message
          });
          alert("Email sent!");
        } catch(err) {
          alert(err);
        }
      };
    return (
        <div className="bg-gray-100 w-full " >
            <h1 className="mt-8 md:mt-12 text-xl lg:text-3xl font-semibold leading-10 text-center text-gray-800 pt-7">I want to ...</h1>
             <div className="mt-12 md:mt-14 w-full flex justify-center">
                        <button className="w-full bg-[#f58b33] sm:w-auto shadow-lg text-white rounded-full font-medium text-white-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-white hover:text-[#f58b33]">
                            BUY
                        </button>
                        <button className="w-full ml-8 sm:w-auto bg-[#f58b33] shadow-lg  rounded-full text-white font-medium text-gray-800 py-5 px-14 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-white hover:text-[#f58b33]">
                            SELL
                        </button>
                    </div>
        <div id="contact" className="w-full flex items-center justify-center mb-12 pb-6">
            <div className="top-40 bg-white shadow rounded mt-7 py-12 lg:px-28 px-8">
                <p className="md:text-lg text-xl font-bold leading-7 text-center text-gray-700">Get in touch</p>
                <form onSubmit={handleSubmit}>
                <div className="md:flex items-center mt-12">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-normal leading-none text-gray-800">Name</label>
                        <input required value={client}
            onChange={(e) => setClient(e.target.value)}  tabIndex={0} aria-label="Please input name" type="name" className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-normal leading-none text-gray-800">Email Address</label>
                        <input required value={email}
            onChange={(e) => setEmail(e.target.value)}   tabIndex={0} aria-label="Please input email address" type="name" className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                    </div>
                </div>
                <div className="md:flex items-center mt-8">
                    <div className="md:w-72 flex flex-col">
                        <label className="text-base font-normal leading-none text-gray-800">Company name</label>
                        <input required value={company}
            onChange={(e) => setCompany(e.target.value)}  tabIndex={0} role="input" aria-label="Please input company name" type="name" className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                    </div>
                    <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <label className="text-base font-normal leading-none text-gray-800">Country</label>
                        <input required value={country}
            onChange={(e) => setCountry(e.target.value)}  tabIndex={0} aria-label="Please input country name" type="name" className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                    </div>
                </div>
                <div>
                    <div className="w-full flex flex-col mt-8">
                        <label className="text-base font-normal leading-none text-gray-800">Message</label>
                        <textarea required value={message}
            onChange={(e) => setMessage(e.target.value)} tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"  />
                    </div>
                </div>
                <p className="text-xs leading-3 text-gray-600 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                <div className="flex items-center justify-center w-full">
                    <button type="submit" className="mt-9 text-base font-normal leading-none text-white py-4 px-10 bg-[#333f7f] rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">SUBMIT</button>
                </div>
                </form>
            </div>
        </div>
    </div>
    
    );
}
