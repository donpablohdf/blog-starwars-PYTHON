import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";

export const Navbar = () => {
	const { variables } = useContext(Context);
	console.log(variables)
	return (
		<nav className="navbar navbar-light bg-secondary text-bg-secondary mb-3 px-3 d-flex">
			<div className="pl-5"><Link to="/"><img src="https://github.com/donpablohdf/blog-starwars/blob/master/src/img/starWarsLogo.png" height={50} /></Link></div>
			<div className="derecha">
				<div className=""><Link to="/"><button className="btn btn-primary">Ver componente Home</button></Link></div>
				<div className="ml-auto">Favoritos</div>
			</div>
		</nav>
	);
};
