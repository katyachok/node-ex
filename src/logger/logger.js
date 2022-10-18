import winston from 'winston';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.combine(
		winston.format.colorize(),
		winston.format.timestamp(),
		winston.format.json()
	),
	transports: [new winston.transports.Console()],
});

if (process.env.NODE_ENV !== 'production') {
	logger.add(new winston.transports.Console({
		format: winston.format.simple(),
	}));
}

function logRequest(req, res, next) {
	logger.info(req.url);
	next();
}

function logError(err, req, res, next) {
	logger.error(err);
	next();
}

export {logRequest, logError };
