export class CustomAPIError extends Error {
	constructor(statusCode, message) {
		super(message);
		this.statusCode = statusCode;
	}
}

export const createCustomError = (msg, statusCode) => {
	return new CustomAPIError(msg, statusCode);
};
