import {
	REGISTER_EMAIL,
	SET_EMAIL_DETAILS,
} from "../constants/actionTypes";

const registerEmail   = email => ({ type : REGISTER_EMAIL, email });
const setEmailDetails = email => ({ type : SET_EMAIL_DETAILS, email });

const mailActions = {
	registerEmail,
	setEmailDetails,
};

export default mailActions;
