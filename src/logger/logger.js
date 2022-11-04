import winston from 'winston';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp(),
		winston.format.simple()
	),
	transports: [new winston.transports.Console()],
});

function logRequest(req, res, next) {
	logger.info(req.url);
	next();
}

function logError(err, req, res, next) {
	logger.error(`${req.url} : ${err}`);
	next();
}

export {logRequest, logError };
