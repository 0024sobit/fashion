import React from 'react'  

const Hero = ({text1, text2}) => {
  return (
    <div className='flex flex-col w-full font2'>
      <h1 className='text-4xl font-extrabold leading-none '>    
          <span className='block'>{text1}</span>
          <span className='block'>{text2}</span> 
      </h1>
    </div>
  )
}

export default Hero    
