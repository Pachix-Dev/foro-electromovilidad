import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export function Verify () {
  const { qrcode } = useParams()
  console.log(qrcode)
  return (
    <>
      <Container className='pt-5 mb-3'>
        <h1>Verify</h1>
      </Container>
    </>
  )
}
