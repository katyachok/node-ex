import {HttpStatusCode} from '#src/constants';

export const getNotes = (req, res) => {
	return res.status(HttpStatusCode.OK).send([]);
};
