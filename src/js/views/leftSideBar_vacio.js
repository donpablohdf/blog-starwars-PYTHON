import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	const [itemsMenu, setItemsMenu]=useState(["Cargando"])

	const { store, actions } = useContext(Context);
	// //saber si existe el objeto sections en store y si no crearlo 
	// //llamando a la funcion actions.construirObjeto(objeto)
	
	useEffect(() => {
		// Pido a éste una promesa
		if(!store.hasOwnProperty("sections")){
			const traeDatos = () => {//store["sections"] = new Object()
				return actions.traeDatosAPI('https://www.swapi.tech/api/', 'sections')
			}
			
			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(traeDatos()) // prometo que traigo datos del obj
				})
			}
			cumplePromesa().then((datos) => 
			{ // la promesa se cumple y muestro los datos
				const convertir = Object.keys(datos.result)
				setItemsMenu(convertir)
				
				}
				)
		}else{
			console.log("Lo coge de la store")
			const convertir = Object.keys(store.sections.result)
			setItemsMenu(convertir)
		}
	}, [])

	return(
		<div className="me-2 ">
			<div className="d-inline-flex shadow m-2" >
				<ul className="dropdown-menu dropdown-menu-dark d-block position-static   shadow w-220px">
					{
					itemsMenu?.map
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
