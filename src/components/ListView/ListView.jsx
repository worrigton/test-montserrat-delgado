import React from "react";

// Import Own Components
import EmailCard      from  "../EmailCard";
import SelectTypeList from "./components/SelectTypeList";
import InputSearch    from "./components/InputSearch";
import "./ListView.scss";

const ListView = ({
	delegations : {
		data,
		listType,
		search,
		handleChangeType,
		handleChangeSearch,
		handleChangeEmail,
		setDate,
		mailsNotReadead,
	}
}) => (
	<div className="sidebar">
		<div className="p1 header">
			<h3>
				{listType}
				<span className="numberEmails">
					{ mailsNotReadead > 10 ? "9+" : mailsNotReadead }
				</span>
			</h3>
			<SelectTypeList handleChangeType={handleChangeType} />
		</div>
		<hr className="divider"/>
		<div className="p1">
			<InputSearch handleChangeSearch={handleChangeSearch} search={search} />
		</div>
		{ data.length > 0 &&
			data.map((item, index) => (<div key={ item.id }>
				<hr className="divider"/>
				<div onClick={handleChangeEmail(index)}>
					<EmailCard delegations={{
						data : item,
						setDate,
					}}/>
				</div>
			</div>))
		}
	</div>
);

export default ListView;
