import express from 'express'
import {login,newUser} from './controllers/user.js';
const app=express.Router();


app.get('/login',login);
app.get('/new',newUser);

export default app;