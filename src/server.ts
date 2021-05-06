import express, { NextFunction, Request, Response } from 'express';
import { router } from './routes';
import * as dotenv from "dotenv";

dotenv.config();

import "express-async-errors";

import './database';
import { AppErrors } from './config/errors/AppErrors';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction)=>{
   if(err instanceof AppErrors){
       return response.status(err.statusCode).json({
           mensage:err.message
       })
   }

   return response.status(500).json({
       status: "error",
       message:`Error servidor ${err.message}`
   })
})

app.listen(process.env.PORT, ()=>console.log("servidor conectado"));