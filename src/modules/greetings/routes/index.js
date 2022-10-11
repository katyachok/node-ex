import express from 'express';

import { sayHi } from '../controllers/sayHi.js';

const app = express();

app.get('/:name', sayHi);
app.get('/', sayHi);

export default app;
