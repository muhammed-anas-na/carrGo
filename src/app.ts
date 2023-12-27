import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import cookieParser from 'cookie-parser'
import dependencies from './config/dependencies'
import { routes } from "./routes";
import errorMiddleware from './libs/middleware/errormiddleware'

const app = express()
const router = express.Router();
app.use(express.json({limit:"1000mb"}));
app.use(express.urlencoded());

app.use(bodyParser.json())
app.use(cookieParser())
app.use(
    cors({
        origin:"https:client-srv:5173",
        methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials:true,
    })
)

app.use('/' , routes(dependencies))
app.use(errorMiddleware)

export {app}