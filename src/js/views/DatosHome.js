import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";

export const DatosHome = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">Este texto está en single.js : {store.demo[params.theid].title}</h1>
		</div>
	);
};

DatosHome.propTypes = {
	match: PropTypes.object
};
