import React, { useState } from 'react'   
import assets from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [visible , setVisible ] = useState(false)
  return (
    <div className='flex items-center justify-between py-6 '>  
      <div className='flex gap-6 items-center'>
        <img onClick={() => setVisible(true)} className='w-[26px] h-[16px] cursor-pointer' src={assets.group36} alt="" />  
        <ul className='hidden sm:flex gap-5 text-sm text-black font1'>    
            <NavLink to={'/'} className='flex flex-col items-center gap-1 '>         
                <p>Home</p>         
                <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>                                                                          
            </NavLink>   
            <NavLink to={'/collection'} className='flex flex-col items-center gap-1 '>     
                <p>Collections</p>       
                <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>      
            </NavLink>
            <NavLink to={'/new'} className='flex flex-col items-center gap-1 '>          
                <p>New</p>       
                <hr  className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>   
            </NavLink>
        </ul>
      </div>
      <div>
        <img className='w-[29px] h-[29px] md:w-[50px] md:h-[50px]' src={assets.group53} alt="" />        
      </div>
      <div className='flex items-center justify-between gap-4'>         
        <div className='hidden sm:flex sm:bg-black  w-[40px] h-[40px] rounded-full justify-center items-center'>
            <img src={assets.group9} alt="" />
        </div>
        <NavLink to={'/cart'} className='hidden md:flex sm:bg-black w-[40px] h-[40px] rounded-[21px] justify-center items-center px-10'>     
            <span className='text-white '>Cart</span> 
        </NavLink> 
        <NavLink to={'/cart'} className=' w-[41px] h-[41px]  border-black sm:w-[40px] sm:h-[40px] border-6 rounded-full md:hidden'>
            <img src={assets.group11} alt="" />
        </NavLink>
        <div className='w-[41px] h-[41px]  bg-black sm:w-[40px] sm:h-[40px] rounded-full flex items-center justify-center'>       
            <img src={assets.group10} alt="" />
        </div>  
      </div>
      <div className={`fixed top-0 left-0 w-full h-full bg-white transition-all z-50 opacity-100 md:hidden  ${visible ? 'block' : 'hidden'}`}>           
          <div className='flex flex-col text-gray-900 h-full bg-gray mt-5'>
              <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3'>   
                <img className='rotate-180' src={assets.vector} alt="" />
              </div>
              <NavLink onClick={() => setVisible(false)} className='flex  py-3 pl-6 border-b border-gray-300' to={'/'}>HOME</NavLink>
              <NavLink onClick={() => setVisible(false)} className='flex  py-3 pl-6 border-b border-gray-300' to={'/collection'}>COLLECTION</NavLink>
              <NavLink onClick={() => setVisible(false)} className='flex  py-3 pl-6 border-b border-gray-300' to={'/collection'}>NEW</NavLink>  
          </div>
      </div>
    </div>
  )
}

export default Navbar
