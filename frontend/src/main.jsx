import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/Home/Home'
import Pokedex from './Page/Pokedex/Pokedex'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  </BrowserRouter>
)
