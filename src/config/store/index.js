import { composeWithDevTools }          from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import thunk                            from "redux-thunk";

// Import Own Components
import rootReducer              from "../reducers";
import { loadState, saveState } from "./persistor";

const isProduction = process.env.NODE_ENV === "production";

const store = createStore(
	rootReducer,
	loadState() || {},
	isProduction
		? applyMiddleware(thunk)
		: composeWithDevTools(applyMiddleware(thunk)),
);

store.subscribe(() => {
	saveState(store.getState());
});

export const getStoreData = () => store.getState();

export default store;
