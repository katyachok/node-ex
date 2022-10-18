import { HttpStatusCode } from '#src/constants';
import { CustomAPIError } from '#errors/custom-error';
import { PROVIDE_VALUES, INVALID_REQUEST } from '../constants/index.js';
import { schemas } from '../schemas.js';

export const updateNote = (req, res) => {
	const { body } = req;
	const noParameters = !Object.keys(body).length;
	if (noParameters) {
		throw new CustomAPIError(HttpStatusCode.BAD_REQUEST, PROVIDE_VALUES);
	}

	const result = schemas.noteUpdate.validate(body);
	const { error } = result;
	const valid = error == null;

	if (!valid) {
		return res.status(HttpStatusCode.UNPROCESSABLE_ENTITY).json({
			message: INVALID_REQUEST,
			error
		});
	}
	return res.status(HttpStatusCode.CREATED).json(req.body);
};
