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
			//fetch().then().then(data => setStore({ "foo": data.bar }))
			// * ¡EDITA ESTO!
			// * Esta función es el equivalente a "window.onLoad", solo se ejecuta una vez durante toda la vida útil de la aplicación
			// * debe hacer sus solicitudes de ajax o buscar solicitudes de API aquí. No use setState() para guardar datos en el
			// * almacenar, en lugar de usar acciones, como esta:
			// *
			// * state.actions.loadSomeData(); <---- llamando a esta función desde las acciones flux.js
			// *
			// **/
			/**
			 * EDIT THIS!
			 * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
			 * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
			 * store, instead use actions, like this:
			 *
			 * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
			 *
			 **/
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
