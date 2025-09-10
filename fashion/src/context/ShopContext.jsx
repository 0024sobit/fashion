import { createContext  } from "react";
import { products } from "../assets/assets";
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 10;
    const navigate = useNavigate();


    const value = {
        products , currency , delivery_fee 
    }
    return (
        <ShopContext.Provider value={value}>   
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;