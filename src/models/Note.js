import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'must provide title'],
		trim: true,
		minlength: [3, 'title cannot be less than 3 characters']
	},
	content: {
		type: String,
		required: [true, 'must provide content'],
		trim: true,
		minlength: [3, 'content cannot be less than 3 characters'],
        		maxlength: [500, 'content cannot be more than 500 characters']
	},
	createdAt: {
		type: Date,
	},
	updatedAt: {
		type: Date,
	},
});

export const Note =  mongoose.model('Note', NoteSchema);
