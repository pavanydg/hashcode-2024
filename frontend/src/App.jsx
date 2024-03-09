import { Component, useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Dashboard from './pages/Dashboard'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import Signupsupa from './pages/Signupsupa'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/signup' element={<Signup/>}/> 
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

