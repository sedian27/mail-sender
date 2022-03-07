import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "notificacionesciunac@gmail.com",
    pass: "Notificaciones123@",
  },
});

const sendMail = (destinationMail) => {
  let options = {
    from: "notificacionesciunac@gmail.com",
    to: destinationMail,
    subject: "ColpeDev - Welcome",
    text: `
    <h1>Bienvenido a ColpeDev</h1>
    <p>
      Gracias por registrarte en ColpeDev, ahora puedes acceder a todas las
      funcionalidades de nuestra plataforma.
    </p>

    <p>
      <strong>
        <a href="http://localhost:3000/login">Ingresa a ColpeDev</a>
      </strong>
    </p>
    `,
  };

  transporter.sendMail(options, (err, info) => {
    return !!err;
  });
};

export default { sendMail };
