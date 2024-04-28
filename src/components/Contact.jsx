import React,{useState} from 'react'

export const Contact = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    
  return (
    <>
    <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-full text-center mb-2">
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold mt-4 ml-4">CONTACT US</h2>
                    <p className="font-normal text-sm text-gray-600 dark:text-gray-100 mt-1 mb-4 ml-4 underline decoration-sky-500/30">Don't Hesitate to Drop Us a Line</p>
     </div>
     <div className=" 2xl:container 2xl:mx-auto md:py-6 lg:px-20 md:px-6 py-9 px-4 bg-gray-200 bg-opacity-60">
            
            <div className=" flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
                
                <div className=" md:w-7/12 lg:w-full w-full md:mt-0 sm:mt-14 mt-10 ">
                    {/* <!-- Sell Section --> */}
                    <a href="#" className="block" onClick={(e) => { e.preventDefault(); setShow(!show); }}>
    <div className="flex justify-between items-center cursor-pointer">
        <h3 className="font-semibold text-xl leading-5 text-gray-800">I want to Sell.</h3>
        <button aria-label="toggle" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={show ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </div>
    <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show ? "block" : "hidden")}>We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
                    </a>

                    <hr className=" my-7 bg-gray-200" />

                    {/* <!-- Buy Section --> */}

                    <a href="#" className="block" onClick={(e) => { e.preventDefault(); setShow2(!show2); }}>
    <div className="flex justify-between items-center cursor-pointer">
        <h3 className="font-semibold text-xl leading-5 text-gray-800">I want to Buy.</h3>
        <button aria-label="toggle" className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={(e) => e.stopPropagation()}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={show2 ? "hidden" : "block"} d="M10 4.1665V15.8332" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4.16602 10H15.8327" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    </div>
    <p className={"font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " + (show2 ? "block" : "hidden")}>We are covering every major country worldwide. The shipment leaves from US as it is our headquarter. Some extra information you probably need to add here so that the customer is clear of their wanted expectations.</p>
</a>


                    <hr className=" my-7 bg-gray-200" />
                
                </div>
            </div>
        </div>

    </>

  )
}
