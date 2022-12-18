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
import ReqAuth from '../ReqAuth/ReqAuth'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/cart' element={<ReqAuth><Cart /></ReqAuth> }/>
        <Route path='/checkout' element={<ReqAuth><Checkout /></ReqAuth> }/>
        <Route path='*' element={<div style={{padding:"200px"}}>This page does not exist :((</div>} />

    </Routes>
  )
}

export default Allroutes