import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home } from './components/Home';
import { PageNotFound } from './components/404';
import { About } from './pages/About';
import { ProductList } from './pages/ProductList';
import { ProductDetail } from './pages/ProductDetail';
import { ContactForm } from './components/ContactForm';
import { ThankYou } from './pages/ThankYou';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<ProductList/>}/>
      <Route path='/product/:productId' element={<ProductDetail/>}/>
      <Route path='/contact' element={<ContactForm/>}/>
      <Route path='/thankyou' element={<ThankYou/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
);


