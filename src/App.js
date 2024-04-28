import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import { ProductList } from './components/ProductList';
import { Carousel } from './components/Carousel';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { License } from './components/License';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Analytics />
      {/* <Banner/> */}
      <Carousel/>
      <Contact/>
      {/* <Newsletter /> */}
      {/* <Cards /> */}
      <License/>
      <Footer />
    </div>
  );
}

export default App;
