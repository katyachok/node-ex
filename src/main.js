import express from 'express';

import { listeningPort, RESOUSE_NOT_FOUND } from './constants.js';
import greetingsRouter from './modules/greetings/routes/index.js';
import notesRouter from './modules/notes/routes/index.js';
import { errorHandlerMiddleware } from './middleware/error-handler.js';
import { logRequest, logError } from './logger/logger.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(logRequest);
app.use('/api/greetings', greetingsRouter);
app.use('/api/notes', notesRouter);
app.use(errorHandlerMiddleware);
app.use(logError);

app.all('*', (req, res) => {
	res.status(404).send(RESOUSE_NOT_FOUND);
});

app.listen(port, () => {
	console.log(listeningPort(port));
});
