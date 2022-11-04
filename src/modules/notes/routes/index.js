import express from 'express';

import { getNotes } from '../controllers/getNotes.js';
import { createNote } from '../controllers/createNote.js';
import { updateNote } from '../controllers/updateNote.js';
import { deleteNote } from '../controllers/deleteNote.js';
import { validationMiddleware } from '../middlewares/validationMiddleware.js';
import { noteCreateSchema, noteUpdateSchema } from '../schemas.js';

const router = express.Router();

router.route('/').get(getNotes);
router.post('/', validationMiddleware(noteCreateSchema), createNote);
router.route('/:id').delete(deleteNote);
router.put('/:id', validationMiddleware(noteUpdateSchema), updateNote);

export default router;
