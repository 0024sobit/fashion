import React, { useContext, useEffect, useState } from "react";
import Hero from "./Hero";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const NewCollections = () => {
  const { products } = useContext(ShopContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex w-full  flex-col md:flex-row my-10 md:my-20 gap-10 justify-between">
      <div className="relative">
        <Hero text1={"NEW"} text2={"COLLECTIONS"} />
        <div className="text-gray-500 ">
          Summer <br /> 2025
        </div>
      </div>

      <div className="flex overflow-x-scroll gap-6">
        <div className="flex gap-5 ">
          {(isMobile ? products.slice(0, 10) : products.slice(0, 2)).map(
            (item, i) => (
              <ProductItem
                key={i}
                id={item._id}
                image={item.image}
                showCurrency={isMobile ? true : false}
                subCategory={isMobile ? item.subCategory : ""}       
                name={isMobile ? item.name : ""}
                price={isMobile ? item.price : ""}  
              />
            )
          )}
        </div>
      </div>
      <Link to={'/collection'} className="h-[40px] w-[169px] justify-between absolute md:w-[265px] flex items-center px-3 bg-[#D9D9D9] bottom-28 md:bottom-45">  
        <span>Go To Shop</span>
        <img src={assets.vector} alt="" />
      </Link>
    </div>
  );
};

export default NewCollections;
