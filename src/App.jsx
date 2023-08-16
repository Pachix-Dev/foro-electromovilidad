import { Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import './App.css'
import { Pass } from './components/Pass'
import { Container } from 'react-bootstrap'

export function App () {
  return (
    <div className='foro-electromovilidad'>
      <div className='wrapper-main-foro'>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/registro-gratis' element={<Pass />} />
          <Route path='/verify' element={<Pass />} />
        </Routes>
        <Container>
          <div className='d-inline-block'>
            <img src='/igecoLogo.webp' alt='igeco' width={300} />
            <img src='/GTO 200 WT.webp' alt='gto-200años' width={130} />
          </div>
        </Container>
      </div>
    </div>
  )
}
