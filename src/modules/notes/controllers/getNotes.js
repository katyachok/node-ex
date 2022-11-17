import { HttpStatusCode } from '#src/constants';
import { Note } from '#src/models/Note';
import { asyncWrapper } from '#src/middleware/async'

export const getNotes = async (req, res) => {
	const { sort, dateFilters, title } = req.query;
    const queryObject = {};

    if (title) {
        queryObject.title = {$regex: title, $options: 'i'}
    }

    if (dateFilters) {
        let filters = dateFilters.split(',').reduce((acc, item) => {
            const [operator, value] = item.trim().split(':');
            return { ...acc, [operator]: value };
        }, {});
        queryObject.createdAt = filters;
    }
    let result = Note.find(queryObject);

    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }
	
	const page = Number(req.query.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);

	const notes = await result;
    return res.status(HttpStatusCode.OK).json(notes)
}