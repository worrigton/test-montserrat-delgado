import React from "react";

import "./CardContent.scss";

const CardContent = ({
	data
}) => {
	return (
		
		<div className="CardContent">
			{console.log(data)}
			<div className="p1">
				<button
					type="button"
					className="btnDanger"
				>
					Eliminar
				</button>
				<button
					type="button"
					className="btnOutline"
				>
					Spam
				</button>
				<button
					type="button"
					className="btnOutline"
				>
					{data.isReaded ? "Marcar como leido" : "Marcar como no leido"}
				</button>
			</div>
			<hr className="divider"/>
			<div className="p1">
				<h4>
					{data.subject}
				</h4>
				<div className="card">
					<p>
						{data.body}
					</p>
				</div>
			</div>			
		</div>
	);
};

export default CardContent;
