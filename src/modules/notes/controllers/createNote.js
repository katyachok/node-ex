import { HttpStatusCode } from '#src/constants';
import {CustomAPIError} from '#errors/custom-error';
import { PROVIDE_VALUES } from '../constants/index.js';
import { schemas } from '../schemas.js';

export const createNote = (req, res) => {
	const { body } = req;
	const noParameters = !Object.keys(body).length;
	if (noParameters) {
		throw new CustomAPIError(HttpStatusCode.BAD_REQUEST, PROVIDE_VALUES);
	}
	
	const result = schemas.noteCreate.validate(body);
	const { error } = result;
	const valid = error == null;

	if (!valid) {
		throw new CustomAPIError(HttpStatusCode.UNPROCESSABLE_ENTITY, error);
	}

	return res.status(HttpStatusCode.CREATED).json(req.body);
};
