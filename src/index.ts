import express, { Express, Request, Response } from 'express';
import {config} from "dotenv"
import cors from "cors"
import { connectDb } from './db/database';
import routes from './routes';

const app: Express = express();

config()

connectDb()

app.use(cors({
        origin : process.env.HOST_URL || "*" 
}))

app.use(express.json())

app.use('/api', routes)

app.listen(process.env.PORT || 8000, () => {
    console.log("Server is Running on Port", process.env.PORT || 8000);
} )