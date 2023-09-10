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
      <footer>
        <Container>
          <div class='d-flex bd-highlight mb-4'>
            <div class=' bd-highlight' style={{ width: '200px' }}><img src='/foro-electromovilidad/igeco_bn.webp' alt='igeco' className='w-100' /></div>
            <div class=' bd-highlight' style={{ width: '200px' }}><img src='/foro-electromovilidad/deutsche_messe_bn.webp' alt='igeco' className='w-100' /></div>
            <div class=' ms-auto' style={{ width: '200px' }}><img src='/foro-electromovilidad/logo-gto.webp' alt='gto-200años' className='w-100' /></div>
          </div>
        </Container>
      </footer>
    </>
  )
}
