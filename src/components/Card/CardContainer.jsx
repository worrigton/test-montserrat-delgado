import React, {
	useEffect,
	useState,
	useCallback,
} from "react";

// import PropTypes from "prop-types";
import "./CardContent.scss";

const CardContent = () => {
	const [open, setOpen]                         = useState(false);
	const [active, setActive]                     = useState(false);
	const [anchorEl, setAnchorEl]                 = useState(null);

	useEffect(() => {
		(async () => {
			const { body : { collection } } = await Service.api.customer.getOrder(
				1,
				`customer_id=${customer.customer.id}&notification=${true}&page_size=50`,
				customer.token
			);
			if (collection) {
				setNotificationList(collection);
				setNumNotification(collection.length);
			}
		})();
	}, [customer, router]);

	const handleClick = useCallback((event) => {
		setOpen(true);
		setAnchorEl(event.currentTarget);
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
		setAnchorEl(null);
	}, []);
};

CardContent.defaultProps = {
	title       : "Card Titles ejemplo del tirulo de una card",
	date        : "8:12 AM",
	description : "ejemplo loreum loreum loreum",
	read        : false,
};

export default CardContent;
