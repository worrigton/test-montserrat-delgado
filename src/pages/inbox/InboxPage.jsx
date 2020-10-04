import React from "react";

import ListView    from "../../components/ListView"
import DetailsView from "../../components/DetailsView"

const InboxPage = () => {	
	return (
		<div className="browserUI">
			<ListView />
			<DetailsView />
		</div>
	)
}

export default InboxPage;
