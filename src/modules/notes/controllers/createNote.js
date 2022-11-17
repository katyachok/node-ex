import { HttpStatusCode } from '#src/constants';
import { Note } from '#src/models/Note';
import { asyncWrapper } from '#src/middleware/async'


export const createNote = asyncWrapper(async (req, res) => {
	const note = await Note.create(req.body)
	return res.status(HttpStatusCode.CREATED).json({ note })
});
