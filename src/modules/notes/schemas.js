import Joi from 'joi';

export const schemas = {
	noteCreate: Joi.object().keys({
		id: Joi.string().empty('').allow(null),
		title: Joi.string().required().min(3),
		content: Joi.string().required().min(3).max(500),
		createdAt: Joi.date(),
		updatedAt: Joi.date().allow(null),
	}),
	noteUpdate: Joi.object().keys({
		id: Joi.string().required(),
		title: Joi.string().required().min(3),
		content: Joi.string().required().min(3).max(500),
		createdAt: Joi.date(),
		updatedAt: Joi.date().allow(null),
	})
};
