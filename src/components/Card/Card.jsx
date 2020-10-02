import React from "react";

import "./CardContainer.scss";

const CardContainer = ({
	data : {
		subject,
		date,
		body,
		isReaded,
	}
}) => {
	return (
		<div className="CardContainer">
			<div className={`${isReaded ? "read" : "unread"} p1`}>
				<div className="header">
					<p className="title">
						{ subject }
					</p>
					<p className="date">
						{ date }
					</p>
				</div>
				<div className="body">
					<p className="singleLine">{ body }</p>
				</div>
			</div>
		</div>
	);
};

CardContainer.defaultProps = {
	isReaded : false,
	subject  : "",
	date     : "",
	body     : "",
};

export default CardContainer;
