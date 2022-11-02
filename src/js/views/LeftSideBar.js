import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	const { sections, actions } = useContext(Context);
	const secciones = Object.keys(sections[0].result)
	return(
		<div>
			<div className="d-inline-flex shadow m-2" >
				<ul className="dropdown-menu dropdown-menu-dark d-block position-static   shadow w-220px">
					{
					secciones.map
					(
						(seccion, index) => 
					<li key={index}>
						<Link className="dropdown-item d-flex gap-2 align-items-end p-3" to={"/DatosHome/" + seccion}>{seccion.toUpperCase()}</Link>
					</li>
					)
					}
				</ul>
			</div>
		</div>
	)
	
};
