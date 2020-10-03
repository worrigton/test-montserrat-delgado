import React       from "react";
import Card        from "./components/Card";
import CardContent from "./components/CardContent";

import "./App.scss";

const App = ({
	delegations : {
		data,
		email,
		handle,
	}
}) => (
	<div className="browserUI">
		<div className="sidebar">
			<div className="p1">
				<h3>Inbox  {data.length}</h3>
			</div>
			<hr className="divider"/>
			<div className="p1">
				<input className="schear"/>
			</div>
			{ data.length !== 0 &&
				data.map((item) => <>
					<hr className="divider"/>
					<div onClick={handle(item)}>
						<Card key={item} data={item}/>
					</div>
				</>)
			}
		</div>
		<div className="content">
			{ Object.entries(email).length !== 0 &&
				<CardContent data={email}/>
			}
		</div>
	</div>
);

export default App;
