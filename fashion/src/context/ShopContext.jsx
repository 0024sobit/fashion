import { createContext, useState  } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext(); 

const ShopContextProvider = (props) => { 
    const currency = '₹';
    const delivery_fee = 10;
    const [cartItems, setCartItems] = useState([])         
    const navigate = useNavigate();
  
    const addToCart = async (itemId, size) => {
        let cartData = structuredClone(cartItems);   
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1          
            } else {    
                cartData[itemId][size] = 1   
            }  
        }
        else {
            cartData[itemId] ={}; 
            cartData[itemId][size] = 1  
        }
        setCartItems(cartData)
    }

    const updateQuantity = async (itemId, size,quantity) => {
        let cartData = structuredClone(cartItems)
        cartData[itemId][size] = quantity
        setCartItems(cartData)
    }


    const value = {
        products , currency , delivery_fee , addToCart, cartItems , navigate , updateQuantity 
    }
    return (
        <ShopContext.Provider value={value}>   
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;