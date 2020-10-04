import React from "react";

const SelectTypeList = ({
	handleChangeType
}) =>(
	<form>
		<select onChange={handleChangeType} placeholder={"Filter by"}>
		  <option value="inbox">Inbox</option>
		  <option value="spam">Spam</option>
		  <option value="trash">Trash</option>
		</select>
	</form>
);

export default SelectTypeList;