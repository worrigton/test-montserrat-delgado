import {
	REGISTER_EMAIL,
	SET_EMAIL_DETAILS,
	READY_EMAIL,
	MOVE_ARRAY_EMAIL,
} from "../constants/actionTypes";

const registerEmail   = email => ({ type : REGISTER_EMAIL, email });
const setEmailDetails = email => ({ type : SET_EMAIL_DETAILS, email });
const readyEmail      = email => ({ type : READY_EMAIL, email });
const moveEmail       = (email, destination) => ({ type : MOVE_ARRAY_EMAIL, email, destination });

const mailActions = {
	registerEmail,
	setEmailDetails,
	readyEmail,
	moveEmail,
};

export default mailActions;
