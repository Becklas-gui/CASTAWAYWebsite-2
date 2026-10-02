import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Pedido from './pages/Pedido'
import Sobre from './pages/Sobre'
import './App.css'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/Pedido"
          element={<Pedido />}
        />

        <Route
          path="/Sobre"
          element={<Sobre />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App