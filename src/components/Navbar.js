import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    
    <div className='shadow-md w-full absolute top-0 left-0 shadow-white'>
      <div className='md:flex items-center justify-between bg-black py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-white'>
          <span className="mr-1 pt-1">
            <img className="h-14 w-14 rounded-full"src="logo.png" alt="img"></img>
          </span>
          FurryCare
        </div>
        <div onClick={()=>setOpen(!open)}
         className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
       <ion-icon name={open?'close':'menu'}></ion-icon>
        </div>
        <nav>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
        duration-500 ease-in ${open?'top-20':'top-[-490px]'}`}>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
          <Link to="/" className='text-white hover:text-gray-400 duration-500'>Home</Link>
        </li>
        <li className='md:ml-8 text-xl md:my-0 my-7'>
          <Link to="/AboutUs" className='text-white hover:text-gray-400 duration-500'>About</Link>
        </li>
        <li className='md:ml-8 text-xl'>
          <Link to="/ContactUs" className='text-white hover:text-gray-400 duration-500'>Contact</Link>
        </li>
        </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar