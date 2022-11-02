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
            datosMostrar.map((dato) =>
				<div className="card d-inline-flex m-3" key={dato.uid} >
					<img src="https://via.placeholder.com/200" className="card-img-top" alt="fake" />
					<div className="card-body d-flex flex-column align-content-stretch flex-wrap ">
						<h6 className="card-title">{dato["properties"].title}</h6>
						<p className="card-text">{dato["properties"].opening_crawl.slice(0,40)}....</p>
						<div className="d-flex d-flex justify-content-between">
							<button className="btn btn-primary"><i className="far fa-heart"></i></button>
							<button className="btn btn-primary">Ver ficha</button>
						</div>
						
					</div>
				</div>
            )
	);
};

DatosHome.propTypes = {
	match: PropTypes.object
};
// {store.demo[params.theid].title}