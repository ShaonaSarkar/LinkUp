import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profilepage from './pages/Profilepage'
import Login from './pages/Login'

const App = () => {
  return (
    <div className = "bg-[url('./src/assets/bgImage.svg')] bg-contain">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/ProfilePage' element={<Profilepage/>}/>
      </Routes>
    </div>
  )
}

export default App