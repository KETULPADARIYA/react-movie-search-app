import { StrictMode } from 'react'
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'
import {createRoot} from 'react-dom/client' 
import App from './App.tsx'

// BrowserRouter connects the app to the browser's URL
// it allows the app to navigate between different pages without reloading the page

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
