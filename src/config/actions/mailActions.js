import {
	REGISTER_EMAIL
} from "../constants/actionTypes";

const registerEmail = mail => ({ type : REGISTER_EMAIL, mail });

const mailActions = {
	registerEmail
};

export default mailActions;
