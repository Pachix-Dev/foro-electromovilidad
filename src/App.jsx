import { Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import './App.css'
import { Pass } from './components/Pass'
import { Container } from 'react-bootstrap'
import { Verify } from './components/Verify'

export function App () {
  return (
    <>
      <div className='foro-electromovilidad'>
        <div className='wrapper-main-foro  pt-5 pb-5'>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/registro-gratis' element={<Pass />} />
            <Route path='/verify/:qrcode' element={<Verify />} />
          </Routes>
        </div>
      </div>
      <footer className=''>
        <Container>
          <div className='d-inline-block text-center'>
            <img src='/igecoLogo.webp' alt='igeco' width={300} />
            <img src='/GTO 200 WT.webp' alt='gto-200años' width={130} />
          </div>
        </Container>
      </footer>
    </>
  )
}
