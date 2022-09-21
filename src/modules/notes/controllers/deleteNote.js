export const deleteNote = (req, res) => {
	return res.status(201).json({success: true, value: req.params.id});
};
