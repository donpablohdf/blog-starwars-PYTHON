import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../services/appContext";


export const CardDetail = props => {
	const { store, actions } = useContext(Context);

	const [datosPorSeccion, setDatosPorSeccion] = useState({})

	const params = useParams();
	let elID = params.elID
	let laSeccion = params.seccion

	const filtraDatos= (datos, seccion) =>{
		switch (seccion) {
			case 'films':
				setDatosPorSeccion({
					title: datos.title,
					description: datos.opening_crawl
				})
			break;
			case 'people':
				const linker= datos.homeworld.replace("https://www.swapi.tech/api/", "")
				setDatosPorSeccion({
					title: datos.name,
					description: 
					<ul>
						<li>Height: {datos.height}</li>
						<li>Mass: {datos.mass}</li>
						<li>Hair color: {datos.hair_color}</li>
						<li>Skin color: {datos.skin_color}</li>
						<li>Eye color: {datos.eye_color}</li>
						<li>Birth year: {datos.birth_year}</li>
						<li>Gender: {datos.gender}</li>
						<li><Link to={"/detail/"+linker}>Home world</Link></li>
					</ul>
				})
			break;
			case 'planets':
				setDatosPorSeccion({
					title: datos.name,
					description: 
					<ul>
						<li>Diameter: {datos.diameter}</li>
						<li>Rotation period: {datos.rotation_period}</li>
						<li>Orbital period: {datos.orbital_period}</li>
						<li>Gravity: {datos.gravity}</li>
						<li>Population: {datos.population}</li>
						<li>Climate: {datos.climate}</li>
						<li>Terrain: {datos.terrain}</li>
						<li>Surface water: {datos.surface_water}</li>
					</ul>
				})
			break;
			case 'species':
				const linker2= datos.homeworld.replace("https://www.swapi.tech/api/", "")
				setDatosPorSeccion({
					title: datos.name,
					description: 
					<ul>
						<li>Classification: {datos.classification}</li>
						<li>Designation: {datos.designation}</li>
						<li>Average height: {datos.average_height}</li>
						<li>Average lifespan: {datos.average_lifespan}</li>
						<li>Hair colors: {datos.hair_colors}</li>
						<li>Skin colors: {datos.skin_colors}</li>
						<li>Eye colors: {datos.eye_colors}</li>
						<li>Language: {datos.language}</li>
						<li><Link to={"/detail/"+linker2}>Home world</Link></li>
					</ul>
				})
			break;
			case 'starships':
				setDatosPorSeccion({
					title: datos.name,
					description: 
					<ul>
						<li>Model: {datos.model}</li>
						<li>Starship class: {datos.starship_class}</li>
						<li>Manufacturer: {datos.manufacturer}</li>
						<li>Cost in credits: {datos.cost_in_credits}</li>
						<li>Length: {datos.length}</li>
						<li>Crew: {datos.crew}</li>
						<li>Passengers: {datos.passengers}</li>
						<li>Max atmosphering speed: {datos.max_atmosphering_speed}</li>
						<li>Hyperdrive rating: {datos.hyperdrive_rating}</li>
						<li>MGLT: {datos.MGLT}</li>
						<li>Cargo capacity: {datos.cargo_capacity}</li>
						<li>Consumables: {datos.consumables}</li>
					</ul>
				})
			break;
			case 'vehicles':
				setDatosPorSeccion({
					title: datos.name,
					description: 
					<ul>
						<li>Model: {datos.model}</li>
						<li>Vehicle class: {datos.vehicle_class}</li>
						<li>Manufacturer: {datos.manufacturer}</li>
						<li>Cost in credits: {datos.cost_in_credits}</li>
						<li>Length: {datos.length}</li>
						<li>Crew: {datos.crew}</li>
						<li>Passengers: {datos.passengers}</li>
						<li>Max atmosphering speed: {datos.max_atmosphering_speed}</li>
						<li>Cargo capacity: {datos.cargo_capacity}</li>
						<li>Consumables: {datos.consumables}</li>
					</ul>
				})
			break;
			
		}
	}

	useEffect(() => {
		let transDatos =""
		// Pido a éste una promesa
		if (!store.hasOwnProperty(laSeccion + "" + elID)) {
			const traeDatos = () => {
				return actions.traeDatosAPI('https://www.swapi.tech/api/' + laSeccion + "/" + elID, laSeccion + elID)
			}

			const cumplePromesa = () => {
				return new Promise((resolve, reject) => {
					resolve(traeDatos()) // prometo que traigo datos del obj
				})
			}
			cumplePromesa().then((datos) => { // la promesa se cumple y muestro los datos
				transDatos = datos.result
				transDatos = transDatos.properties
				filtraDatos(transDatos,laSeccion)
			}
			)
		} else {
			transDatos = store[laSeccion + "" + elID]
			transDatos = transDatos.result
			transDatos = transDatos.properties
			filtraDatos(transDatos,laSeccion)
		}
		
		
	}, [laSeccion])
	
	// https://www.swapi.tech/api/films/1
	return (
		<div className="jumbotron p-3">
			<img src="https://via.placeholder.com/450" className="d-inline-flex" alt="fake" />
			<h1 className="display-4">{datosPorSeccion.title}</h1>
			<div>{datosPorSeccion.description}</div>
		</div>
	);
};

CardDetail.propTypes = {
	match: PropTypes.object
};
