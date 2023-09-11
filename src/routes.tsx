import React, { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Conta } from './pages/Conta'

export const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/conta/:id' element={isLoggedIn ? <Conta /> : <Home />} />
    </Routes>
  )
}
