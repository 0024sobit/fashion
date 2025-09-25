import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Placeorder from './Pages/Placeorder'     
import New from './Pages/New'
import { ToastContainer, toast } from 'react-toastify';   

const App = () => {      
  return (
    <div className='min-h-screen bg-texture px-4 sm:px-5 md:px-5 lg:px-9'> 
        <ToastContainer />
        <Routes>      
          <Route path='/' element={<Home />} />    
          <Route path='/collection' element={<Collection />} />     
          <Route path='/cart' element={<Cart />} />    
          <Route path='/product/:productId' element={<Product />} />         
          <Route path='/place-order' element={<Placeorder />} />     
          <Route path='/new' element={<New />} />   
        </Routes>
       
    </div> 
  )
}
  
export default App   
