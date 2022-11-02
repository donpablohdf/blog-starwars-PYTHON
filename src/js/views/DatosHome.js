import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";
import "../../styles/DatosHome.css";

export const DatosHome = props => {
	const params = useParams();
	const seccion = params.elID
	
	const contexto = useContext(Context);
	const datosMostrar= contexto[seccion]["result"]
	return (
		<div class="container-fluid ">
			<div class="row d-flex">
				{datosMostrar.map((dato) =>
					<div className="card m-3 p-0 d-inline-flex anchoFijo" key={dato.uid} >
						<img src="https://via.placeholder.com/250" className="d-inline-flex" alt="fake" />
						<div className="card-body d-flex flex-column align-content-stretch flex-wrap ">
							<h6 className="card-title">{dato["properties"].title}</h6>
							<p className="card-text">{dato["properties"].opening_crawl.slice(0,40)}....</p>
							<div className="d-flex d-flex justify-content-between">
								<button className="btn btn-primary"><i className="far fa-heart"></i></button>
								<button className="btn btn-primary">Ver ficha</button>
							</div>
							
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

DatosHome.propTypes = {
	match: PropTypes.object
};
// {store.demo[params.theid].title}