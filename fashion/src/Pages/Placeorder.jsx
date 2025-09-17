import React from 'react'
import assets from '../assets/assets'
import Hero from '../components/Hero'

const Placeorder = () => {
  return (
    <div className='flex flex-col w-full'> 
      {/* Left Side  */}
        <div>
            <div className='mt-10'>  
            <img src={assets.vector} alt="" className='rotate-180' />        
            </div> 
          <div className='mt-15 text-sm'>    
            <Hero className='text-xl '  text1={'CHECKOUT'} />     
            <div className='flex gap-[70px] whitespace-nowrap mt-10 font2 text-[12px]'>     
                <p >INFORMATION</p> 
                <p className='text-gray-400 font-light'>SHIPPING</p>        
                <p className='text-gray-400 font-light'>PAYMENT</p>       
            </div>
            <div className='flex flex-col gap-2 mt-6'>
              <h1 className='font2 font-semibold tracking-tight text-sm mb-1'>CONTACT INFO</h1>    
              <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Email'  />
              <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Phone' />  
            </div>
            <div className='flex flex-col gap-2 mt-8'>             
              <h1 className='font2 font-semibold tracking-tight text-sm mb-1'>SHIPPING ADDRESS</h1>       
              <div className='inline-flex gap-2'>  
                <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Frist Name'  />
                <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' />
              </div>
                <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
                <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='State / Region' />
                <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Address' />  
                <div className='inline-flex gap-2'>    
                <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='City'  />   
                <input className='border border-gray-300 py-1.5 px-3.5 w-full' type="text" placeholder='Postal Code' />    
              </div>
            </div>
          </div>   
        </div>   
        {/* Right Side */}  

    </div>
  )
}

export default Placeorder  
