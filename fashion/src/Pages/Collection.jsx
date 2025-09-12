import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { ShopContext } from '../context/ShopContext'
import assets from '../assets/assets'
import ProductItem from '../components/ProductItem'

const Collection = () => { 
  const { products } = useContext(ShopContext)    
  const [showFilter, setShowFilter] = useState(false) 
  const [openSection, setOpenSection] = useState(null) 
  const [filterProducts, setFilterProducts] = useState([])
  const [size, setSize] = useState([])  

  const togglesection = (section) => {  
    setOpenSection(openSection === section ? null : section);      
  }

  const toggleSize = (e) => {
    if(size.includes(e.target.value)){
      setSize(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSize(prev => [...prev, e.target.value]) 
    }
  }
  const applyFilter = () => {
    let productsCopy = products.slice()
    if(size.length > 0){
      productsCopy = productsCopy.filter(item => size.includes(item.size))    
    }
    setFilterProducts(productsCopy)
  }
  useEffect(() => {
    applyFilter()
  }, [size]) 

  return (
    <div > 
      <Navbar />
      <div className='flex flex-col md:flex-row gap-1 sm:gap-10 pt-5  h-auto'>    

        <div className='flex flex-col items-center md:items-start w-[330px] sm:w-[357px] md:hidden justify-center   mx-auto  '>   
                <div className='flex  w-1/2 items-center justify-center md:justify-start'>
                    <span className='text-gray-400 text-[12px] pr-[1px]'>Home </span> 
                    <span className='text-gray-800 text-[12px] pl-[1px]'>/ Products</span>          
                </div>
                <h1 className='font1 text-5 font-black'>PRODUCTS</h1>
                <div className='bg-[#D9D9D9] text-center inline-flex items-center w-full    px-5 my-5  h-[40px] '>    
                  <img className='w-4' src={assets.group4} alt="" placeholder='Search' />  
                  <input type=" text" className='flex-1 outline-none bg-inherit text-sm' />         
                </div>
        </div> 

            {/* left side */}
          <div className={`overflow-hidden md:flex ${showFilter ? 'flex' : ''}`}>     
            <div className={`min-w-[25%] h-[30px] ${showFilter ? 'min-w-[37%] h-[30px] mr-4' : ''}`}>       
                <p onClick={() => setShowFilter(!showFilter)} className={`my-2 text-[14px] font-semibold tracking-wider font1 flex items-center cursor-pointer gap-2 ${showFilter ? 'justify-between' : ''}`}>
                  Filters{' '} 
                  <img className={`h-3 md:hidden ${showFilter ? 'rotate-180 ' : ''}`} src={assets.dropdown_icon} alt="" />                
                </p> 
                <div className={`md:flex ${showFilter ? "flex" : "hidden"}`}>
                  <div className={`flex flex-col ${showFilter ? 'w-[160px] h-auto max-h-[565px]' : 'hidden'} md:block`}>  
                    <p className='font1 font-medium tracking-wider text-[14px]'>Sizes</p> 
                    <div className='flex gap-1 pt-2'>
                      <div className='w-[25px] h-[25px] flex items-center justify-center font1 text-[12px] md:w-[38px] md:h-[39px] border border-gray-400 font-semibold' value={'S'}onChange={toggleSize} >S</div>
                      <div className='w-[25px] h-[25px] flex items-center justify-center font1 text-[12px] md:w-[38px] md:h-[39px] border border-gray-400 font-semibold' value={'M'}onChange={toggleSize}>M</div>
                      <div className='w-[25px] h-[25px] flex items-center justify-center font1 text-[12px] md:w-[38px] md:h-[39px] border border-gray-400 font-semibold' value={'L'}onChange={toggleSize}>L</div>
                      <div className='w-[25px] h-[25px] flex items-center justify-center font1 text-[12px] md:w-[38px] md:h-[39px] border border-gray-400 font-semibold' value={'XL'}onChange={toggleSize}>XL</div>  
                    </div>  
                    <div className='border-t-2 border-dotted border-gray-300 mt-5 '>    
                      <button onClick={() => togglesection("availability")} className={`font1 text-[14px] font-medium flex justify-between items-center py-3 w-full border-none text-sm `}>  
                        <span>Availability</span>  
                        <img className={`transform transition-transform duration-200 w-[8px] rotate-90 h-[10px] filter brightness-10 ${openSection ==="availability" ? "rotate-270" : ""}`} src={assets.dropdown_icon} alt="" />  
                      </button>  
                      {openSection === "availability" && (
                        <div className='py-2 flex flex-col gap-2'>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px]'/>   
                              <span className='text-[12px] tracking-wide font1 font-normal'>Availability</span>   
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>    
                              <span className='text-[12px] tracking-wide font1 font-normal'>Out of stock</span>
                            </label>
                        </div>
                      )}
                    </div>
                    <div className='border-t-2 border-dotted border-gray-300 mt-1 '>
                      <button onClick={() => togglesection("category")} className={`font1 text-[14px] font-medium flex justify-between items-center py-3 w-full border-none text-sm `}>  
                        <span>Category</span>
                        <img className={`transform transition-transform duration-200 w-[8px] rotate-90 h-[10px] filter brightness-10 ${openSection ==="category" ? "rotate-270" : ""}`} src={assets.dropdown_icon} alt="" />  
                      </button>  
                      {openSection === "category" && (
                        <div className='py-2 flex flex-col gap-2'>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px]'/>  
                              <span className='text-[12px] tracking-wide font1 font-normal'>Men</span>   
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>   
                              <span className='text-[12px] tracking-wide font1 font-normal'>Women</span>
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>   
                              <span className='text-[12px] tracking-wide font1 font-normal'>Kids</span> 
                            </label>
                        </div>
                      )}
                    </div>  
                    <div className='border-t-2 border-dotted border-gray-300 mt-1 '>
                      <button onClick={() => togglesection("color")} className={`font1 text-[14px] font-medium flex justify-between items-center py-3 w-full border-none text-sm `}>  
                        <span>Colors</span>
                        <img className={`transform transition-transform duration-200 w-[8px] rotate-90 h-[10px] filter brightness-10 ${openSection ==="color" ? "rotate-270" : ""}`} src={assets.dropdown_icon} alt="" />  
                      </button>  
                      {openSection === "color" && (
                        <div className='py-2 flex flex-col gap-2'>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px]'/>  
                              <span className='text-[12px] tracking-wide font1 font-normal'>Black</span>    
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>   
                              <span className='text-[12px] tracking-wide font1 font-normal'>White</span>
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>     
                              <span className='text-[12px] tracking-wide font1 font-normal'>Gray</span>  
                            </label>
                        </div>
                      )}
                    </div> 
                    <div className='border-t-2 border-dotted border-gray-300 mt-1 '>
                      <button onClick={() => togglesection("price")} className={`font1 text-[14px] font-medium flex justify-between items-center py-3 w-full border-none text-sm `}>  
                        <span>Price Range</span>
                        <img className={`transform transition-transform duration-200 w-[8px] rotate-90 h-[10px] filter brightness-10 ${openSection ==="price" ? "rotate-270" : ""}`} src={assets.dropdown_icon} alt="" />  
                      </button>  
                      {openSection === "price" && (
                        <div className='py-2 flex flex-col gap-2'>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px]'/>  
                              <span className='text-[12px] tracking-wide font1 font-normal'>100 and below</span> 
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>     
                              <span className='text-[12px] tracking-wide font1 font-normal'>200 and below</span>
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>     
                              <span className='text-[12px] tracking-wide font1 font-normal'>300 and below</span>
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>     
                              <span className='text-[12px] tracking-wide font1 font-normal'>more than 300</span>  
                            </label>
                        </div>
                      )}
                    </div> 
                    <div className='border-t-2 border-dotted border-gray-300 mt-1 '>
                      <button onClick={() => togglesection("collections")} className={`font1 text-[14px] font-medium flex justify-between items-center py-3 w-full border-none text-sm `}>  
                        <span>Collection</span>
                        <img className={`transform transition-transform duration-200 w-[8px] rotate-90 h-[10px] filter brightness-10 ${openSection ==="collections" ? "rotate-270" : ""}`} src={assets.dropdown_icon} alt="" />  
                      </button>  
                      {openSection === "collections" && (
                        <div className='py-2 flex flex-col gap-2'>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px]'/>  
                              <span className='text-[12px] tracking-wide font1 font-normal'>top Wear</span>   
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>   
                              <span className='text-[12px] tracking-wide font1 font-normal'>Bottom Wear</span>
                            </label>
                            <label className='flex items-center gap-2 text-sm'>
                              <input type="checkbox" className='w-[20px] h-[21px] border-gray-300 border-1 '/>   
                              <span className='text-[12px] tracking-wide font1 font-normal'>Winter Wear</span>  
                            </label>
                        </div>
                      )}
                    </div> 
                   </div>
                </div>   
            </div >
            
           <div className={`flex flex-col w-[100%] mt-3 ${showFilter ? 'mt-12' : ''}`}>
              <div className='hidden md:flex  flex-col items-center md:items-start w-[330px] sm:w-[357px] md:w-[367px] justify-center   mx-auto  '> 
                <div className='flex  w-1/2 items-center justify-center md:justify-start'>
                    <span className='text-gray-400 text-[12px] pr-[1px]'>Home </span> 
                    <span className='text-gray-800 text-[12px] pl-[1px]'>/ Products</span>         
                </div>
                <h1 className='font1 text-5 font-black'>PRODUCTS</h1>
                <div className='bg-[#D9D9D9] text-center inline-flex items-center w-full    px-5 my-5  h-[40px] '>   
                  <img className='w-4' src={assets.group4} alt="" placeholder='Search' />  
                  <input type=" text" className='flex-1 outline-none bg-inherit text-sm' />           
                </div>
              </div>
              <div className='grid grid-cols-3 grid-rows-2 gap-x-1 gap-y-2   shrink-0 overflow-x-hidden h-[84px] '>   
                  <div className='py-2 px-6 border-1 border-gray-400 flex items-center justify-self-center w-[101px]  h-[38px]'>Topwear</div>
                  <div className='py-2 px-1 border-1 border-gray-400 flex items-center justify-self-center w-[101px] shrink-0 h-[38px]'>Bottomwear</div>
                  <div className='py-2 px-6 border-1 border-gray-400 flex items-center justify-self-center w-[101px] shrink-0 h-[38px]'>Shirts</div>
                  <div className='py-2 px-6 border-1 border-gray-400 flex items-center justify-self-center w-[101px] shrink-0 h-[38px]'>Jeans</div>
                  <div className='py-2 px-3 border-1 border-gray-400 flex items-center justify-self-center w-[101px] shrink-0 h-[38px]'>Bestsellers</div>
                  <div className='py-2 px-2 border-1 border-gray-400 flex items-center justify-self-center w-[101px] shrink-0 h-[38px]'>winterwear</div>     
              </div>
           </div>
            <div className='flex flex-wrap pt-4 gap-x-2 gap-y-4'>
                {
                  filterProducts.map((item, i) => (
                    <ProductItem key={i} name={item.name} id={item._id} image={item.image} price={item.price} />
                  ))
                }
            </div>
           </div>
          </div>
      

    </div>  
  )    
}

export default Collection 