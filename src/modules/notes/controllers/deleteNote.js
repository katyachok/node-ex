import {HttpStatusCode} from '#src/constants';

export const deleteNote = (req, res) => {
	return res.status(HttpStatusCode.CREATED).json({success: true, value: req.params.id});
};
