const nodemailer = require('nodemailer');

const mailOptions = {
    from: 'cruz.everton@gmail.com',
    to: 'exclusivodoeverton@hotmail.com',
    subject: 'E-mail send by node',
    text: 'Easy, easy ;)'
};

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'cruz.everton@gmail.com',
        pass: 'xxxxx'
    },
    tls: { rejectUnauthorized: false }
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
            }
        });
    }
});

