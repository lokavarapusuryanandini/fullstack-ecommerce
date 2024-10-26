import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
        <div className='h-full container mx-auto flex items-center px-1 justify-between'>
            <div className='' >
                <Link to={"/"}>
                <Logo w= {90} h = {60}/>
                </Link>
            </div>
            <div className='hidden lg:flex items-center justify-between max-w-sm border rounded-full pl-2'>
                <input type ='text' placeholder='search product here...' className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8 bg-red-600 text-white flex items-center justify-center rounded-r-full'>
                    <GrSearch/>
                </div>
            </div>
            <div className='flex items-center gap-7'>
                <div className='text-3xl cursor-pointer'>
                    <span><FaRegUserCircle/></span>
                </div>
                <div className='text-3xl relative'>
                    <FaShoppingCart/>
                    <div className='text-sm bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full p-1 absolute -top-2 -right-3'>
                        <p>0</p>
                    </div>
                </div>
                <Link to= {"/login"} className='bg-red-600 text-white hover:bg-red-700 rounded-full px-3 py-1'>Login</Link>
                <div></div>
            </div>
        </div>
    </header>
  )
}
