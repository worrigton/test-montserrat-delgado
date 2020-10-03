import { combineReducers }   from "redux";

// Import Own Components
import mailReducer from "./mailReducer";

const rootReducer = combineReducers({
	mailReducer,
});

export default rootReducer;
