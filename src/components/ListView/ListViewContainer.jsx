import React, {
	useEffect,
	useCallback,
	useState,
	useMemo,
} from "react";
import { connect }            from "react-redux";
import { bindActionCreators } from "redux";
import _                      from "lodash";

// Import Own Components
import MailActions from "../../config/actions/mailActions";
import ListView    from "./ListView";

const fetchDataJson = async (fileUrl) => {
	try {
		let data = await fetch(fileUrl);
		data     = await data.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

const lengthArrayFiltered = (array) => _.filter(array, function(o) { return !o.isReaded; }).length;

const findInArray = (array, filter) => _.filter(array, function(o) { return o.subject.includes(filter); });

const ListViewContainer = ({
	mailActions,
	inbox,
	spam,
	trash,
}) => {
	const [data, setData]                       = useState([]);
	const [listType, setlistType]               = useState("inbox");
	const [search, setSearch]                   = useState(null);
	const [mailsNotReadead, setMailsNotReadead] = useState(0);

	const getNewEmails = useCallback(async () => {
		const response = await fetchDataJson("./src/services/data.json");
		const date = new Date();
		response.map((item) => mailActions.registerEmail({
			...item,
			date : date.toString()
		}));
	}, []);

	const handleChangeType =  useCallback((event) => {
		setlistType(event.target.value);
	}, []);

	const handleChangeSearch =  useCallback((event) => {
		setSearch(event.target.value);
	}, []);

	const handleChangeEmail = useCallback(item => () => {
		mailActions.setEmailDetails({
			index  : item,
			filter : listType.toLowerCase()
		});
	}, [listType]);

	const setDate = useCallback((param) => {
		const date = new Date(param);
		const options = {
			hour   : 'numeric',
			minute : 'numeric',
			hour12 : true,
		};
		return date.toLocaleDateString("es-ES", options);
	}, []);

	useEffect(() => {
		getNewEmails();
	}, []);

	useEffect(() => {
		const timer = setInterval(() => getNewEmails(), 90000);
		// return () => clearTimeout(timer);
	}, []);
	

	useEffect(() => {
		let array = [];
		switch(listType) {
			case "inbox" :
				array = inbox;
				break;
			case "spam" :
				array = spam;
				break;
			case "trash" :
				array = trash;
				break;
			default:
				array = inbox;
		}
		if (search) {
			setData(findInArray(array, search));
		} else {
			setData(array);
		}
		setMailsNotReadead(lengthArrayFiltered(array));
	}, [listType, inbox, spam, trash, search]);

	return (
		<ListView delegations={{
			data,
			listType,
			setDate,
			handleChangeType,
			handleChangeSearch,
			handleChangeEmail,
			mailsNotReadead,
		}}/>
	)
}

const mapDispatchToProps = dispatch => ({
	mailActions : bindActionCreators(MailActions, dispatch),
});

const mapStateToProps = ({ mailReducer }) => ({
	inbox : mailReducer.inbox,
	spam  : mailReducer.spam,
	trash : mailReducer.trash,
});

export default connect(mapStateToProps, mapDispatchToProps)(ListViewContainer);
