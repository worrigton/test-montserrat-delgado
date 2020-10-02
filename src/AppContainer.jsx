import React, {useCallback, useState} from "react";

import App from "./App"

//const data = require('json-loader!', './services/mail.data.json');

const AppContainer = () => {
	const [email, setEmail]  = useState({});

	const handle = useCallback(item => () => {
		setEmail(item);
	}, []);

	return (
		<App
			delegations={{
				data,
				email,
				handle,
			}}
		/>
	);
}

export default AppContainer;
