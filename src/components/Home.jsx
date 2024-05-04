import React from 'react'

import {Carousel} from'../components/Carousel';
import {Contact} from'../components/Contact';
import {License} from'../components/License';
import { Banner } from './Banner';


export const Home = () => {
  return (
    <>
    <Banner/>
    <Carousel/>
    <Contact/>
    <License/>
    </>
  )
}
