import React from "react";
import assets from "../assets/assets";

const CategoryMenu = () => {
  return (
    <div className="flex flex-col gap-4 mx-w-[367px] ">
      <ul className="list-none  font-regular w-full font1 text-g tracking-widest">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
      </ul>
      <div className="flex items-center bg-[#D9D9D9] px-3 py-2  max-w-[367px] opacity-80">        
        <img src={assets.group4} alt="" />
        <input
          type="text"
          placeholder="Search" 
          className="ml-2  outline-none w-full text-gray-800 placeholder-gray-600  placeholder:text-[12px] placeholder:text-right px-3 font1 placeholder:-tracking-[-1px]"   
        />
      </div>
    </div>
  );
};

export default CategoryMenu;
