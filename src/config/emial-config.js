const nodemailer = require('nodemailer');

const  {GMAIL, GMAIL_PASS} = require('./server-config')

const mailsender = nodemailer.createTransport({
      service:'Gmail',
      auth:{
        user:GMAIL,
        pass:GMAIL_PASS
      }
})


module.exports = mailsender