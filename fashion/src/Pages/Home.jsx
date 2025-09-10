import React from 'react'
import Navbar from '../components/Navbar' 
import CategoryMenu from '../components/CategoryMenu'          
import NewCollections from '../components/NewCollections'
import Collections from '../components/Collections'
import Fashion from '../components/Fashion'

const Home = () => {
  return (
    <div>
        <Navbar />
        <CategoryMenu />
        <NewCollections />
        <Collections />
        <Fashion />
    </div>
  )
}

export default Home
 