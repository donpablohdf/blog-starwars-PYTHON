import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";
import "../../styles/navBar.css"
import logo from "/src/img/logoStartWars.png"



export const Navbar = () => {
	const { store, actions } = useContext(Context);
	
	const hayFav = Object.keys(store.favoritos).length
	return (
		<nav className="navbar bg-secondary text-bg-secondary p-3 d-flex sticky-top">
			<div className="pl-5 "><Link to="/"><img src={logo} height={50} /></Link></div>

			<div className="dropdown d-flex flex-row-reverse anchoFijo">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">Favoritos {hayFav}</button>
				<div className="overflow-visible">
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{ (hayFav!==0) ? store.favoritos.map((dato, index) =>
					<li key={index}  className="d-flex flex-row align-items-center">
						<button onClick={() =>actions.delFavorite(dato.clase+dato.id)} type="button" className="btn-close btn-close-width p-3" aria-label="Delete"></button>
						<Link className="dropdown-item"	to={"/detail/" + dato.clase+"/"+dato.id}>{dato.title}</Link>
					</li>
							
				): <li className="dropdown-item">Nada en favoritos</li>}
				</ul>
				</div>
			</div>
		</nav>
	);
};
