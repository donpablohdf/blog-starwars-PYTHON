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



		},
		sections: [
			{ "message": "ok", "result": { "films": "https://www.swapi.tech/api/films", "people": "https://www.swapi.tech/api/people", "planets": "https://www.swapi.tech/api/planets", "species": "https://www.swapi.tech/api/species", "starships": "https://www.swapi.tech/api/starships", "vehicles": "https://www.swapi.tech/api/vehicles" } }
		],
		films : { 
			"message": "ok", 
			"result": 
			[
				{ 
					"properties": 
					{ 
						"characters": 
							["https://www.swapi.tech/api/people/1", 
							"https://www.swapi.tech/api/people/2", 
							"https://www.swapi.tech/api/people/3", 
							"https://www.swapi.tech/api/people/4", 
							"https://www.swapi.tech/api/people/5", 
							"https://www.swapi.tech/api/people/6", 
							"https://www.swapi.tech/api/people/7", 
							"https://www.swapi.tech/api/people/8", 
							"https://www.swapi.tech/api/people/9", 
							"https://www.swapi.tech/api/people/10", 
							"https://www.swapi.tech/api/people/12", 
							"https://www.swapi.tech/api/people/13", 
							"https://www.swapi.tech/api/people/14", 
							"https://www.swapi.tech/api/people/15", 
							"https://www.swapi.tech/api/people/16", 
							"https://www.swapi.tech/api/people/18", 
							"https://www.swapi.tech/api/people/19", 
							"https://www.swapi.tech/api/people/81"],
						"planets": 
							["https://www.swapi.tech/api/planets/1", 
							"https://www.swapi.tech/api/planets/2", 
							"https://www.swapi.tech/api/planets/3"], 
						"starships":
							["https://www.swapi.tech/api/starships/2", 
							"https://www.swapi.tech/api/starships/3", 
							"https://www.swapi.tech/api/starships/5", 
							"https://www.swapi.tech/api/starships/9", 
							"https://www.swapi.tech/api/starships/10", 
							"https://www.swapi.tech/api/starships/11", 
							"https://www.swapi.tech/api/starships/12", 
							"https://www.swapi.tech/api/starships/13"],
						"vehicles": 
							["https://www.swapi.tech/api/vehicles/4", 
							"https://www.swapi.tech/api/vehicles/6", 
							"https://www.swapi.tech/api/vehicles/7", 
							"https://www.swapi.tech/api/vehicles/8"],
						"species": 
							["https://www.swapi.tech/api/species/1", 
							"https://www.swapi.tech/api/species/2", 
							"https://www.swapi.tech/api/species/3", 
							"https://www.swapi.tech/api/species/4", 
							"https://www.swapi.tech/api/species/5"],
						"created": "2022-11-01T02:19:27.788Z", 
						"edited": "2022-11-01T02:19:27.788Z", 
						"producer": "Gary Kurtz, Rick McCallum", 
						"title": "A New Hope", 
						"episode_id": 4,
						"director": "George Lucas", 
						"release_date": "1977-05-25", 
						"opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
						"url": "https://www.swapi.tech/api/films/1" 
					}, 
					"description": "A Star Wars Film", 
					"_id": "5f63a117cf50d100047f9762", 
					"uid": "1", 
					"__v": 0 
				}, 
					
				{ 
					"properties": 
					{ 
						"characters": 
							["https://www.swapi.tech/api/people/1", 
							"https://www.swapi.tech/api/people/2", 
							"https://www.swapi.tech/api/people/3", 
							"https://www.swapi.tech/api/people/4", 
							"https://www.swapi.tech/api/people/5", 
							"https://www.swapi.tech/api/people/10", 
							"https://www.swapi.tech/api/people/13", 
							"https://www.swapi.tech/api/people/14", 
							"https://www.swapi.tech/api/people/18", 
							"https://www.swapi.tech/api/people/20", 
							"https://www.swapi.tech/api/people/21", 
							"https://www.swapi.tech/api/people/22", 
							"https://www.swapi.tech/api/people/23", 
							"https://www.swapi.tech/api/people/24", 
							"https://www.swapi.tech/api/people/25", 
							"https://www.swapi.tech/api/people/26"],
						"planets": 
							["https://www.swapi.tech/api/planets/4", 
							"https://www.swapi.tech/api/planets/5", 
							"https://www.swapi.tech/api/planets/6", 
							"https://www.swapi.tech/api/planets/27"],
						"starships": 
							["https://www.swapi.tech/api/starships/3", 
							"https://www.swapi.tech/api/starships/10", 
							"https://www.swapi.tech/api/starships/11", 
							"https://www.swapi.tech/api/starships/12", 
							"https://www.swapi.tech/api/starships/15", 
							"https://www.swapi.tech/api/starships/17", 
							"https://www.swapi.tech/api/starships/21", 
							"https://www.swapi.tech/api/starships/22", 
							"https://www.swapi.tech/api/starships/23"],
						"vehicles":
							["https://www.swapi.tech/api/vehicles/8", 
							"https://www.swapi.tech/api/vehicles/14", 
							"https://www.swapi.tech/api/vehicles/16", 
							"https://www.swapi.tech/api/vehicles/18", 
							"https://www.swapi.tech/api/vehicles/19", 
							"https://www.swapi.tech/api/vehicles/20"],
						"species":
							["https://www.swapi.tech/api/species/1", 
							"https://www.swapi.tech/api/species/2", 
							"https://www.swapi.tech/api/species/3", 
							"https://www.swapi.tech/api/species/6", 
							"https://www.swapi.tech/api/species/7"], 
						"created": "2022-11-01T02:19:27.788Z", 
						"edited": "2022-11-01T02:19:27.788Z", 
						"producer": "Gary Kurtz, Rick McCallum", 
						"title": "The Empire Strikes Back", 
						"episode_id": 5,
						"director": "Irvin Kershner", 
						"release_date": "1980-05-17", 
						"opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....", 
						"url": "https://www.swapi.tech/api/films/2" 
					}, 
					"description": "A Star Wars Film", 
					"_id": "5f63a117cf50d100047f9763", 
					"uid": "2", 
					"__v": 0 
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
		favorites: {},
		variables: {
			urlHost: location.protocol + '//' + location.host + '/',

		}
	};
};

export default getState;
