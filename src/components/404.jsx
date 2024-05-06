import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
  //   <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
  //   <div className="rounded-lg bg-white p-8 text-center shadow-xl">
  //     <h1 className="mb-4 text-4xl font-bold">404</h1>
  //     <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
  //     <Link to="/" className="mt-4 inline-block rounded bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Home </Link>
  //   </div>
  // </div>
  <div className="bg-gray-100 h-screen">
      <div className="bg-white p-6  md:mx-auto">
      <svg viewBox="0 0 24 24" className="text-red-600 w-16 h-16 mx-auto my-6">
    <path fill="currentColor"
        d="M20.71,5.29a1,1,0,0,0-1.42,0L12,12.59,5.71,6.29a1,1,0,1,0-1.42,1.42L10.59,14,4.29,20.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,15.41l6.29,6.29a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,14l6.29-6.29A1,1,0,0,0,20.71,5.29Z">
    </path>
</svg>


        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">404</h3>
            <p className="text-gray-600 my-2">Oops! The page you are looking for could not be found.</p>
            
            <div className="py-10 text-center">
            <Link to="/" className="mt-4 inline-block rounded bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Return to Home </Link>
            </div>
        </div>
    </div>
  </div>
  )
}
