import React, {
	useEffect,
	useCallback,
	useState,
	useMemo,
} from "react";
import { connect }            from "react-redux";
import { bindActionCreators } from "redux";

// Import Own Components
import MailActions from "../../config/actions/mailActions";
import DetailsView from "./DetailsView";

const DetailsViewContainer = ({
	mailActions,
	dataEmail,
	emailDetails,
}) => {
	const [data, setData] = useState(null);

	useEffect(() => {
		if (dataEmail) {	
			setData(dataEmail);
		} else {
			setData(null);
		}
	}, [emailDetails, dataEmail]);

	const handleChangeReady =  useCallback(() => {
		mailActions.readyEmail(emailDetails);
	}, [emailDetails]);

	const handleMoveEmail =  useCallback(destination => () => {
		mailActions.moveEmail(emailDetails, destination);
	}, [emailDetails]);

	return (
		<DetailsView delegations={{
			data,
			handleChangeReady,
			handleMoveEmail,
		}}/>
	)
}

const mapDispatchToProps = dispatch => ({
	mailActions : bindActionCreators(MailActions, dispatch),
});

const mapStateToProps = ({mailReducer}) => ({
	emailDetails : mailReducer.emailDetails,
	dataEmail    : !mailReducer.emailDetails ? undefined : mailReducer[mailReducer.emailDetails?.filter][mailReducer.emailDetails?.index],
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsViewContainer);
