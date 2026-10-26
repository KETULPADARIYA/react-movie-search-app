// import { useState } from 'react'
import './css/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from './contexts/Moviecontext';

function App() {

  // const MovieNumber:number =0;

  return (
    <>
    <MovieProvider>  
      <NavBar/> 
    <Routes>
      <Route path = '/' element= {<Home/>}></Route>
      <Route path = '/favourites' element= {<Favorites/>}></Route>
    </Routes>
    </MovieProvider>

    </>
    
  )
}

export default App
