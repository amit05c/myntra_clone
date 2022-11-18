import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import ProductDetails from './ProductDetails'
import Men from './Men'
import Signup from './Signup'
import Cart from "./Cart"
import Women from './Women'
import Checkout from './Checkout'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/checkout' element={<Checkout />}/>

    </Routes>
  )
}

export default Allroutes