import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	const { store, actions } = useContext(Context);
	
	//saber si existe el objeto sections en store y si no crearlo 
	//llamando a la funcion actions.construirObjeto(objeto)
	const [itemsMenu, setItemsMenu]=useState(["Cargando"])
	useEffect( () => {
		//console.log(actions)
		//Pido a éste una promesa
		
		setItemsMenu(actions.construirObjeto('https://www.swapi.tech/api/', 'sections'))
		
		console.log(actions.construirObjeto('https://www.swapi.tech/api/', 'sections'))
	}, [])

	return(
		<div className="me-2 ">
			<div className="d-inline-flex shadow m-2" >
				<ul className="dropdown-menu dropdown-menu-dark d-block position-static shadow w-220px">
					{
					itemsMenu?.map
					(
						
						(opcion, index) => 
					<li key={index}  > 
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
