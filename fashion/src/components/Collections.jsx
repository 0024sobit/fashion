import React, { useContext, useEffect, useState } from 'react'
import Hero from './Hero'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const Collections = () => {
    const { products } = useContext(ShopContext)
    const [collection, setCollection] = useState([])

    useEffect(() => {        
        if(products && products.length > 0){
            const random = [...products].sort(() => Math.random() - 0.5)        
            setCollection(random.slice(0,10))  
        }
    }, [])

  return (
    <div className='flex flex-col mt-30 sm:mt-30 md:my-15'> 
        <div className='flex flex-col w-full'>
            <div className='flex justify-between items-end'> 
                <Hero text1={'NEW'} text2={'THIS WEEK'} />    
                <span className='text-[10px] text-gray-700  flex whitespace-nowrap mb-1'>See All</span>      
            </div> 
            <div className=' flex flex-col gap-6 py-14'>
                <div className='flex  overflow-x-scroll gap-6 '>
                    {
                        collection.map((item,index) => (
                            <ProductItem key={index} image={item.image} name={item.name} price={item.price} subCategory={item.subCategory} showCurrency={true} />
                        ))
                    }
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Collections
