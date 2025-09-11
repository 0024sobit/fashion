import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <div className='bg-[#D9D9D9] px-15 sm:px-20 pt-20 pb-20  md:p-30 flex flex-col sm:flex-row items-start -mx-4 sm:-mx-5 md:-mx-9 relative'>     
    {/* Left Side */}
       <div className='flex flex-row sm:flex-col justify-start gap-20 flex-1 '>
            <div className='flex flex-col  '>
            <h3 className='text-gray-500 text-[14px] pb-4'>INFO</h3>
            <p className='text-gray-600 text-[14px] font-medium'>PRICING</p> 
            <p  className='text-gray-600 text-[14px] font-medium' >ABOUT</p>
            <p  className='text-gray-600 text-[14px] font-medium'>CONTACT</p>   
            </div>
            <div className='flex flex-col  '>
                    <h3 className='text-gray-500 text-[14px] pb-4'>LANGUAGES</h3> 
                    <p className='text-gray-600 text-[14px] font-medium'>ENG</p>
                    <p  className='text-gray-600 text-[14px] font-medium' >ESP</p>
                    <p  className='text-gray-600 text-[14px] font-medium'>SVE</p>     
            </div>
       </div>
      {/* Right side */}
      <div className='flex flex-col flex-1 pt-15 sm:pt-0'>  
            <h3 className='text-gray-500 text-[14px] pb-4'>TECHNOLOGIES</h3>      
            <div className='flex flex-col '>
                <img className='relative opacity-50 w-fit' src={assets.vr} alt="" />   
                <img className='absolute' src={assets.group53} alt="" />
                <div className='flex flex-row gap-5'>
                    <h1 className='font2 font-black text-[80px] -mt-6'>XIV</h1>    
                    <span className='text-gray-500 text-[12px] whitespace-wrap'>Near-field communication</span> 
                </div>
                <h1 className='font2 font-black text-[80px] -mt-14'>QV</h1>   
            </div>
      </div>
      <div className='absolute flex bottom-0 right-[30%] md:right-[40%] gap-10 md:gap-40'>  
            <span className='whitespace-nowrap text-[12px]'>@ 2025 - copyright</span>
            <span className='whitespace-nowrap text-[12px]'>privacy</span>
      </div>
    </div>
  )
}

export default Footer
