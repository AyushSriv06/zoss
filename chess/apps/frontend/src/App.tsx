import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Landing } from './screens/Landing'
import { Game } from './screens/Game'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-900">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
