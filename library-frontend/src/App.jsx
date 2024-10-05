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
import IsPrivate from './components/IsPrivate'
import IsAnon from './components/IsAnon'
function App() {


  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path='/books' element={<IsPrivate><AllBooksPage/></IsPrivate>}/>
      <Route path='/books/create' element={<IsPrivate><CreateBookPage/></IsPrivate>}/>
      <Route path='/signup' element={<IsAnon><SignupPage/></IsAnon>}/>
      <Route path='/login' element={<IsAnon><LoginPage/></IsAnon>}/>



     </Routes>
    </>
  )
}

export default App
