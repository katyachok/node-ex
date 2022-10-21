import { logError } from '../logger/logger.js';

export const errorHandlerMiddleware = (err, req, res, next) => {
	res.status(err.statusCode).json({ msg: err.message });
	logError(err, req, res, next);
};
