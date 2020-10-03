import {
	REGISTER_EMAIL,
	DELETE_EMAIL,
	ACTIVE_EMAIL,
	SEND_SPAN_EMAIL,
	SET_EMAIL_DETAILS,
} from "../constants/actionTypes";

import { v4 as uuidv4 } from "uuid";

// estructura de ejemplo para un email
const emailExample = {
	from     : "example@gmail.com",
	to       : "fulanito@gmail.com",
	subject  : "Example",
	body     : "sdsadsdsdsadsadsadsad sad sads ad sad as",
	date     : "01/10/2020",
	isReaded : false,
	avatar   : "",
	tag      : "",
	attachements : [
		{
			file : "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
			name : "ut_nulla_sed.jpeg",
		},
	],
};

const initialState = {
	inbox : {
		// id : { email }
	},
	span : {
		// id : { email }
	},
	trash : {
		// id : { eamil }
	},
	emailDetails : emailExample,
};

const mailReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_EMAIL:
			const randomUuid = uuidv4();
			// other implementation
			// state.inbox[randomUuid] = action.email;
			// return state;
			return {
				...state,
				inbox :  {
					...state.inbox,
					[randomUuid] : action.email,
				},
			};
		case SET_EMAIL_DETAILS : 
			return {
				...state,
				emailDetails : action.email,
			}
		default :
			return state
	}
};

export default mailReducer;
