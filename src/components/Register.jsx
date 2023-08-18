import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Suspense, lazy, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

import { Email } from './Email'
import { render } from '@react-email/render'

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

export function Register () {
  const captchaRef = useRef()
  const [captcha, setCaptcha] = useState(false)
  const [message, setMessage] = useState()
  const navigate = useNavigate()

  const onChange = () => {
    setCaptcha(true)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (captcha === false) {
      event.stopPropagation()
      setMessage('Please verify you are not bot.')
    } else {
      const token = captchaRef.current.getValue()
      captchaRef.current.reset()
      setCaptcha(false)
      const qrcode = uuidv4()
      const formData = Object.fromEntries(new window.FormData(event.target))

      navigate('/registro-gratis', { state: { qrcode, formData } })
      /*
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, formData, qrcode })
      }
      try {
        const res = await fetch(
          'https://igeco.mx/foro-electromovilidad/backend/register.php',
          requestOptions
        )
        const data = await res.json()
        if (data.status) {
          setMessage('Message send successfully!!')
        } else {
          setMessage('Sorry we couldn\'t verify you are not robot try again...')
        }
      } catch (error) {
        console.log(error)
      } */
      document.getElementById('form-newsletter').reset()
    }
  }
  return (
    <>
      <Container className='pt-5 mb-3'>
        <h1 className='fw-bold'>
          Foro de <br />Electromovilidad 2023
        </h1>
        <Row>
          <Col>
            <p className='foro-frase mt-3'>¡Sé parte del foro más<br /> importante de la industria en<br /> Guanajuato!</p>
          </Col>
          <Col className='my-auto'>
            <div className='foro-date'>
              <div>
                <p className='border-end'>06<br />
                  <small>Octubre</small>
                </p>

              </div>
              <div>
                <p className='border-end'>9:00<br />
                  <small>AM</small>
                </p>

              </div>
              <div>
                <p>POLIFORUM<br />
                  <small>LEÓN</small>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <Form className='mt-5' id='form-newsletter' onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' name='nombre' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' required />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className='mb-3' controlId='formBasiSubject'>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type='number' name='telefono' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Empresa</Form.Label>
                <Form.Control type='text' name='empresa' required />
              </Form.Group>

            </Col>
          </Row>
          <Suspense fallback={<div>Loading reCAPTCHA...</div>}>
            <ReCAPTCHA
              sitekey='6LeljqwnAAAAAHcToBhu6iq8o4kahL9sopQjC1A3'
              ref={captchaRef}
              onChange={onChange}
            />
          </Suspense>
          {captcha ? '' : <div style={{ color: '#dc3545' }}>{message}</div>}
          <Button variant='light' type='submit' className='mt-3 fw-bold'>
            Obtén pase gratis
          </Button>
        </Form>
      </Container>

    </>
  )
}
