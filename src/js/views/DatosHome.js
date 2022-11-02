import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";
import "../../styles/DatosHome.css";

export const DatosHome = props => {
	const params = useParams();
	const seccion = params.seccion
	
	const {store} = useContext(Context);
	const {actions} = useContext(Context);
	let datosMostrar
	let objDatos =[]
	let newData = {}
	let descripcion="Hay que sacarla"

	useEffect(() => { // actions son las funciones creadas en flux.js
		actions.llamadaGET("https://www.swapi.tech/api/"+seccion,seccion)
		if(seccion!=="films"){

		}
	}, [seccion])

	if (seccion==="films") {
		datosMostrar= store[seccion].result
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
	}else if (seccion!=""){
		datosMostrar= store[seccion].results	
		datosMostrar.map((dato) =>
			{
				{ 
					
					newData= { uid: dato.uid,title: dato.name, desc: descripcion}
					objDatos.push(newData)
					
				}
			}
		)

	}

	return (
		<>
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
		</>
	)
}

DatosHome.propTypes = {
	match: PropTypes.object
};
// {store.demo[params.theid].title}