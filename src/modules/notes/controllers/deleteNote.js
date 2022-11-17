import { HttpStatusCode } from '#src/constants';
import { Note } from '#src/models/Note';
import { asyncWrapper } from '#src/middleware/async';
import { createCustomError } from '#src/errors/custom-error';
import { NO_NOTES } from '../constants/index.js';

export const deleteNote = asyncWrapper(async (req, res, next) => {
	const { id: noteId } = req.params;
	const { deletedCount} = await Note.deleteOne({ _id: noteId });

    if (!deletedCount) {
        return next(createCustomError(`${NO_NOTES}${noteId}`, HttpStatusCode.NOT_FOUND))
    }

	return res.status(HttpStatusCode.CREATED).json({success: true, value: req.params.id})
})