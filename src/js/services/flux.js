const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "PRIMER ELEMENTO en flux.js => store.demo",
					background: "white",
					initial: "white"
				},
				{
					title: "SEGUNDO ELEMENTO en flux.js => store.demo",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions para llamar a una función dentro de una función
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
			
				/** para meter los datos de la API
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => { //ejemplo de función
				//get the store
				const datosStore = getStore();

				// map a store.demo para buscar el índice respectivo y cambiar su color
				const demo = datosStore.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		},
		variables: {
			urlHost: location.protocol + '//' + location.host,
			windowHREF: window.location.href,
		}
	};
};

export default getState;
