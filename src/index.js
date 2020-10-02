import * as React from "react";
import { render } from "react-dom";

// Import Own Components
import App from "./AppContainer";

const AppContainer = document.getElementById("app-init");

render(
	<App />,
	AppContainer
);

