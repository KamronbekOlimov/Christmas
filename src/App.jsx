import { useState } from 'react'
import './App.css'
import Celebrate from './pages/celebrate/Celebrate'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Gift from './pages/gift/Gift'
import New from './pages/new/New'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/celebrate' element={<Celebrate/>}/>
      <Route path='/gift' element={<Gift/>}/>
      <Route path='/new' element={<New/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}
export default App