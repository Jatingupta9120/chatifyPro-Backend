import express from 'express'
// import {login,newUser} from './controllers/user.js';
const app=express.Router();

app.listen(3000,()=>{
    console.log('Server is running on 3000')
})
