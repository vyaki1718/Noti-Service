const express = require('express');
const {ServerConfig, Logger } =require('./config');
const apiRoutes=require('./routes/index')

const app=express();
const mailsender = require('./config/emial-config')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRoutes)

app.listen(ServerConfig.PORT, async function exc(){
    
    console.log(`Server successfull running on http://localhost:${ServerConfig.PORT}`)
   try {
    const response = await mailsender.sendMail({
         from:ServerConfig.GMAIL,
         to:'abc@gmail.com',
         subject:"Is the mailer working",
         text:"Yes mailer is working"
     })
     console.log(response);
   } catch (error) {
         console.log(error)
   }
    // Logger.info("successfully started the server", "root", {})
})