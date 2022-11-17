import { HttpStatusCode } from '#src/constants';
import { Note } from '#src/models/Note';
import { asyncWrapper } from '#src/middleware/async';
import { createCustomError } from '#src/errors/custom-error';
import { NO_NOTES } from '../constants/index.js';

export const updateNote = asyncWrapper(async (req, res, next) => {
	const { params: { id: noteId }, body } = req;
    const updatedNote = await Note.findByIdAndUpdate(noteId, body, {
        new: true, runValidators: true
    })

    if (!updatedNote) {
        return next(createCustomError(`${NO_NOTES}${noteId}`, HttpStatusCode.NOT_FOUND))
    }
    res.status(HttpStatusCode.CREATED).json({ updatedNote })
})