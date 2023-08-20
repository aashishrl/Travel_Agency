import React from 'react'
import './assets/style.scss'
import {Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Nav from './Components/Nav'
import ActDetail from './Pages/ActDetail'
import Blog from './Pages/Blog'
import Training from './Pages/Training'
import TrekkingRegion from './Pages/TrekkingRegion'; 
import Book from './Pages/Book'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header/>
      <Nav/>     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/activity/:id" element={<ActDetail/>}/>
        <Route path='/trekking/:name'element={<TrekkingRegion/>}/>
        <Route path='/book' element={<Book/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
