var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'popoolatopzy1@yahoo.com',
    pass: 'instarpop'
  },
  tls:{
      rejectUnauthorized:false
  }
});

var mailOptions = {
  from: 'popoolatopzy1@yahoo.com',
  to: 'popoolatopzy@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});