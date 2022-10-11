import { getHelloMessage, HELLO_MESSAGE_DESCRIPTION} from '../constants/index.js';

export const sayHi = (req, res) => {
	const { name } = req.params;
	if (!name) {
		res.status(400).json(HELLO_MESSAGE_DESCRIPTION);
	}
	res.status(200).send(getHelloMessage(name));
};
