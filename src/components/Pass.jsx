import { Container } from 'react-bootstrap'
import QRCode from 'react-qr-code'
import { useLocation } from 'react-router-dom'

export function Pass () {
  const location = useLocation()
  console.log(location)
  return (
    <Container>
      <h1>You're in! Now make it yours.</h1>
      Generate a unique ticket with your GitHub profile.
      <div className='w-50'>
        <QRCode
          size={256}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={'https:///igeco.mx/foro-electromovilidad/backend/verify/' + location.state.qrcode}
          viewBox='0 0 256 256'
        />
      </div>
    </Container>
  )
}
