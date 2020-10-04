import React from "react";

import "./EmailCard.scss";

const EmailCard = ({
	delegations :{
		setDate,
		data : {
			subject,
			date,
			body,
			isReaded,
		}
	}
}) => {
	return (
		<div className="EmailCard">
			<div className={`${isReaded ? "read" : "unread"} p1`}>
				<div className="header">
					<p className="title">
						{ subject }
					</p>
					<p className="date">
						{ setDate(date) }
					</p>
				</div>
				<div className="body">
					<p className="singleLine">{ body }</p>
				</div>
			</div>
		</div>
	);
};

EmailCard.defaultProps = {
	isReaded : false,
	subject  : "",
	date     : "",
	body     : "",
};

export default EmailCard;
