import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";

export const Navbar = () => {
	
	const { variables } = useContext(Context);
	
	return (
		<nav className="navbar bg-secondary text-bg-secondary p-3 d-flex sticky-top">
			<div className="pl-5"><Link to="/">
				{/* <img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" height={50} /> */}
				</Link></div>
			<div className="derecha">Favoritos</div>
			
		</nav>
	);
};
