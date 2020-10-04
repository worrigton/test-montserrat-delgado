import React from "react";

const InputSearch = ({
	handleChangeSearch,
	search
}) =>(
	<form>
		<input
			type="text"
			placeholder="search"
			value={search}
			onChange={handleChangeSearch}
			className="input"
		/>
	</form>
);

export default InputSearch;