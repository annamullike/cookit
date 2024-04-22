import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import './App.css'
import Navbar from './Navbar/Navbar'
import MyFridge from './MyFridge/MyFridge';
import CookPage from './Cook/CookPage';
import FavoriteRecipes from './FavoriteRecipes/FavoriteRecipes';
import HomePage from './HomePage/HomePage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1><HomePage/></h1>}/>
      <Route path="/cook" element={<h1><CookPage/></h1>}/>
      <Route path="/fridge" element={<MyFridge/>}/>
      <Route path="/favorites" element={<FavoriteRecipes/>}/>
      
    </Routes>
  )
}

export default App
