const mailgun = require("mailgun-js");
require('dotenv').config();

const mg = mailgun({apiKey: process.env.API_KEY, domain: process.env.DOMAIN});

const sendEmail = (email, payload) => {

  const data = {
    from: `Mailgun Sandbox <postmaster@${process.env.DOMAIN}>`,
    to: email,
    subject: "Your Secret Santa person!",
    text: JSON.stringify(payload)
  };

  console.log(data);

  mg.messages().send(data, function (error, body) {
    if(error) console.log(error);
    console.log(body);
  });

}


module.exports = { sendEmail };