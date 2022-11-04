import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	const { store, actions } = useContext(Context);
	//saber si existe el objeto sections en store y si no crearlo 
	//llamando a la funcion actions.construirObjeto(objeto)
		const [valor, setValor]=useState(["Cargando"])
	useEffect( () => {
		//Pido a éste una promesa
		const datosSecciones = () => {
			return actions.construirObjeto('https://www.swapi.tech/api/', 'sections')
		}
		
		const promesaDeDatos = () => {
			return new Promise((resolve, reject) => {
				resolve(datosSecciones()) // prometo que traigo datos del obj
			})
		}
		promesaDeDatos().then((datos) => { // la promesa se cumple y muestro los datos
			console.log(datos)
			//const itemsMenu = Object.keys(datos.result)
			//setValor(itemsMenu) // tengo que meter los datos recibidos en una variable externa a la promesa para poder renderizarla
			
		}
			)
		
	}, [])

// 	return(
// 		<div className="me-2 ">
// 			<div className="d-inline-flex shadow m-2" >
// 				<ul className="dropdown-menu dropdown-menu-dark d-block position-static shadow w-220px">
// 					{
// 					valor?.map
// 					(
						
// 						(opcion, index) => 
// 					<li key={index}  > 
// 						<Link className="dropdown-item d-flex gap-2 align-items-end p-3"
// 						to={"/datoshome/" + opcion}>{opcion.toUpperCase()}</Link>
// 					</li>
// 					)
					
// 					}
// 				</ul>
// 			</div>
// 		</div>
// )

};
