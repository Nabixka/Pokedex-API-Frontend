import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/Home/Home'
import Pokedex from './Page/Pokedex/Pokedex'
import News from './Page/News/News'
import Games from './Page/Games/Games'
import Pokemon from './Page/Pokemon/pokemon'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/games" element={<Games />} />
      <Route path="/news" element={<News />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
    </Routes>
  </BrowserRouter>
)
