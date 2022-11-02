import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../services/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<img className="mt-3 position-absolute top-50 start-50 translate-middle img-fluid opacity-25" src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" height="340"/>	
			<ul className="list-group">
				<li className="list-group-item d-flex justify-content-between">Recorre el array store.demo que está en flux.js</li>
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Ver, en flux.js, las funciones posibles en el objeto actions
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								changeColor de actions en flux.js
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Ver componente Home</button>
			</Link>
		</div>
	);
};
