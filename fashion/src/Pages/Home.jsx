import React from 'react'
import Navbar from '../components/Navbar' 
import CategoryMenu from '../components/CategoryMenu'          
import NewCollections from '../components/NewCollections'
import Collections from '../components/Collections'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <NewCollections />
        <Collections />
    </div>
  )
}

export default Home
 