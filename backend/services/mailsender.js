// Send an Email
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "politasiesa@gmail.com",
    pass: "EquipoZarcoSIESA",
  },
});

let mailOptions = {
  host: "mail.mhdeploy.com",
  port: 2525,
  from: "politasiesa@gmail.com",
  to: "diestrasergio@gmail.com",
  subject: "Sending Email using Node.js",
  text: "Hello world",
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
