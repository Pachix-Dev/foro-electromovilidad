require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const nodemailer = require('nodemailer')
const emailLayout = require('./templateEmail/emailLayout')

app.use(cors())
app.use(express.json())

app.post('/send-email', async (req, res) => {
  const { qrcode, formData } = req.body
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOSTNAME,
      port: process.env.PORT_GMAIL,
      secure: true,
      auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL
      }
    })

    const emailContent = await emailLayout(formData, qrcode)
    const mailOptions = {
      from: process.env.USER_GMAIL,
      to: formData.email,
      subject: 'Welcome to Our App',
      attachDataUrls: true,
      html: emailContent
    }
    const sendStatus = await transporter.sendMail(mailOptions)
    console.log(sendStatus)
    res.status(200).json({ message: 'Welcome email sent successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error sending welcome email' })
  }
})

const PORT = process.env.PORT || 3003
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
