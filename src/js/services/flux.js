const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			// favoritos: [{ id: 1, clase: "films", title: "A New Hope", encuentra: "films1" }, { id: 2, clase: "films", title: "The Empire Strikes Back", encuentra: "films2" }],
			favoritos: [],
		},
		actions: {
			// Use getActions() para llamar a una función dentro de una función de aquí.
			/***** FETCH *********************************************************/
			traeDatosAPI: async (url, destino) => {
				// para meter los datos de la API
				const opcionesGET = { method: 'GET', redirect: 'follow' }
				const response = await fetch(url, opcionesGET)
				if (!response.ok) {
					return "No hay response en el GET de " + destino
				} else {
					const data = await response.json()
					let llenar = {}
					llenar[destino] = data
					await setStore(llenar)
					return data
				}
			},

			construirObjeto: (url, objeto) => {
				const datosStore = getStore();
				if (!datosStore.hasOwnProperty(objeto)) {
					console.log("NO existe el objeto " + objeto + " en el store")
					const cumplePromesa = () => {
						return new Promise((resolve, reject) => {
							resolve(() => {
								//datosStore[objeto] = new Object() // creo el array en store
								return getActions().traeDatosAPI(url, objeto) // prometo que traigo datos del obj
							})
						})
					}
					cumplePromesa().then((datos) => {
						return datos// tengo que meter los datos recibidos en un useState del componete que los recibe para poder renderizarlo en el return

					}
					)

				} else {
					return datosStore[objeto]
				}

			},
			addFavorite: (secc, uid, atitle) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === secc + uid) { esta = true }})
				}
				if (!esta) {
					const newFav = { id: uid, clase: secc, title: atitle, encuentra: secc + uid }
					const result = store.favoritos.concat(newFav)
					setStore({ favoritos: result })
				}
			},
			delFavorite: (index) => {
				const store = getStore()
				const result = store.favoritos.filter(dato => dato.encuentra !== index);
				setStore({ favoritos: result })
			},
			esFavorite: (index) => {
				const store = getStore()
				let esta = false
				if (Object.keys(store.favoritos).length === 0) { esta = false } else {
					store.favoritos.map((dato) => { if (dato.encuentra === index) { esta = true }})
				}
				return esta
			},

		},

	};
};

export default getState;