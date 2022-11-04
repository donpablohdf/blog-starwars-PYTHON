import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	const { store, actions } = useContext(Context);

	//saber si existe el objeto sections en store y si no crearlo 

	//llamando a la funcion actions.construirObjeto(objeto)

	// try {
	// 	actions.construirObjeto("sections")
	// }
	// catch {
	// 	console.log("no se ha podido crear el objeto sections")
	// 	// const itemsMenu =Object.keys(store.sections.result)
	// }
	// finally {
	// useEffect(() => {
	// 	actions.llamadaGET('https://www.swapi.tech/api/', 'sections')

	// }, [])
	
	//store["hola"]  = new Object()
	
	if(!store["sections"]){
		//console.log("NO existe el objeto "+ objeto +" en el store")
		new Promise(function(resolve, reject) {
			resolve(store["sections"] = new Object())
		}).then(function(value) {
			console.log(value);
			actions.llamadaGET('https://www.swapi.tech/api/', 'sections')
		}, function(reason) {
			console.log(reason); // Error!
		}).then( () =>{
			const itemsMenu =Object.keys(store.sections.result)
			return itemsMenu
			}
		)
		

		//actions.llamadaGET('https://www.swapi.tech/api/', 'sections')
	}
	

	console.table(store)
	

	

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
