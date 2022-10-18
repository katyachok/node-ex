import { PROVIDE_VALUES } from '../constants/index.js';
import { HttpStatusCode } from '../../../constants.js';
import {CustomAPIError} from '../../../errors/custom-error.js';

export const createNote = (req, res) => {
	const noParameters = !Object.keys(req.body).length;
	if (noParameters) {
		throw new CustomAPIError(HttpStatusCode.BAD_REQUEST, PROVIDE_VALUES);
	}
	return res.status(HttpStatusCode.CREATED).json(req.body);
};
