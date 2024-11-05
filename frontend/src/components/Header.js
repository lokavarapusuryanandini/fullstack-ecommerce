import React, { useState } from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import SummaryApi from '../common';
import { setUserDetails } from '../store/userSlice';
import ROLE from '../common/role';

export const Header = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [menuDisplay, setMenuDisplay] =useState(false);

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include'
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <header className='h-16 shadow-md bg-white'>
      <div className='h-full container mx-auto flex items-center px-1 justify-between'>
        <div>
          <Link to={"/"}>
            <Logo w={90} h={60} />
          </Link>
        </div>
        <div className='hidden lg:flex items-center justify-between max-w-sm border rounded-full pl-2'>
          <input type='text' placeholder='search product here...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 text-white flex items-center justify-center rounded-r-full'>
            <GrSearch />
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='relative flex justify-center'>
            {user?._id && (
              <div
                className='text-3xl cursor-pointer relative flex justify-center'
                onClick={() => setMenuDisplay(prev => !prev)}
              >
                {user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegUserCircle />
                )}
              </div>
            )}

            {menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                <nav>
                  {user?.role === ROLE.ADMIN && (
                    <Link
                      to={"/admin-panel/all-products"}
                      className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2'
                      onClick={() => setMenuDisplay(prev => !prev)}
                    >
                      Admin Panel
                    </Link>
                  )}
                </nav>
              </div>
            )}
          </div>

          <div className='text-3xl relative'>
            <FaShoppingCart />
            <div className='text-sm bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full p-1 absolute -top-2 -right-3'>
              <p>0</p>
            </div>
          </div>
          <div>
            {user?._id ? (
              <button onClick={handleLogout} className='bg-red-600 text-white hover:bg-red-700 rounded-full px-3 py-1'>
                Logout
              </button>
            ) : (
              <Link to={"/login"} className='bg-red-600 text-white hover:bg-red-700 rounded-full px-3 py-1'>
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
