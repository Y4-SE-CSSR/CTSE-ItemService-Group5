import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv/config";

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import { options } from './config/swagger.js'

import routers from "./routers/index.js";

const swaggerEndpoint = '/api-docs'

const app = express();
const PORT = process.env.REACT_APP_BACKEND_PORT;
app.use(cors());
app.use(bodyParser.json());

app.use(swaggerEndpoint, swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))

routers(app);

app.use(session({
    secret: 'item-service-secured',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: 'none',
        secure: true
    }
}));

const URL = process.env.REACT_APP_MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(PORT, () => {
    console.log(`Item Service is up and running on port ${PORT}`);
    console.log(`Swagger is running on http://localhost:${PORT}${swaggerEndpoint}`)
});