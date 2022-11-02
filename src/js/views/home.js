import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";
import "../../styles/home.css";

export const Home = () => {
	
	const { actions} = useContext(Context);
	//datosMostrar= sections["result"]
	// actions.llamadaGET("https://www.swapi.tech/api/people/2", "sections")
	//const descripcion = store.tmp_desc["result"].description

	//console.table("donPablo - ", store.tmp_desc)
	// datosMostrar.map((dato) =>
	// 		{
	// 			// llamada a la API con la url
				
	// 			//actions.loadSomeData("https://www.swapi.tech/api/people/1")
				
				
	// 		}
	// 	)
	return true;
	
};
