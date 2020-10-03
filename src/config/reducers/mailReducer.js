import {
	REGISTER_EMAIL,
	DELETE_EMAIL,
	ACTIVE_EMAIL,
	SEND_SPAN_EMAIL,
} from "../constants/actionTypes";

import { v4 as uuidv4 } from "uuid";

// estructura de ejemplo para un email
const email = {
	from     : "mhallatt0@walmart.com",
	to       : "cziem0@surveymonkey.com",
	subject  : "Office Assistant IV",
	body     : "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
	date     : "3/31/2017",
	isReaded : false,
	avatar   : "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
	tag      : "Indigo",
	attachements : [{
		file : "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
		name : "ut_nulla_sed.jpeg"
	}]
}

const initialState = {
	inbox : {
		// id : { email }
	},
	span : {
		// id : { email }
	},
	trash : {
		// id : { eamil }
	}
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
		default :
			return state
	}
};

export default mailReducer;
