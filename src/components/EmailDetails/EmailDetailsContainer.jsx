import React from "react";

import "./EmailDetails.scss";

const EmailDetailsContainer = ({
	data
}) => {
	return (
		<div className="content">
			<div className="EmailDetails">
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
		</div>
	);
}

EmailDetailsContainer.defaultProps = {
	data : {
		from     : "example@gmail.com",
		to       : "fulanito@gmail.com",
		subject  : "Example",
		body     : "sdsadsdsdsadsadsadsad sad sads ad sad as",
		date     : "01/10/2020",
		isReaded : false,
		avatar   : "",
		tag      : "",
		attachements : [
			{
				file : "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
				name : "ut_nulla_sed.jpeg",
			},
		],
	},
}

export default EmailDetailsContainer;
