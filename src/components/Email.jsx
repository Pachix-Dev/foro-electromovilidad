import * as React from 'react'
import { Button } from '@react-email/button'
import { Html } from '@react-email/html'

export function Email (props) {
  const { url } = props

  return (
    <Html lang='en'>
      <Button href={url}>Click me</Button>
    </Html>
  )
}
