import React, { useState } from 'react'
import loginIcons from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data,setData] = useState({
        email : "",
        password : ""
    })

    console.log('login data======>', data);
    const handleOnChange = (e) =>{
        const { name , value } = e.target

        setData((prev)=>{
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault()
    }

    return (
    <section id = 'login'>
        <div className='mx-auto container p-5'>
            <div className='bg-white p-5 w-full max-w-sm mx-auto'>
                <div className='mx-auto w-20 h-20'>
                    <img src={loginIcons} alt ='login icons'/>
                </div>
                
                <form className='pt-6' onSubmit={handleSubmit}>
                 <div className='grid'>
                     <label>Email:</label>
                    <div className='bg-slate-100 p-2'>
                    <input 
                    type='email' 
                    placeholder='enter email'
                    name = 'email'
                    value = {data.email}
                    onChange = {handleOnChange}
                    className='w-full h-full outline-none bg-transparent'></input>
                    </div>

                 </div>
                <div>
                    <label>Password:</label>
                    <div className='bg-slate-100 p-2 flex'>
                        <input 
                        type = { showPassword ? 'text' : 'password'} 
                        placeholder='enter password'
                        name = 'password'
                        value = {data.password}
                        onChange = {handleOnChange}
                        className='w-full h-full outline-none bg-transparent'></input>
                         <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((prev)=> !prev)}>
                            <span>
                                {
                                showPassword ?
                                (<FaEyeSlash/>) :
                                (<FaEye/>)
                                }
                            </span>
                         </div>
                    </div>
                    <Link to={'/forgot-password'} className='block w-fit hover:underline hover:text-red-600 ml-auto'>Forgot Password </Link>
                </div>
                <button className='bg-red-600 text-white rounded-full px-6 py-2 mx-auto block w-full max-w-[150px] hover:scale-110 hover:text-red-700 transition-all mt-4'>Login</button>
               <p className='my-5'> Don't have an account? <Link to={'/sign-up'} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
                </form>
            </div>
            
        </div>
        
    </section>
  )
}
