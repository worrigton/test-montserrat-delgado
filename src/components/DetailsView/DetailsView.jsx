import React from "react";

import "./DetailsView.scss";

const DetailsView = ({
	delegations : {
		data,
		emailDetails,
		handleChangeReady,
		handleMoveEmail,
	}
}) => {
	return (
		
		<div className="content">
			{ data &&
				<div className="DetailsView">
					<div className="header p1">
						<div>
							{ emailDetails?.filter !== "trash" &&
								<button
									type="button"
									className="btnDanger"
									onClick={ handleMoveEmail("trash") }
								>
									Eliminar
								</button>
							}
							{ emailDetails?.filter !== "spam" &&
								<button
									type="button"
									className="btnOutline"
									onClick={ handleMoveEmail("spam") }
								>
									Spam
								</button>
							}
							{ emailDetails?.filter !== "inbox" &&
								<button
									type="button"
									className="btnInfo"
									onClick={ handleMoveEmail("inbox") }
								>
									Restablecer
								</button>
							}
						</div>
						<div>
							{ !data?.isReaded &&
								<button
									type="button"
									className="btnInfo"
									onClick={handleChangeReady}
								>
									Marcar como leido
								</button>
							}
						</div>	
					</div>
					<hr className="divider"/>
					<div className="p1">
						<div className="header p1">
							<div className="avatar">
								<img alt="" src={ data?.avatar }/>
							</div>
							<div>
								<p>From : { data?.from }</p>
								<p>To   : { data?.to }</p>
							</div>
						</div>
						<div className="p1">
							<h4>
								{ data?.subject }
							</h4>
						</div>
						<div className="p1">
							<div className="card p1">
								<p>
									{ data?.body }
								</p>
								<div className="p1"/>
								<div>
									{data?.attachements.length > 0 && <>
										<p>Attachements :</p>
										{ data.attachements.map(item =>
											<a href={item.file} atl={item.name} target="_blank">
												{item.name}
											</a>
										) }
									</>}
								</div>
							</div>	
						</div>
					</div>
				</div>
			}
		</div>
		
	);
}
export default DetailsView;
