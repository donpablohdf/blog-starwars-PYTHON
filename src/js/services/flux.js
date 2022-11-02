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
			],
			tmp_desc:{},
			sections: {
				"message": "ok",
				"result": {
					"Cargando...": "",
				}
			},
			films : {
				
				"result": [
					{
						"properties": {							
							"title": "Cargando...",
							"opening_crawl":"Cargando"					
						},
						"description": "",
						"_id": "",
						"uid": "1",
						"__v": 0
					},
				]
			},
			people: {
				"results": [
					{
						"uid": "1",
						"name": "Cargando...",
					},
				]
			},
			planets:{
				"results": [
					{
						"uid": "1",
						"name": "Cargando...",
					},
				]
			},
			species: {
				"results": [
					{
						"uid": "1",
						"name": "Cargando...",
					},
				]
			},
			starships:{
				"results": [
					{
						"uid": "1",
						"name": "Cargando...",
					},
				]
			},
			vehicles:{
				"results": [
					{
						"uid": "1",
						"name": "Cargando...",
					},
				]
			},

		},
		actions: {
			// Use getActions para llamar a una función dentro de una función de aquí. USa
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			/***** FETCH *********************************************************/
			loadSomeData: async (url, destino) => {
				// para meter los datos de la API
				try{
					const opcionesGET = { method: 'GET', redirect: 'follow' }
					const response = await fetch(url, opcionesGET)
					if(!response.ok){
						throw new getActions().networkError()
					}
					const data = await response.json()

					let llenar= {}
					llenar[destino] = data

					setStore(llenar)

				} catch (error){
					throw error
				}
									
				
			},
			networkError: () =>{ console.log ("errorFetch")},
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
			},
			llamadaGET: (url, destino) => {
				getActions().loadSomeData(url,destino)
			}
		},
		variables: {
			urlHost: location.protocol + '//' + location.host + '/',

		}
	};
};

export default getState;
