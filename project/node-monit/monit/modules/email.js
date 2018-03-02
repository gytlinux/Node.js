var nodemailer = require('nodemailer');

function email(title,body) {
  let transporter = nodemailer.createTransport({
	host: emailconf.host,
	secureConnection: true,
	port: 465,
	secure: true,
	auth: {
	   	user: emailconf.user,
	    	pass: emailconf.pass,
	}
  });

  let mailOptions = {
	from: emailconf.from,
	to : emailconf.to,
	subject: title,
	text: title,
	html: body,
	
  };

  transporter.sendMail(mailOptions, (error, info) => {
	if (error) {
		return console.log(error);
	}
	console.log(`Message: ${info.messageId}`);
	console.log(`sent: ${info.response}`);
  });
};

module.exports = email;

