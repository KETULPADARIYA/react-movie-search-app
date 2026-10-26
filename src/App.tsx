// import { useState } from 'react'
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {

  // const MovieNumber:number =0;

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path = '/' element= {<Home/>}></Route>
      <Route path = '/favourites' element= {<Favorites/>}></Route>
    </Routes>
    </>
    
  )
}

export default App
