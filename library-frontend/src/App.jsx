import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import AllBooksPage from './pages/AllBooksPage'
import CreateBookPage from './pages/CreateBookPage'
import Navbar from './pages/Navbar'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'

function App() {


  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path='/books' element={<AllBooksPage/>}/>
      <Route path='/books/create' element={<CreateBookPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>



     </Routes>
    </>
  )
}

export default App
