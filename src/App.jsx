import React        from "react";
import { Provider } from "react-redux";

// import own components
import store     from "./config/store";
import InboxPage from "./pages/inbox/InboxPage";

import "./App.scss";

const App = () => (
	<Provider store={ store }>
		<InboxPage />
	</Provider>	
);

export default App;
