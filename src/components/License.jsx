import React from 'react'
import Marquee from 'react-fast-marquee'
import LicenseOne from '../assets/laptop.jpg';

export const License = () => {
  return (
    <>
    <div className="mb-4 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0 lg:w-full text-center mb-2">
                    <h2 className="text-gray-800 dark:text-gray-100 text-lg font-bold mt-4 ml-4">LICENSE DETAILS</h2>
                    <p className="font-normal text-sm text-gray-600 dark:text-gray-100 mt-1 mb-4 ml-4 underline decoration-sky-500/30">Facilitating global trade with integrity and expertise.</p>
     </div>
     <Marquee speed={50} delay={0} pauseOnHover={false}>
    {/* License one */}
    <div className="flex items-center justify-between w-full mb-4">
    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
        <img src={LicenseOne} alt="Your Image" className="w-full lg:w-2/3 h-64 object-cover lg:rounded-l" />

    </div>
</div>
    {/* License two */}
    <div className="flex items-center justify-between w-full mb-4">
    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
        <img src={LicenseOne} alt="Your Image" className="w-full lg:w-2/3 h-64 object-cover lg:rounded-l" />

    </div>
</div>
    {/* License three */}
    <div className="flex items-center justify-between w-full mb-4">
    <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow">
        <img src={LicenseOne} alt="Your Image" className="w-full lg:w-2/3 h-64 object-cover lg:rounded-l" />
       
    </div>
</div>
</Marquee>

    </>
  )
}
