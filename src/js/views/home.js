import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // version 6.4.2

import { Context } from "../services/appContext";
import { DatosHome } from "./DatosHome";

import "../../styles/home.css";

let secciones
export const Home = () => {
	const { sections, actions } = useContext(Context);
	secciones = Object.keys(sections[0].result)
	return(
	<div className="row bg-info">
		{/* MENU IZQUIERDO */}
		<div className="col-2" >
			<ul className="dropdown-menu dropdown-menu-dark d-block position-static mx-0 border-0 shadow w-220px">
				{
				secciones.map
				(
					(seccion, index) => 
				<li className="" key={index}>
					<Link className="dropdown-item d-flex gap-2 align-items-end" to={"/single/" + seccion}>{seccion.toUpperCase()}</Link>
				</li>
				)
				}
			</ul>
		</div>
		{/* DATOS */}
		<div></div>
	</div>
	)
	
};
