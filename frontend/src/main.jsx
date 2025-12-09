import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Page/Home/Home'
import Pokedex from './Page/Pokedex/Pokedex'
import News from './Page/News/News'
import Games from './Page/Games/Games'
import Pokemon from './Page/Pokemon/pokemon'
import Game from './Page/Games/GameDetail/Game'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="/games" element={<Games />} />
      <Route path="/news" element={<News />} />
      <Route path="/pokemon/:id" element={<Pokemon />} />
      <Route path="game/:id" element={<Game />} />
    </Routes>
  </BrowserRouter>
)
