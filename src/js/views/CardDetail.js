import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";

export const CardDetail = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">Este texto está en single.js : {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Ver componente Home
				</span>
			</Link>
		</div>
	);
};

CardDetail.propTypes = {
	match: PropTypes.object
};
