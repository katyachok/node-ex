import { HttpStatusCode } from '#src/constants';

export const createNote = (req, res) => {
	return res.status(HttpStatusCode.CREATED).json(req.body);
};
