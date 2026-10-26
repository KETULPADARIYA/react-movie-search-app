// import { useState } from 'react'
import './App.css'
import Home from './pages/Home'

type TextProps = {
  text: string;
}

function Text({ text }: TextProps) {
  return (
    <div id="text">
      <h1>{text}</h1>
    </div>
  )
}


function App() {

  // const MovieNumber:number =0;

  return (
    <>
    <Home />
    <Text text="Hello "/>
    <Text text="Whats app"/>
    </>
    
  )
}

export default App
