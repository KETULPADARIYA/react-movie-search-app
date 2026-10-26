// import { useState } from 'react'
import './App.css'

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

  return (
    <>
    <Text text="Hello "/>
    <Text text="Whats app"/>
    </>
    
  )
}

export default App
