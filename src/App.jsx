import { Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import './App.css'
import { Pass } from './components/Pass'

export function App () {
  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/registro-gratis' element={<Pass />} />
    </Routes>
  )
}
