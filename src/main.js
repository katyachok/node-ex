import express from 'express';
import * as dotenv from 'dotenv'

import { connectDB } from './db/connect.js'
import { listeningPort, RESOUSE_NOT_FOUND } from './constants.js';
import greetingsRouter from './modules/greetings/routes/index.js';
import notesRouter from './modules/notes/routes/index.js';
import { errorHandlerMiddleware } from './middleware/error-handler.js';
import { logRequest } from './logger/logger.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(logRequest);
app.use('/api/greetings', greetingsRouter);
app.use('/api/notes', notesRouter);
app.use(errorHandlerMiddleware);

app.all('*', (req, res) => {
	res.status(404).send(RESOUSE_NOT_FOUND);
});

const start = async () => {
    try { 
        await connectDB(process.env.MONGO_URI)
		app.listen(port, () => console.log(listeningPort(port)));
	} catch (error) {
		console.log(error);
    }
}

start()