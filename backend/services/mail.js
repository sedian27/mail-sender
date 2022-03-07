import nodemailer from "nodemailer";
import emailConfig from "../config/email.js";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: emailConfig.USER,
    pass: emailConfig.PASS,
  },
});

const sendMail = (destinationMail) => {
  let options = {
    from: "notificacionesciunac@gmail.com",
    to: destinationMail,
    subject: "ColpeDev - Welcome",
    html: `
    <h1>Bienvenido a ColpeDev</h1>
    <p>
      Gracias por registrarte en ColpeDev, ahora puedes acceder a todas las
      funcionalidades de nuestra plataforma.
    </p>

    <p>
      <strong>
        <a href="http://localhost:4200/">Ingresa a ColpeDev</a>
      </strong>
    </p>
    `,
  };

  transporter.sendMail(options, (err, info) => {
    return !!err;
  });
};

export default { sendMail };
