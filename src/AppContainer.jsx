import React, {useEffect, useCallback, useState} from "react";

import App from "./App"

const AppContainer = () => {
	const [data, setData]   = useState([]);
	const [email, setEmail] = useState({});

	const fetchDataJson = async (fileUrl) => {
		try {
			let data = await fetch(fileUrl);
			data     = await data.json();

			return data;
		} catch (error) {
			console.log(error);
		}
	} 

	useEffect(async () => {
		const response = await fetchDataJson("./src/services/data.json");
		setData(response);
	}, []);

	const handle = useCallback(item => () => {
		console.log(item);
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
