import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/ShopContext";
import assets from "../assets/assets";

const Cart = () => {
  const { products, currency, cartItems, navigate, updateQuantity } =
    useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div>
      <Navbar />
      <div className="mt-14 flex flex-row">
        <div className="flex flex-col ">
          <div className="flex  items-center ">
            <div className="font2  text-[13px] font-semibold ">
              SHOPPING BAG
            </div>
            <div className="bg-white w-[34px] h-[34px] items-center flex justify-center ml-6">
              <img className="   bg-white" src={assets.blacklove} alt="" />
            </div>
            <span className="font2 text-[13px] ml-[4px] text-[#8A8A8A]">
              FAVOURITES
            </span>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row  border-t border-b">
            {cartData.map((item, i) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div key={i} className="py-4 flex flex-row gap-4 ">
                  <div className="flex flex-col">
                    <img
                      src={productData.image[0]}
                      alt={productData.name}
                      className="w-[265px] h-[314px] object-cover"
                    />
                    <p className="pt-3 pb-1 text-gray-500 font1">
                      {productData.subCategory}
                    </p>
                    <div className="flex flex-row w-full py-1 justify-between font1 text-[18px]">
                      <p className="text-[12px] whitespace-nowrap overflow-ellipsis w-[113px] md:w-full overflow-x-hidden">
                        {productData.name}
                      </p>
                      <p className="text-[15px] whitespace-nowrap">
                        {currency}
                        {productData.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      src={assets.close_icon}
                      alt=""
                      className="mt-1 w-[12px] h-[12px]"
                      onClick={() =>  updateQuantity(item._id, item.size, 0)}
                    />
                    <div  className="mt-25 flex flex-col items-center">
                      <p className="font2 text-[14px] font-black">{item.size}</p>
                      <div className="flex flex-col items-center border border-gray-500 w-[27px] mt-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              item.size,
                              item.quantity + 1
                            )
                          }
                          className="border-b border-gray-400 w-full text-center"
                        >
                          +
                        </button>

                        <span className="text-sm font2 font-bold">{item.quantity}</span>

                        <button
                          onClick={() =>
                            updateQuantity( 
                              item._id,
                              item.size,  
                              Math.max(item.quantity - 1, 0)
                            )
                          }
                          className="border-t border-gray-400 w-full text-center"       
                        >
                          -
                        </button>
                      </div>
                      <div className="mt-5"><img onClick={() => updateQuantity(item._id, item.size, 1)} src={assets.group95} alt="" /></div> 
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
