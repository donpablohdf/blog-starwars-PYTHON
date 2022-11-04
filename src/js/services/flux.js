const getState = ({ getStore, getActions, setStore, newInStore }) => {
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
			// sections: {
			// 	"message": "ok",
			// 	"result": {
			// 		"Cargando...": "",
			// 	}
			// },
			films : {
				"message": "NO",
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
			cargados: {
				
	
			}

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
						throw "No hay response en el GET de " +destino
					}
					const data = await response.json()

					let llenar= {}
					llenar[destino] = data
					setStore(llenar)

				} catch (error){
					throw "Falló el GET " + error
				}
									
				
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
			},

			construirObjeto:  (objeto) => {
				const datosStore = getStore();
				if(datosStore[objeto]){
					console.log("SI existe el objeto "+ objeto +" en el store")
					return true
				}else{ //construir el objeto en store
					console.log("NO existe el objeto "+ objeto +" en el store. CREAR")
					newInStore(objeto)
					
				}

			},
			guardaCargado: (index, color) => { //ejemplo de función
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
			llamadaGET:  (url, destino) => {
				//si ya se encuentra cargada, no ejecutar loadSomeData
				 getActions().loadSomeData(url,destino)
			}
		},
		
	};
};

export default getState;
