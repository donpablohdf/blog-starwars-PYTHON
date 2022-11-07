import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";
import "../../styles/DatosHome.css";

export const DatosHome = props => {
	const params = useParams();
	const seccion = params.seccion
	
	const {store , actions} = useContext(Context);
	let datosMostrar
	let newData = {}

	let descripcion=""
	const [objDatos, setObjDatos] =useState(["Cargando.."])
	useEffect(() => {
		// Pido a éste una promesa
		let transDatos=[]
		if(!store.hasOwnProperty(seccion)){
			const traeDatos = () => {
				return actions.traeDatosAPI('https://www.swapi.tech/api/'+seccion, seccion)
			}
			
			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(traeDatos()) // prometo que traigo datos del obj
				})
			}

			cumplePromesa().then((datos) => 
			{ // la promesa se cumple y muestro los datos
				
				if (seccion==="films") {
					datosMostrar= datos.result
					datosMostrar.map((dato) =>{
						{ 
							newData= {
								uid: dato.uid,
								title: dato["properties"].title,
								desc: dato["properties"].opening_crawl.slice(0,90) +"...."
							}
							transDatos.push(newData)
			
						}
					})
					setObjDatos(transDatos)
				}else if (seccion!=""){
					datosMostrar= datos.results	
					datosMostrar.map((dato) =>
						{
							{ 
								
								newData= { uid: dato.uid,title: dato.name, desc: descripcion}
								transDatos.push(newData)
								
							}
						}
					)
					setObjDatos(transDatos)
			
				}		
			}
			)
		}else{
			if (seccion==="films") {
				datosMostrar= store[seccion].result
				datosMostrar.map((dato) =>{
					{ 
						newData= {
							uid: dato.uid,
							title: dato["properties"].title,
							desc: dato["properties"].opening_crawl.slice(0,90) +"...."
						}
						transDatos.push(newData)
		
					}
				})
				setObjDatos(transDatos)
			}else if (seccion!=""){
				datosMostrar= store[seccion].results	
				datosMostrar.map((dato) =>
					{
						{ 
							
							newData= { uid: dato.uid,title: dato.name, desc: descripcion}
							transDatos.push(newData)
							
							
						}
					}
				)
				setObjDatos(transDatos)
			}		
		}
	}, [seccion])


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
								<Link
						to={"/detail/" + seccion+"/"+dato.uid}>
								<button className="btn btn-primary">Ver ficha</button></Link>
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
