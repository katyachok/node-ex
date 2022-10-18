import {HttpStatusCode} from '../../../constants.js';

export const deleteNote = (req, res) => {
	return res.status(HttpStatusCode.CREATED).json({success: true, value: req.params.id});
};
