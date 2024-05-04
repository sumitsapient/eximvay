import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false); // Close the navigation menu
  };

  return (<>

    <div className='flex relative z-10 justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
      <Link to="/">
      <h1 className='w-full text-3xl font-bold text-[#000300]'>VAY</h1>
            </Link>
      <ul className='hidden md:flex'>
      <Link to="/about"><li className='p-4'>About us </li></Link>
      <Link to="/product"><li className='p-4'>Products</li></Link>
      <Link  to='/contact'><li className='p-4'>Contact</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className="absolute md:hidden right-0" style={{marginTop:'86px'}}>
      <HashLink smooth to='#contact'>
       <button className="ml-2 mt-26 mb-2 bg-[#f58b33] transition duration-150 ease-in-out hover:bg-orange-600 rounded text-white px-6 py-2 text-xs" style={{padding:'3px',fontSize:'12px'}}>Contact Us</button>
      </HashLink>
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <Link to="/"> <h1 className='w-full text-3xl font-bold text-black m-4'>VAY</h1></Link>
          <Link to="/about"><li className='p-4 border-b border-gray-600' onClick={closeNav}>About us</li></Link>
          <Link to="/product"><li className='p-4 border-b border-gray-600' onClick={closeNav}>Products</li></Link>
          <Link  to='/contact'><li className='p-4 border-b border-gray-600' onClick={closeNav}>Contact</li></Link>
      </ul>
      
      
    </div>
    </>
  );
};

export default Navbar;
