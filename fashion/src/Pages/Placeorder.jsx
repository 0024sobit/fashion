import React, { useContext, useEffect, useState } from 'react'
import assets from '../assets/assets'
import Hero from '../components/Hero'
import { ShopContext } from '../context/ShopContext'

const Placeorder = () => {
  const {products , currency, cartItems, getCartAmount , delivery_fee, navigate} = useContext(ShopContext)    
  const [cartData, setCartData] = useState([]) 

  useEffect(() => {
    const tempData = []
    for(const items in cartItems){
      for(const item in  cartItems[items]){        
        if(cartItems[items][item] > 0){
          tempData.push({
            _id: items,
            size:item,    
            quantity: cartItems[items][item],
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])  
  return (
    <div className='flex flex-col w-full lg:flex-row gap-15  '>  
      {/* Left Side  */}
        <div className='flex flex-col md:flex-2'>  
            <div className='mt-10' >  
            <img onClick={() => navigate('/cart')} src={assets.vector} alt="" className='rotate-180' />         
            </div> 
          <div className='mt-15 text-sm md:mt-30'>    
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
            <div className="h-[40px] justify-between  md:w-[265px] flex items-center px-3 bg-[#D9D9D9] mt-6 w-full  md:ml-auto">
              <span>Shipping</span>
              <img src={assets.vector} alt="" />
            </div>
          </div>   
        </div>   
        {/* Right Side */}  
        <div className='border border-gray-300 relative py-10 px-6 flex flex-col sm:w-[425px] lg:w-[306px]   mt-auto md:flex-1 mb-10 md:mb-16' >    
          <h2 className='font1 text-[14px] tracking-wide'>YOUR ORDER</h2>
          <div className='flex flex-col py-6 gap-3'>
              {cartData.length === 0 ? (
                <p className='text-gray-500 text-sm'>No items in cart</p>   
              ) : (
                cartData.map((item, i) => {
                  const productData = products.find((product) => product._id === item._id)     
                  return (
                    <div key={i} className='flex flex-row gap-4 '>
                        <img src={productData.image[0]} className='w-[113px] h-[134px] object-cover border border-gray-300' alt="" />
                        <div className='flex flex-col'>
                          <div className='flex gap-6 mt-1 justify-between '>    
                            <p className='font1 text-[12px] overflow-ellipsis  '>{productData.name}</p>       
                            <p  className='text-[12px] tracking-tight underline'>Change</p>
                          </div>
                          <p className='font1 text-[12px] text-gray-500 mt-2'>color/{item.size}</p>
                          <div className='mt-auto flex justify-between'>  
                            <p className=' text-blue-700 text-[12px] font-medium tracking-wider'>({item.quantity})</p> 
                            <p className='font1 text-[14px]'>{currency}{productData.price}</p>  
                          </div>
                        </div>
                    </div>
                  )

                })
              )
              }
          </div>
          <hr  className='border-t border-gray-300'/> 
          <div className='inline-flex justify-between mt-3'>    
            <p className='font1 text-[12px]'>Subtotal</p> 
            <p>{currency}{getCartAmount()}</p>          
          </div>
          <div className='inline-flex justify-between mb-3'> 
              <p className='font1 text-[12px] '>Shipping</p>     
              <p>{currency}{delivery_fee}</p> 
          </div>
          <hr  className='border-t border-gray-300'/> 
          <div className='inline-flex justify-between my-2'>   
              <p>Total</p>
              <p>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}</p> 
          </div>
        </div>
        <div>
          <p>{}</p>
        </div>
    </div>
  )
}
 
export default Placeorder        
