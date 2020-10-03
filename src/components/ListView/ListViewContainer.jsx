import React, {
	useEffect,
	useCallback,
	useState
} from "react";
import { connect }            from "react-redux";
import { bindActionCreators } from "redux";

// Import Own Components
import MailActions  from "../../config/actions/mailActions";
import EmailCard    from "../EmailCard"

const ListViewContainer = ({
	mailActions
}) => {
	const [data, setData]   = useState([]);
	const [email, setEmail] = useState({});

	const fetchDataJson = async (fileUrl) => {
		try {
			let data = await fetch(fileUrl);
			data     = await data.json();

			return data;
		} catch (error) {
			console.log(error);
		}
	} 

	useEffect(() => {
		(async () => {
			const response = await fetchDataJson("./src/services/data.json");
			setData(response);
		})();
	}, []);

	const handle = useCallback(item => () => {
		console.log("-------------------->", item);
		mailActions.setEmailDetails(item);
		setEmail(item);
	}, []);

	return (
		<div className="sidebar">
			<div className="p1">
				<h3>Inbox  {data.length}</h3>
			</div>
			<hr className="divider"/>
			<div className="p1">
				<input className="schear"/>
			</div>
			{ data.length !== 0 &&
				data.map((item) => <>
					<hr className="divider"/>
					<div onClick={handle(item)}>
						<EmailCard key={item} data={item}/>
					</div>
				</>)
			}
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	mailActions : bindActionCreators(MailActions, dispatch),
});

export default connect(null, mapDispatchToProps)(ListViewContainer);
