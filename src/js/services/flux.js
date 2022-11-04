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
			traeDatosAPI: async (url, destino) => {
				// para meter los datos de la API
					const opcionesGET = { method: 'GET', redirect: 'follow' }
					const response =  await fetch(url, opcionesGET)
					if(!response.ok){
						return "No hay response en el GET de " +destino
					}else{
						const data =  response.json()
						let llenar= {}
						llenar[destino] = data
						setStore(llenar)
						return data
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

			construirObjeto:  (url, objeto) => {
				const datosStore = getStore();
				if(!datosStore.hasOwnProperty(datosStore, objeto)){

				// 	console.log("SI existe el objeto "+ objeto +" en el store")
				// 	//devuelvo el objeto
				// 	return datosStore[objeto]
					
				// }else{ //construir el objeto en store
					
					const traeDatos = () => {
						return getActions().traeDatosAPI(url, objeto)
					}
					
					datosStore[objeto] = new Object()
					const cumplePromesa = () => {
						return new Promise((resolve, reject) => {
							resolve(traeDatos()) // prometo que traigo datos del obj
						})
					}
					cumplePromesa().then((datos) => {
						setStore({ [objeto]: datos }) // la promesa se cumple y muestro los datos
						return datos// tengo que meter los datos recibidos en un useState del componete que los recibe para poder renderizarlo en el return
						
					}
						)
					
				}else{
					return datosStore[objeto]
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
		},
		
	};
};

export default getState;
