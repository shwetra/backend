const express = require("express");
const cors = require("cors");
const dbConnect= require("./db");
require("dotenv").config()
const PORT = process.env.PORT ;
const app = express();
app.use(express.json());
app.use(cors());



app.get("/",async(req,res)=>{
    res.send("hello")
})

const nodemailer = require("nodemailer");

async function main (){
    let testAccount = await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'pierre.altenwerth@ethereal.email',
            pass: 'AuYgqkwAsuCQHT6kKB'
        }
    });
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" sanghamrai1@gmail.com', // sender address
        to: "sanghamrai1@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

}

app.listen(PORT||6000,()=>{
    dbConnect()
console.log(`server started on ${PORT}`)
})
