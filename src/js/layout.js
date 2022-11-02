import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // version 6.4.2
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { CardDetail } from "./views/CardDetail";
import injectContext from "./services/appContext";
import { DatosHome } from "./views/DatosHome";

import { Navbar } from "./component/Navbar";
import { LeftSideBar } from "./views/LeftSideBar";

const Layout = () => {
	// const basename se usa cuando su proyecto se publica en un subdirectorio y no en la raíz del dominio
	// puede establecer el nombre base en el archivo .env ubicado en la raíz de este proyecto, por ejemplo: BASENAME=/subdirectorio-publicacion/
	
	const basename = process.env.BASENAME || "BASENAME=/";

	return (
		<>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					
					<Navbar />
					<div className="d-flex">
						<LeftSideBar />
						<Routes>
							<Route path="/" element={<Home />} /> 
							<Route path="/DatosHome/:elID" element={<DatosHome />} />
							<Route path="/demo" element={<Demo />} />
							<Route path="/detail/:theid" element={<CardDetail />} />
						</Routes>
					</div>
				</ScrollToTop>
			</BrowserRouter>
		</>
	);
};

export default injectContext(Layout);
