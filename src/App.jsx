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
        <div className='wrapper-main-foro pb-5'>
          <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/registro-gratis' element={<Pass />} />
            <Route path='/verify/:qr' element={<Verify />} />
          </Routes>
        </div>
      </div>
      <footer className=''>
        <Container>
          <div className='d-inline-block text-center'>
            <img src='/foro-electromovilidad/igecoLogo.webp' alt='igeco' width={300} />
            <img src='/foro-electromovilidad/GTO 200 WT.webp' alt='gto-200años' width={130} />
          </div>
        </Container>
      </footer>
    </>
  )
}
