import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Navbar from '../components/Navbar'
import assets from '../assets/assets'

const Product = () => {
  const { productId } = useParams()
  const { products, currency} = useContext(ShopContext)    
  const [productData, setProductData ] = useState(false)    
  const [image, setImage] = useState("") 
  const [size, setSize] = useState("")

  const fetchProductData = async () => {
    products.map((item,i) => {
        if(item._id === productId){  
          setProductData(item);
          setImage(item.image[0]);
          return null
        }
    })
  };
  useEffect(() => { 
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className=' opacity-100   transition-opacity easein duratonn-500'>   
     <Navbar />
        <div className='flex flex-col md:flex-row gap-12 md:px-20 md:pt-20 md:pb-5'>  
          <div className='flex-1 flex flex-col  gap-3 md:flex-row md:w-[875px] mx-auto'>     
            <div className='h-auto  md:w-[367px] md:border border-gray-300 '>  
                  <img className='w-full h-full object-cover' src={image} alt="" />
              </div>
              <div className='flex md:flex-col overflow-x-auto md:overflow-y-scroll justify-between md:justify-normal md:w-[100px]'>    
                {
                  productData.image.map((item, i) => (
                    <img className='w-[62px] md:w-full md:mb-3 shrink-0 cursor-pointer border border-gray-300' src={item} key={i} onClick={()=> setImage(item)} alt=""  />
                  ))
                }
              </div>
          </div>
            <div className='flex flex-col  md:border md:border-gray-300  md:px-6 md:pt-20  py-2 relative'>   
              <div className='flex flex-row md:flex-col justify-between md:justify-normal tracking-wider'>
                  <h3 className='font1 font-medium text-[14px]  md:font-extrabold'>{productData.name}</h3>
                  <p className='font-medium md:pt-1 translate-y-7 md:translate-0'>{currency} {productData.price}</p>  
              </div>
              <span className='text-gray-500 font1 text-[12px] tracking-wider pt-2 md:pt-2'>MRP incl. on all taxes</span>   
              <p className='pt-[25px] font1 text-[10px] font-medium md:pt-6'>{productData.description}</p>   
              <span className='text-gray-500 pt-10 md:pt-8 text-start '>Color</span> 
              <div className='flex gap-4 pt-1 md:pt-2'>
                  <div className='w-8 h-8 border border-gray-300 bg-white'></div>
                  <div className='w-8.5 h-8.5 border border-gray-300 bg-gray-400'></div>  
                  <div className='w-8.5 h-8.5 border border-gray-300 bg-black'></div>
                  <div className='w-8.5 h-8.5 border border-gray-300 bg-[#A6D6CA]'></div>   
                  <div className='w-8.5 h-8.5 border border-gray-300 bg-white'></div>
                  <div className='w-8.5 h-8.5 border border-gray-300 bg-[#B9C1E8]'></div>
              </div>  
              <div className='flex gap-3 pt-1 mb-10 md:pt-2 flex-col'>
                  <p className='text-gray-500 '>Size</p>
                  <div className='flex gap-4'>      
                    {
                      productData.sizes.map((item,i) => ( 
                        <button onClick={()=> setSize(item)} className={`py-2 w-8.5 h-8.5 border flex items-center justify-center border-gray-300 bg-gray-100 ${item === size ? 'border border-gray-950' : ""}`} key={i}>  
                            {item}
                        </button>
                      ))
                    }
                  </div>
              </div>
              <div  className='font-medium text-gray-400 text-[10px] pt-1 md:pt-2'>FIND YOUR SIZE | MEASUREMENT GUIDE</div> 
               <div className='fixed bottom-0 bg-[#D9D9D9] w-full text-[12px] h-[49px] -mx-4 text-black flex items-center justify-center md:[49px] md:w-[229px] md:h-10 md:relative md:mt-8 md:mb-2 md:mx-auto '>
                  ADD
              </div>
              <div className='bg-white w-[34px] h-[34px] flex items-center right-1 top-0 mb:right-0 absolute justify-center'>
                <img className='   bg-white' src={assets.blacklove} alt="" />   
              </div>
            </div>
        </div>
    </div>
  ) : ( 
    <div className='opacity-0'></div>
  )
}

export default Product
