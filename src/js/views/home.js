import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../services/appContext";
import "../../styles/home.css";

let secciones
export const Home = () => {
	const { sections, actions } = useContext(Context);
	secciones = Object.keys(sections[0].result)
	return true
	
};
