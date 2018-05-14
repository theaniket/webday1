import app from './app';
import express from 'express';

const port = process.env.port || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port,()=>{
    console.log('Listening at port : '+ port);
});