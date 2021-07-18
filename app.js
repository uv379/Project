
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json());

// we link the router file to make our route easy
app.use(require('./router/auth'));


const PORT = process.env.PORT;

//Middleware

const middleware = (req,res, next) => {
    console.log(`Hello middle`);
    next();
} 

app.get('/sendCandidateData',(req,res) => {
    res.send(`ALL DETAILS SEND FORM BACKEND TO DATA BASE`);
});

app.listen(PORT, () =>{
    console.log(`server is running at port no ${PORT}`)
})