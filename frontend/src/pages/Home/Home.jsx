import React from 'react'
import Header from '../../components/Header/Header'
import { Search } from '../../components/Search/Search'
import { Categories } from '../../components/Categories/Categories'
import '../Home/Home.css'

const Home = () => {
  return (
    <>
    <Header/>
    <Search/>
    <Categories/>
    
    </>
  )
}

export default Home