import {HttpStatusCode} from '../../../constants.js';

export const getNotes = (req, res) => {
	return res.status(HttpStatusCode.OK).send([]);
};
