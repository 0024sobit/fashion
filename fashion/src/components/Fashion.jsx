import React from "react";
import assets from "../assets/assets";

const Fashion = () => {
  return (
    <div className="flex flex-col my-5  ">
      <div className="flex items-center justify-center flex-col">
        <h1 className="font1 text-[14px] font-black sm:text-2xl md:text-3xl  md:font-medium tracking-wider ">OUR APPROACH TO FASHION DESIGN</h1>
        <p className="text-center mx-5 sm:mx-20 md:mx-45 mt-3  font-light">       
          at elegant vogue , we blend creativity with craftsmanship to create   
          fashion that transcends trends and stands the test of time each design     
          is meticulously crafted, ensuring the highest quelity exqulsite finish      
        </p>  
      </div>
      <div className="flex flex-row gap-3 my-15 sm:mb-20 overflow-hidden md:gap-5 lg:gap-9">           
            <img className="w-[120px] h-[130px] shrink-0 object-cover sm:w-[200px] sm:h-[210px]   md:w-[260px] md:h-[270px] lg:w-[330px] lg:h-[350px]" src={assets.rectangle1} alt="" />  
            <img className="w-[120px] h-[130px] shrink-0  object-cover mt-10 sm:w-[200px] sm:h-[210px] md:w-[260px] md:mt-15 md:h-[270px] lg:w-[330px] lg:h-[350px] lg:mt-20 " src={assets.rectangle2} alt="" />  
            <img className="w-[120px] h-[130px] shrink-0 object-cover sm:w-[200px] sm:h-[210px] md:w-[260px] md:h-[270px] lg:w-[330px] lg:h-[350px]" src={assets.rectangle3} alt="" />
            <img className="w-[120px] h-[130px] shrink-0 object-cover mt-10 sm:w-[200px] sm:h-[210px] md:mt-15 md:w-[260px] md:h-[270px] lg:w-[330px] lg:h-[350px] lg:mt-20 " src={assets.rectangle4} alt="" />
      </div>  
    </div>   
  );
};

export default Fashion;
