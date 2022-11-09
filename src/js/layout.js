import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // version 6.4.2

import { Home } from "./views/home";
import { CardDetail } from "./views/cardDetail";
import injectContext from "./services/appContext";
import { DatosHome } from "./views/datosHome";

import { Navbar } from "./component/navBar";
import { LeftSideBar } from "./views/leftSideBar";

const Layout = () => {
	// const basename se usa cuando su proyecto se publica en un subdirectorio y no en la raíz del dominio
	// puede establecer el nombre base en el archivo .env ubicado en la raíz de este proyecto, por ejemplo: BASENAME=/subdirectorio-publicacion/
	
	const basename = process.env.BASENAME || "BASENAME=/";

	return (
		<>
			<BrowserRouter basename={basename}>
					<Navbar />
					<div className="d-flex">
						<LeftSideBar />
						<Routes>
							<Route path="/" element={<Home />} /> 
							<Route exact path="/datoshome/:seccion" element={<DatosHome />} />
							<Route path="/detail/:seccion/:elID" element={<CardDetail />} />
							<Route />
							
							
						</Routes>
					</div>
					
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
