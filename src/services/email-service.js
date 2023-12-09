const { TicketRepository } = require('../repositories');
const {Mailer, ServerConfig} = require('../config');

const ticketRepo= new TicketRepository();
async function sendEmail(mailFrom=ServerConfig.GMAIL, mailTo, subject , text){
    try {
        const response = await Mailer.sendMail({
             from:mailFrom,
             to: mailTo,
             subject:subject,
             text:text
            })
        return response;
       } catch (error) {
        console.log(error)  
        throw error
       }
}

async function createTicket(data){
      try {
        const response = await ticketRepo.create(data);
        return response;
      } catch (error) {
        console.log(error);
        throw error
      }
}

async function getPendingEmail(){
    try {
         const response = await ticketRepo.getPendingEmail();
         return response;
    } catch (error) {
        console.log(error);
        throw error
    }
}

module.exports={
      sendEmial,
      createTicket,
      getPendingEmail
}