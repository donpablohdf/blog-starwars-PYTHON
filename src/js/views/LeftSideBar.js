import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	const { store } = useContext(Context);
	const itemsMenu =Object.keys(store.sections.result)

	
	return(
		<div className="me-2 ">
			<div className="d-inline-flex shadow m-2" >
				<ul className="dropdown-menu dropdown-menu-dark d-block position-static   shadow w-220px">
					{
					itemsMenu.map
					(
						(opcion, index) => 
					<li key={index}>
						<Link className="dropdown-item d-flex gap-2 align-items-end p-3" 
						to={"/datoshome/" + opcion}>{opcion.toUpperCase()}</Link>
					</li>
					)
					}
				</ul>
			</div>
		</div>
	)
	
};
