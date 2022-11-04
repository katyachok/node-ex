import Joi from 'joi';

const noteCreateSchema = Joi.object().keys({
	id: Joi.string().empty('').allow(null),
	title: Joi.string().required().min(3),
	content: Joi.string().required().min(3).max(500),
	createdAt: Joi.date(),
	updatedAt: Joi.date().allow(null),
});

const noteUpdateSchema = Joi.object().keys({
	id: Joi.string().required(),
	title: Joi.string().required().min(3),
	content: Joi.string().required().min(3).max(500),
	createdAt: Joi.date(),
	updatedAt: Joi.date().allow(null),
});

export { noteCreateSchema, noteUpdateSchema};

