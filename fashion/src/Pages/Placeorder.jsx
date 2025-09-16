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
          </div>   
        </div>   
        {/* Right Side */}  

    </div>
  )
}

export default Placeorder  
