import express from 'express';

import { listeningPort, RESOUSE_NOT_FOUND } from './constants.js';
import greetingsRouter from './modules/greetings/routes/index.js';

const app = express();
const port = process.env.PORT || 5000;

app.use('/api/greetings', greetingsRouter);

app.all('*', (req, res) => {
	res.status(404).send(RESOUSE_NOT_FOUND);
});

app.listen(port, () => {
	console.log(listeningPort(port));
});
