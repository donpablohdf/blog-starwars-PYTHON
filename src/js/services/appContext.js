import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);


// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions, // en flux.js
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			//Debe hacer sus solicitudes  de API aquí. No use setState() para guardar datos en "store" en su lugar usar funciones, como esta:
			// * state.actions.llamadaGET()
			// que se encuentran en el archivo 
			state.actions.llamadaGET('https://www.swapi.tech/api/', 'sections')
			// state.actions.llamadaGET('https://www.swapi.tech/api/films', 'films')
			// state.actions.llamadaGET('https://www.swapi.tech/api/people', 'people')
			// state.actions.llamadaGET('https://www.swapi.tech/api/planets', 'planets')
			// state.actions.llamadaGET('https://www.swapi.tech/api/species', 'species')
			// state.actions.llamadaGET('https://www.swapi.tech/api/starships', 'starships')
			// state.actions.llamadaGET('https://www.swapi.tech/api/vehicles', 'films')
			
		}, []);

		// El valor inicial para el contexto ya no es nulo, sino el estado (state) actual de este componente ,
 		// el contexto ahora tendrá disponibles las funciones getStore, getActions y setStore, 
		// porque fueron declaradas sobre el estado de este componente const [state, setState] = ....
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
