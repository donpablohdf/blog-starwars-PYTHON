import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";
import logo from "/src/img/logoStartWars.png"

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [favoritos, setFavoritos] = useState()
	
	const hayFav = Object.keys(store.favoritos).length
	let fav =store.favoritos
	return (
		<nav className="navbar bg-secondary text-bg-secondary p-3 d-flex sticky-top">
			<div className="pl-5"><Link to="/">
				<img src={logo} height={50} />
			</Link></div>

			<div className="dropdown container">
				<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favoritos
				</button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
				{ (hayFav) ? fav.map((dato) =>
					<li><Link className="dropdown-item"
						to={"/detail/" + dato.clase+"/"+dato.id}>
								{dato.title}</Link></li>
							
				): ""}
				</ul>
			</div>
		</nav>
	);
};
