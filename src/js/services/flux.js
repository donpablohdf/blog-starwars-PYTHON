const getState = ({ getStore, getActions, setStore, newInStore }) => {
	return {
		store: {
			favoritos: [{id:1, clase: "films", title:"A New Hope"}, {id:2, clase: "films", title:"The Empire Strikes Back"} ],
			// favoritos: {},
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
						const data = await response.json()
						let llenar= {}
						llenar[destino] = data
						await setStore(llenar)
						return data
					}
			},

			construirObjeto:  (url, objeto) => {
				const datosStore = getStore();
				if(!datosStore.hasOwnProperty(objeto)){
					console.log("NO existe el objeto "+ objeto +" en el store")
					const cumplePromesa = () => {
						return new Promise((resolve, reject) => {
							resolve(()=>{
								//datosStore[objeto] = new Object() // creo el array en store
								return getActions().traeDatosAPI(url, objeto) // prometo que traigo datos del obj
							}) 
						})
					}
					cumplePromesa().then((datos) => {
						return datos// tengo que meter los datos recibidos en un useState del componete que los recibe para poder renderizarlo en el return
						
					}
						)
					
				}else{
					return datosStore[objeto]
				}

			},
			addFavorite: () =>{

			},
			delFavorite: () =>{
				
			},
		},
		
	};
};

export default getState;
