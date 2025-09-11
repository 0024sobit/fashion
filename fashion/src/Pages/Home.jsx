import React from 'react'
import Navbar from '../components/Navbar' 
import CategoryMenu from '../components/CategoryMenu'          
import NewCollections from '../components/NewCollections' 
import Collections from '../components/Collections'
import Fashion from '../components/Fashion'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <NewCollections />
        <Collections />
        <Fashion />
        <Footer /> 
    </div>
  )
}

export default Home
 