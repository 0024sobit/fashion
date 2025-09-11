import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets'

const Collection = () => { 
  const { products } = useContext(ShopContext)    
  const [showFilter, setShowFilter] = useState(false) 

  return (
    <div > 
      <Navbar />
      <div className='flex flex-col md:flex-row gap-1 sm:gap-10 pt-5 relative'> 
            {/* left side */}
            <div className='min-w-60 mt-30'>      
                <p onclick={() => setShowFilter(!showFilter)} className='my-2 text-[14px] font-semibold tracking-wider font1 flex items-center cursor-pointer gap-2'>
                  Filters{' '}
                  <img className={`h-3 md:hidden ${showFilter ? 'rotate-160' : ''}`} src={assets.dropdown_icon} alt="" />      
                </p>
                <div>

                </div>
            </div>
            
            <div className='absolute flex flex-col items-center md:items-start w-[330px] sm:w-[357px] md:w-[367px] justify-center   mx-auto  '> 
                <div className='flex  w-1/2 items-center justify-center md:justify-start'>
                    <span className='text-gray-400 text-[12px] pr-[1px]'>Home </span> 
                    <span className='text-gray-800 text-[12px] pl-[1px]'>/ Products</span>    
                </div>
                <h1 className='font1 text-5 font-black'>PRODUCTS</h1>
                <div className='bg-[#D9D9D9] text-center inline-flex items-center w-full    px-5 my-5  h-[40px] '>
                  <img className='w-4' src={assets.group4} alt="" placeholder='Search' />  
                  <input type=" text" className='flex-1 outline-none bg-inherit text-sm' />       
                </div>
            </div>
      </div>
      

    </div>  
  )    
}

export default Collection 