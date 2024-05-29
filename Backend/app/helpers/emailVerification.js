const nodemailer = require('nodemailer')
const Email = (options) => {
  let transpoter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "newhome12123@gmail.com",
      pass: "foisxmzrczfbofrl",
    },
  });
  transpoter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// send email
const EmailSender = (from, to, subject, message) => {
  console.log(message)
  const options = {
    from: from,
    to: to,
    subject: subject,
    html: `<strong>verify your email by clicking this link:</strong <hr>  <b>${message}</b>`
  };

  const sent = Email(options)
  return sent
};
module.exports = EmailSender