import React from 'react';
import {Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home.jsx";
import AllFoods from "../pages/AllFoods.jsx";
import FoodDetails from "../pages/FoodDetails.jsx";
import Cart from '../pages/Cart.jsx';
import Checkout from '../pages/Checkout.jsx';
import Contact from "../pages/Contact.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

const Router = () => {
  return <Routes>
      <Route path='/' element={<Navigate to='/Home'/>} />
      <Route path='Home' element={<Home/>}/>
      <Route path='foods' element={<AllFoods/>}/>
      <Route path='foods/:id' element={<FoodDetails/>}/>
      <Route path='Cart' element={<Cart/>}/>
      <Route path='checkout' element={<Checkout/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
      <Route path='contact' element={<Contact/>}/>
  </Routes>
}

export default Router;