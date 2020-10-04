import React from "react";

import "./DetailsView.scss";

const DetailsView = ({
	delegations : {
		data,
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
							<button
								type="button"
								className="btnDanger"
								onClick={ handleMoveEmail("trash") }
							>
								Eliminar
							</button>
							<button
								type="button"
								className="btnOutline"
								onClick={ handleMoveEmail("spam") }
							>
								Spam
							</button>
						</div>
						<div>
							<button
								type="button"
								className="btnInfo"
								onClick={handleChangeReady}
							>
								{ data?.isReaded ? "Marcar como leido" : "Marcar como no leido" }
							</button>
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
						<div>
							<h4>
								{ data?.subject }
							</h4>
						</div>
						<div className="card p1">
							<p>
								{ data?.body }
							</p>
						</div>
					</div>			
				</div>
			}
		</div>
		
	);
}
export default DetailsView;
