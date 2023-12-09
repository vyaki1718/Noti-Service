const express = require('express');
const {ServerConfig, Logger } =require('./config');
const apiRoutes=require('./routes/index');
const amqplib = require('amqplib');
const {EmailService}= require('../src/services')

async function connectQueue(){
    try {
        const connection = await amqplib.connect('amqp://localhost');

        const channel = await connection.createChannel();
        await channel.assertQueue("noti-queue");
        channel.consume("noti-queue", async (data)=>{
            const object = JSON.parse(`${Buffer.from(data.content)}`);
            EmailService.sendEmail({mailTo:object.recepientMail, subject:object.subject, text:object.text})
            channel.ack(data);
        })
        
    } catch (error) {
           console.log(error);
           throw error;
    }
}
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRoutes)

app.listen(ServerConfig.PORT, async function exc(){
    
    console.log(`Server successfull running on http://localhost:${ServerConfig.PORT}`)
   
    // Logger.info("successfully started the server", "root", {})
})