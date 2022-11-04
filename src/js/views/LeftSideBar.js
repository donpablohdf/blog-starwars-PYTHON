import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";


export const LeftSideBar = () => {
	const { store, actions } = useContext(Context);
	//saber si existe el objeto sections en store y si no crearlo 
	//llamando a la funcion actions.construirObjeto(objeto)
	const creaDatos = (data) => {
		return Object.keys(data.result)
		
	}
	
	useEffect(() => {
		// Pido a este el favor
		const traeDatos = () => {
			return actions.traeDatosAPI('https://www.swapi.tech/api/', 'sections')
		}
		
			store["sections"] = new Object()
			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(traeDatos()) //le prometo que traigo datos del obj
				})
			}
		cumplePromesa().then((datos) => {
			const mete = Object.keys(datos)
			return(
				<div className="me-2 ">
					<div className="d-inline-flex shadow m-2" >{console.log(mete)}
						<ul className="dropdown-menu dropdown-menu-dark d-block position-static   shadow w-220px">
							{
							mete.map
							(
								(opcion, index) => 
							<li key={index}>
								<Link className="dropdown-item d-flex gap-2 align-items-end p-3" 
								to={"/datoshome/" + opcion}>{opcion}</Link>
							</li>
							)
							}
						</ul>
					</div>
				</div>
		)
		}
			)
		// NO BORRAR	// return () => { datos }
	}, [store])

	

};
