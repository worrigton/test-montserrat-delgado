import {
	REGISTER_EMAIL,
	DELETE_EMAIL,
	READY_EMAIL,
	MOVE_ARRAY_EMAIL,
	SET_EMAIL_DETAILS,
} from "../constants/actionTypes";

import { v4 as uuidv4 } from "uuid";

const initialState = {
	inbox        : [],
	spam         : [],
	trash        : [],
	emailDetails : undefined,
};

const mailReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_EMAIL:
			const randomUuid = uuidv4();
			let newInbox = [{
				...action.email,
				id : randomUuid,
			}];
			newInbox = [...newInbox, ...state.inbox];
			return {
				...state,
				inbox : newInbox,
			};

		case SET_EMAIL_DETAILS : 
			return {
				...state,
				emailDetails : action.email,
			}
		case READY_EMAIL :
			const array = [ ...state[action.email.filter] ];
			array[action.email.index].isReaded = true;
			return {
				...state,
				[action.email.filter] : array, 
			};
		case MOVE_ARRAY_EMAIL :
			if (action.email.filter === action.destination) {
				return state;
			}
			const element        = state[action.email.filter][action.email.index];
			let newArray         = [ ...state[action.email.filter] ];
			let destinationArray = [ ...state[action.destination] ]
			
			newArray.splice(action.email.index, 1);
			destinationArray.push(element);

			return {
				...state,
				[action.email.filter] : newArray,
				[action.destination]  : destinationArray,
				emailDetails          : undefined, 
			};
			
			//return Object.assign({}, state);
		default :
			return state;
	}
};

export default mailReducer;
