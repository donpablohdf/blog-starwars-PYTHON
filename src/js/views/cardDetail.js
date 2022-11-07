import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";
let transDatos

export const CardDetail = props => {
	const { store, actions } = useContext(Context);
	const [datosFicha, setDatosFicha]=useState(["Cargando"])
	const params = useParams();
	let elID= params.elID
	let laSeccion= params.seccion
	useEffect(() => {
	
		// Pido a éste una promesa
		if(!store.hasOwnProperty(laSeccion+""+elID)){
			const traeDatos = () => {
				return actions.traeDatosAPI('https://www.swapi.tech/api/'+laSeccion+"/"+elID, laSeccion+elID)
			}
			
			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(traeDatos()) // prometo que traigo datos del obj
				})
			}
			cumplePromesa().then((datos) => 
				{ // la promesa se cumple y muestro los datos
					transDatos = datos.result
					transDatos =transDatos.properties
					setDatosFicha(transDatos)
					
				}
			)
		}else{
			transDatos = store[laSeccion+""+elID]
			transDatos = transDatos.result
			transDatos = transDatos.properties
			setDatosFicha(transDatos)
			console.log(datosFicha)
		}
	}, [laSeccion])
	
	// https://www.swapi.tech/api/films/1
	return (
		<div className="jumbotron p-3">
			<img src="https://via.placeholder.com/450" className="d-inline-flex" alt="fake" />
			<h1 className="display-4">{(datosFicha.title) ? datosFicha.title: datosFicha.name}</h1>
			<h6>{datosFicha.description}</h6>
		</div>
	);
};

CardDetail.propTypes = {
	match: PropTypes.object
};
