import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";
//import logo from "/src/img/logoStartWars.png"

export const Navbar = () => {
	
	const { variables } = useContext(Context);
	
	return (
		<nav className="navbar bg-secondary text-bg-secondary p-3 d-flex sticky-top">
			<div className="pl-5"><Link to="/">
				{/* <img src={logo} height={50} /> */}
				</Link></div>
			<div className="derecha">Favoritos</div>
			
		</nav>
	);
};
