import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'  

const ProductItem = ({id, image,name,price,subCategory, showCurrency = true}) => { 
    const {currency} = useContext(ShopContext)
  return (  
    <Link className=' shrink-0' to={`/product/${id}`}>         
        <div className='overflow-hidden '>    
            <img className='hover:scale-110 object-contain transition ease-in-out w-[167px] h-[173px] md:w-[366px] md:h-[376px]' src={image[0]} alt="" />    
        </div> 
        <p className='pt-3 pb-1 text-gray-500 font1'>{subCategory}</p> 
        <div className='flex flex-row w-full py-1 justify-between font1 text-[18px] '>
            <p className='text-[12px] whitespace-nowrap overflow-ellipsis w-[113px] md:w-full overflow-x-hidden' >{name}</p>
            <p className='text-[15px] whitespace-nowrap'> {showCurrency ? `${currency} ${price}` : price}</p>  
        </div>
    </Link>
  )
}     
 
export default ProductItem     
