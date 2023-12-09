const {EmailService} = require('../services');
const { StatusCodes } = require('http-status-codes');

async function create(req,res){
    try {
        const response = await EmailService.createTicket({
            subject: req.body.subject,
            content:req.body.content,
            recipentEmail:req.body.recipentEmail
        })
        return res.status(200).json(response)
        
    } catch (error) {
      return res.status(500).json(error)
    } 
}

module.exports = {
  create
}