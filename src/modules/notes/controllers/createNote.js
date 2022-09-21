import { PROVIDE_VALUES } from '../constants/index.js';

export const createNote = (req, res) => {
	if (!Object.keys(req.body).length) {
		return res.status(400).json({
			success: false,
			message: PROVIDE_VALUES
		});
	}
	return res.status(201).json(req.body);
};
