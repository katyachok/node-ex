import { HttpStatusCode } from '#src/constants';
import { CustomAPIError } from '#errors/custom-error';
import { PROVIDE_VALUES } from '../constants/index.js';

export const validationMiddleware = (validationSchema) => {
	return (req, res, next) => {
		const { body } = req;
		const noParameters = !Object.keys(body).length;
		if (noParameters) {
			throw new CustomAPIError(HttpStatusCode.BAD_REQUEST, PROVIDE_VALUES);
		}

		const { error } = validationSchema.validate(body);
		const isNoteValid = error == null;

		if (!isNoteValid) {
			throw new CustomAPIError(HttpStatusCode.UNPROCESSABLE_ENTITY, error);
		}
		next();
	};
};
