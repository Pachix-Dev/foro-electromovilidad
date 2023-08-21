const QRCode = require('qrcode')
const emailLayout = async (formData, qrcode) => {
  const qrCodeUrl = `https://hfmexico.mx/foro-electromovilidad/verify-code-foro/${qrcode}`
  const qrCodeImage = await QRCode.toDataURL(qrCodeUrl)

  return (
 `<table align="center" width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0" style="max-width: 680px; width: 100%; margin: 0px auto; background-color: rgb(255, 255, 255);">
  <tbody>
    <tr style="width: 100%;">
      <td>
        <table align="center" width="70%" role="presentation" cellspacing="0" cellpadding="0" border="0">
          <tbody>
            <tr>
              <td>
                <div style="background: black;color: white;border-radius: 20px;">
                  <div style="background: radial-gradient(75.53% 100.65% at 50% 145.96%,rgba(83, 71, 255, 0.5),rgba(87,205,255,0) 100%);padding: 20px;">                   
                    <img src="https://hfmexico.mx/foro-electromovilidad/igecoLogo.webp" alt="logo" style="width: 300px;">                 
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td>
                            <img src="https://hfmexico.mx/foro-electromovilidad/user-circle.png" alt="user-circle" style="width: 50px;">
                          </td>
                          <td width="100%">
                            <p style="margin:0">
                              ${formData.nombre}<br>
                              ${formData.empresa}
                            </p>                    
                          </td>
                          <td>
                            <img src="${qrCodeImage}" alt="qrCode" style="width: 80px;">
                          </td>
                        <tr>
                      <tbody>                     
                    </table>
                    <div  style="text-align: center;">
                      <h2 style="margin:0;">¡Foro Electromovilidad!</h2>
                      6 de octubre de 2023 7:00 am - 8:00 pm
                    </div>
                  </div>
                </div>
              </td>              
            </tr>
          </tbody>
        </table>
        <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="padding: 30px 30px 40px;">
          <tbody>
            <tr>
              <td>
                <h1 style="margin: 0px 0px 15px; font-weight: bold; font-size: 21px; line-height: 21px; color: rgb(12, 13, 14);">¡Estás registrado en Foro Electromovilidad!</h1>
                <p style="font-size: 15px; line-height: 21px; margin: 16px 0px; color: rgb(60, 63, 68);">Estamos muy emocionados de que hayas decidido unirte a nosotros.<br><br>
                  Aquí algunos detalles importantes:
                </p>
                <ul>
                  <li>
                    Foro Electromovilidad se lanzará el 6 de octubre a las 7 a. m.
                  </li>
                  <li>
                    Puede acceder al evento en Poliforum León, Guanajuato México.
                  </li>
                </ul>
                <hr style="width: 100%; border-top: 1px solid rgb(214, 216, 219); border-right: none rgb(214, 216, 219); border-bottom: none rgb(214, 216, 219); border-left: none rgb(214, 216, 219); border-image: initial; margin: 30px 0px;">
                <p style="font-size: 12px; line-height: 15px; margin: 4px 0px; color: rgb(145, 153, 161);">
                  <strong>IGECO</strong>, Blvrd Francisco Villa 102-piso 14, Oriental, 37510 León, Guanajuato México.
                </p>                              
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>`
  )
}

module.exports = emailLayout
