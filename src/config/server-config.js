const dotenv=require('dotenv');

dotenv.config();


module.exports={
    PORT:process.env.PORT || 8080,
    GMAIL:process.env.GMAIL_EMAIL,
    GMAIL_PASS:process.env.GMAIL_PASS
}