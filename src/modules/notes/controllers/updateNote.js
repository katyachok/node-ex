import { HttpStatusCode } from '#src/constants';
import { CustomAPIError } from '#errors/custom-error';
import { PROVIDE_VALUES } from '../constants/index.js';

export const updateNote = (req, res) => {
	const noParameters = !Object.keys(req.body).length;
	if (noParameters) {
		throw new CustomAPIError(HttpStatusCode.BAD_REQUEST, PROVIDE_VALUES);
	}
	return res.status(HttpStatusCode.CREATED).json(req.body);
};
