import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	// const { store, actions } = useContext(Context);
	// //saber si existe el objeto sections en store y si no crearlo 
	// //llamando a la funcion actions.construirObjeto(objeto)
		
	// useEffect(() => {
	// 	// Pido a éste una promesa
	// 	const traeDatos = () => {
	// 		return actions.traeDatosAPI('https://www.swapi.tech/api/', 'sections')
	// 	}
		
	// 	store["sections"] = new Object()
	// 	const cumplePromesa = () => {
	// 		return new Promise((resolve, reject) => {
	// 			resolve(traeDatos()) // prometo que traigo datos del obj
	// 		})
	// 	}
	// 	cumplePromesa().then((datos) => { // la promesa se cumple y muestro los datos
	// 		const itemsMenu = Object.keys(datos.result)
	// 		console.log(itemsMenu)
			return(
				<div className="me-2 ">
					<div className="d-inline-flex shadow m-2" >
						<ul className="dropdown-menu dropdown-menu-dark d-block position-static   shadow w-220px"><li className="dropdown-item d-flex gap-2 align-items-end p-3" >HHHHHH</li>
							{/* {
							itemsMenu?.map
							(
								(opcion, index) => 
							<li key={index}> 
								<Link 
								to={"/datoshome/" + opcion}>{opcion.toUpperCase}AAAA</Link>
							</li>
							)
							
							} */}
						</ul>
					</div>
				</div>
		)
	// 	}
	// 		)
	// 	// NO BORRAR	// return () => { datos }
	// }, [])

	

};
