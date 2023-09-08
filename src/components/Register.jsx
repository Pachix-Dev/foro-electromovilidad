import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Suspense, lazy, useRef, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { estados } from '../constans'
import { speakers } from '../constans_speakers'
import { DetailSpeaker } from './DetailSpeaker'
import { Program } from './Program'
import { Menu } from './Menu'

const ReCAPTCHA = lazy(() => import('react-google-recaptcha'))

export function Register () {
  const captchaRef = useRef()
  const [captcha, setCaptcha] = useState(false)
  const [message, setMessage] = useState()
  const [sendStatus, setSendStatus] = useState(false)
  const navigate = useNavigate()

  const [estadoSeleccionado, setEstadoSeleccionado] = useState('')
  const [municipioSeleccionado, setMunicipioSeleccionado] = useState('')
  const [modalShow, setModalShow] = useState(false)
  const [detailSpeaker, setDetailSpeaker] = useState({})

  const handleModal2 = (speaker) => {
    setDetailSpeaker(speaker)
    setModalShow(true)
  }
  const handleEstadoChange = (event) => {
    const estado = event.target.value
    setEstadoSeleccionado(estado)
    setMunicipioSeleccionado('')
  }

  const handleMunicipioChange = (event) => {
    setMunicipioSeleccionado(event.target.value)
  }

  const municipios = estadoSeleccionado ? estados[estadoSeleccionado] : []

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

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, formData, qrcode })
      }
      const requestOptions2 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ formData, qrcode })
      }
      try {
        setSendStatus(true)
        const res = await fetch(
          'https://hfmexico.mx/foro-electromovilidad/backend/register.php',
          requestOptions
        )
        const data = await res.json()
        if (data === '23000') {
          setSendStatus(false)
          setMessage('Ya te encuentras registrado, por favor revisa tu correo.')
        } else if (data.status) {
          const statusEmail = await fetch('https://hfmexico.mx/foro-electromovilidad/backend/email/send-email', requestOptions2)
          const dataEmail = await statusEmail.json()
          navigate('/registro-gratis', { state: { qrcode, formData, dataEmail } })
        } else {
          setSendStatus(false)
          setMessage('Lo sentimos no pudimos comprobar que no eres un robot...')
        }
      } catch (error) {
        console.log(error)
        setSendStatus(false)
        setMessage('Lo sentimos en este momento no es posible enviar tu información...')
      }
      document.getElementById('form-newsletter').reset()
    }
  }
  return (
    <>
      <Menu />
      <div className='pb-5'>
        <video className='bg-electromovilidad' autoPlay muted loop src='/foro-electromovilidad/bgElectromovilidad.webm' />
        <Container className='pt-5 mb-3 electromovilidad-text'>
          <center><h1 className='fw-bold pb-4'>Foro de Electromovilidad 2023</h1></center>
          <Row>
            <Col className='py-4'>
              <h2 className='mt-1'>¡Sé parte del foro más importante de la industria en Guanajuato!</h2>
            </Col>
          </Row>
          <Row>
            <Col className=''>
              <div className='foro-date'>
                <div>
                  <p className='border-end'>06<br />
                    <small>Octubre</small>
                  </p>
                </div>
                <div>
                  <p className='border-end'>09:00 - 15:30<br /><small>HRS</small></p>
                </div>
                <div>
                  <p>POLIFORUM<br /><small>LEÓN</small></p>
                </div>
              </div>
            </Col>
          </Row>
          <p className='foro-frase mt-4'>¡Descubre el camino hacia una movilidad más inteligente y sostenible en nuestro Foro de Electromovilidad!<br /><br />
            Explorar las últimas tendencias e innovaciones en vehículos eléctricos, conoce expertos en la industria y descubre las claves de la infraestructura de carga del futuro.<br /><br />
            Regístrate ahora y sé parte del cambio hacia un futuro de movilidad eléctrica.
          </p><br />
          <Button className='boton-registro' href='#registro' variant='danger'>REGISTRATE GRATIS</Button>
        </Container>
      </div>
      <Container className='mt-5'>
        <h2>Temas segmentos de enfoque</h2>
        <ul>
          <li>
            Tipos de transporte eléctrico
          </li>
          <li>
            Nuevas plantas de ensamble de autos eléctricos y la conversión de las plantas de combustión
            interna.
          </li>
          <li>
            Infraestructura de carga, generación y almacenamiento.
          </li>
          <li>
            Baterías
          </li>
          <li>
            Políticas gubernamentales y compromisos contraídos internacionalmente.
          </li>
          <li>
            Principales productores de semiconductores, y entorno mundial.
          </li>
        </ul>
        <Program />
        <h1 id='ponentes' className='mt-5 text-light'>Ponentes</h1>
        <p className='text-light' />
        <div className='mt-5 pb-5 program-wrapper-speakers'>
          {speakers.map((speaker, index) => (
            <button key={index} onClick={() => handleModal2(speaker)}>
              <div className='speaker-item h-100'>
                <img src={speaker.avatar} width={300} height={300} alt={speaker.name} />
                <div className='info_speakers'>
                  <h2>{speaker.name}</h2>
                  <p className='m-0'>{speaker.rol}</p>
                  <small>{speaker.company}</small>
                </div>
              </div>
            </button>
          ))}
          <div />
        </div>
        <DetailSpeaker
          show={modalShow}
          onHide={() => setModalShow(false)}
          speaker={detailSpeaker}
        />
        <h1 id='registro' className='mt-5 text-light'>Registro</h1>
        <Form className='mt-5' id='form-newsletter' onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className='mb-3' controlId='formId'>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type='text' name='nombre' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name='email' required />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formTel'>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type='number' name='telefono' required />
              </Form.Group>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Form.Group className='mb-3' controlId='formEmpresa'>
                    <Form.Label>Empresa</Form.Label>
                    <Form.Control type='text' name='empresa' required />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className='mb-3' controlId='formCargo'>
                    <Form.Label>Cargo</Form.Label>
                    <Form.Control type='text' name='cargo' required />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className='mb-3' controlId='formEstado'>
                <Form.Label>Selecciona un estado:</Form.Label>
                <Form.Select
                  onChange={handleEstadoChange}
                  value={estadoSeleccionado}
                  name='estado'
                  required
                >
                  <option value=''>-- Selecciona --</option>
                  {Object.keys(estados).map((estado) => (
                    <option key={estado} value={estado}>
                      {estado}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formMunicipio'>
                <Form.Label>Municipio</Form.Label>
                {estadoSeleccionado && (
                  <>
                    <Form.Label>Selecciona un municipio:</Form.Label>
                    <Form.Select
                      onChange={handleMunicipioChange}
                      value={municipioSeleccionado}
                      name='municipio'
                      required
                    >
                      <option value=''>-- Selecciona --</option>
                      {municipios.map((municipio, index) => (
                        <option key={index} value={municipio}>
                          {municipio}
                        </option>
                      ))}
                    </Form.Select>
                  </>
                )}
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
          {captcha ? '' : <div className='fw-bold' style={{ color: 'red' }}>{message}</div>}
          <Button variant='light' type='submit' className='mt-3 fw-bold'>
            {sendStatus
              ? <><Spinner as='span' animation='border' size='sm' role='status' aria-hidden='true' /><span> Loading...</span></>
              : 'Obtén pase gratis'}
          </Button>
        </Form>
      </Container>

    </>
  )
}
