import { HttpStatusCode } from '#src/constants';

export const updateNote = (req, res) => {
	return res.status(HttpStatusCode.CREATED).json(req.body);
};
