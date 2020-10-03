import React from "react";

import "./CardContent.scss";

const CardContent = ({
	data
}) => {
	return (
		
		<div className="CardContent">
			{console.log(data)}
			<div className="header p1">
				<div>
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
				</div>
				<div>
					<button
						type="button"
						className="btnInfo"
					>
						{data.isReaded ? "Marcar como leido" : "Marcar como no leido"}
					</button>
				</div>				
			</div>
			<hr className="divider"/>
			<div className="p1">
				<div className="header p1">
					<div className="avatar">
						<img alt="" src={data.avatar}/>
					</div>
					<div>
						<p>From : {data.from}</p>
						<p>To   : {data.to}</p>
					</div>
				</div>
				<div>
					<h4>
						{data.subject}
					</h4>
				</div>
				<div className="card p1">
					<p>
						{data.body}
					</p>
				</div>
			</div>			
		</div>
	);
};

export default CardContent;
