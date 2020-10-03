import React, {
	useEffect,
	useCallback,
	useState
} from "react";

import ListView    from "../../components/ListView"
import EmailDetails from "../../components/EmailDetails"

const InboxPage = () => {	
	return (
		<div className="browserUI">
			<ListView />
			<EmailDetails />
		</div>
	)
}

export default InboxPage;
