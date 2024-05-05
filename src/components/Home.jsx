import React, { useState ,useEffect} from 'react'

import {Carousel} from'../components/Carousel';
import {Contact} from'../components/Contact';
import {License} from'../components/License';
import { Banner } from './Banner';
import { DNA } from 'react-loader-spinner';


export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
  });
  return (
    <>
      {loading && (
                
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
                    <DNA
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
  />
                </div>
            
        )}
    <Banner/>
    <Carousel/>
    <Contact/>
    <License/>
    </>
  )
}
