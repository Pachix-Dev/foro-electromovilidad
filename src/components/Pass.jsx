import { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import QRCode from 'react-qr-code'
import { useLocation } from 'react-router-dom'
import { useMouseMove } from '../hooks/useMouseMove'

export function Pass () {
  const location = useLocation()
  const { positionMinipoint } = useMouseMove()
  const { width, height } = document.body.getBoundingClientRect()
  const halfwidth = width / 2
  const halfheight = height / 2
  const rotateX = ((positionMinipoint.x - halfwidth) / halfwidth) * 18
  const rotateY = ((positionMinipoint.y - halfheight) / halfheight) * 18

  useEffect(() => {
    if (!location.state) {
      window.location.href = '/'
    }
  }, [location])
  return (
    <div className=''>
      {location?.state?.qrcode &&
        <Container className='pt-5'>
          <Row className='pt-5'>
            <Col>
              <h1>Ya estas dentro!<br /> Ahora hazlo realidad.</h1><br />
              <smal>Te enviamos tu pase por correo electronico no olvides revisar tu buzon de spam si no lo encuentras en tu bandeja de entrada.</smal>
            </Col>
            <Col md={6}>
              <div
                className='w-100 Ticket'
                style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
              >
                <div className='bg-ticket'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <p>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6' width={50}>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' />
                      </svg> Fabian Yapura Claros
                    </p>
                    <QRCode
                      size={256}
                      style={{ height: 'auto', width: '80' }}
                      value={'https:///igeco.mx/foro-electromovilidad/verify/' + location?.state?.qrcode}
                      viewBox='0 0 256 256'
                    />
                  </div>
                  <div className='text-center'>
                    <h2>Foro Electromovilidad 2023</h2>
                    6 de octubre de 2023 7:00 am - 8:00 pm<br />
                    <img src='/igecoLogo.webp' alt='igeco' width={300} />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>}
    </div>
  )
}
