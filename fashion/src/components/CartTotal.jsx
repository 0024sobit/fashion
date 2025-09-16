import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount, navigate} = useContext(ShopContext) 
    const [agree, setAgree] = useState(false) 

    const handleContinue = () =>  {
        if(!agree) {
            alert("please agree to the Terms and Conditions before continuing")    
            return
        }
        navigate('/place-order')   
    }
  return (
    <div className='border border-gray-400 py-10 px-10 flex flex-col rounded-sm'>  
        <h2 className='font1 font-medium text-[14px] '>ORDER SUMMARY</h2>           
        <div className='flex flex-col gap-2 mt-3 text-sm'>
            <div className='flex justify-between font1 text-[13px]'>  
                <p>Subtotal</p>
                <p>{currency}{getCartAmount()}.00</p> 
            </div>
            <div className='flex justify-between font1 text-[13px]'>  
                <p>Shipping Fee</p>  
                <p>{currency} {delivery_fee}.00</p>  
            </div>
            <hr />
            <div className='flex justify-between mt-2 font2'>
                <p className='font-bold'>TOTAL <span className='font-normal text-gray-500 text-[12px]'>(TAX INCL.)</span></p>
                <p>{currency} {getCartAmount() === 0 ? 0: getCartAmount() + delivery_fee}.00</p>
            </div>
            <div className='flex gap-2 whitespace-nowrap mt-6'>
                <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} checked={agree} required />
                <p className='text-gray-500 font2 font-light'>I agree to the Terms and Conditions</p>
            </div>
            <div onClick={ handleContinue} className={`w-full h-10  flex items-center justify-center mt-1 ${agree ? 'bg-orange-400 text-white' : 'bg-[#D9D9D9] '}`}> 
                <span className='font1 text-[12px] font-medium tracking-wider'>CONTINUE</span>    
            </div>  
        </div>
    </div>
  )
}
   
export default CartTotal
