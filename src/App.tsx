// import { useState } from 'react'
import './App.css'
import MovieCard from "./components/MovieCard.tsx"

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

const movie = {
  id: '1',
  title: 'The Dark Knight',
  url:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug',
  release_date: '2008-07-18',
}

function App() {

  return (
    <>
    <MovieCard movie={movie} />
    <Text text="Hello "/>
    <Text text="Whats app"/>
    </>
    
  )
}

export default App
