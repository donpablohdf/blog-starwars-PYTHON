import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";
import "../../styles/DatosHome.css";

export const DatosHome = props => {
	const params = useParams();
	const seccion = params.elID
	
	const {store} = useContext(Context);
	const {actions} = useContext(Context);
	let datosMostrar
	let objDatos =[]
	let newData = {}
	let descripcion=""

	switch (seccion) {

	case 'films':
		datosMostrar= store.films["result"]
		datosMostrar.map((dato) =>{
			{ 
				newData= {
					uid: dato.uid,
					title: dato["properties"].title,
					desc: dato["properties"].opening_crawl.slice(0,90) +"...."
				}
				objDatos.push(newData)

			}
		})
		console.dir(objDatos);
	break;

	case 'people':
		const gente = store.people["results"]

		gente.map((dato) =>
			{
				{ 
					
					newData= { uid: dato.uid,title: dato.name, desc: descripcion}
					objDatos.push(newData)
					
				}
			}
		)

	break;
	case 'planets':
		const planetas = store.planets["results"]

		planetas.map((dato) =>
			{
				{ 
					
					newData= { uid: dato.uid,title: dato.name, desc: descripcion}
					objDatos.push(newData)
					
				}
			}
		)

	break;
	case 'species':
		const especies = store.species["results"]

		especies.map((dato) =>
			{
				{ 
					
					newData= { uid: dato.uid,title: dato.name, desc: descripcion}
					objDatos.push(newData)
					
				}
			}
		)

	break;
	case 'starships':
		const naves = store.starships["results"]
		naves.map((dato) =>
			{
				{ 
					
					newData= { uid: dato.uid,title: dato.name, desc: descripcion}
					objDatos.push(newData)
					
				}
			}
		)

	break;
	case 'vehicles':
		const vehiculos = store.vehicles["results"]
		vehiculos.map((dato) =>
			{
				{ 
					
					newData= { uid: dato.uid,title: dato.name, desc: descripcion}
					objDatos.push(newData)
					
				}
			}
		)

	break;
	default:
		console.log(`No existe la seccion`);
	}
	return (
		<div className="container-fluid ">
			<div className="row d-flex">
				{objDatos.map((dato) =>
					<div className="card mt-2 me-3  p-0 d-inline-flex anchoFijo" key={dato.uid} >
						<img src="https://via.placeholder.com/250" className="d-inline-flex" alt="fake" />
						<div className="card-body d-flex flex-column align-content-stretch flex-wrap ">
							<h6 className="card-title">{dato.title}</h6>
							<p className="card-text altoFijo">{dato.desc}</p>
							<div className="d-flex d-flex justify-content-between">
								<button className="btn btn-primary"><i className="far fa-heart"></i></button>
								<button className="btn btn-primary">Ver ficha</button>
							</div>
							
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

DatosHome.propTypes = {
	match: PropTypes.object
};
// {store.demo[params.theid].title}