import React     from "react";
// import PropTypes from "prop-types";
import "./CardContainer.scss";

const CardContainer = ({
	title
}) => {
	return (
		<div className="CardContainer">
			<h1 className="title">{ title }</h1>
		</div>
	);
};

CardContainer.defaultProps = {
	title : "Card Title"
};

export default CardContainer;
