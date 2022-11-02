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
					"films": "https://www.swapi.tech/api/films",
					"people": "https://www.swapi.tech/api/people",
				}
			},
			films : {
				"message": "ok",
				"result": [
					{
						"properties": {
							"characters": [
								"https://www.swapi.tech/api/people/1",
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
								"https://www.swapi.tech/api/people/81"
							],
							"planets": [
								"https://www.swapi.tech/api/planets/1",
								"https://www.swapi.tech/api/planets/2",
								"https://www.swapi.tech/api/planets/3"
							],
							"starships": [
								"https://www.swapi.tech/api/starships/2",
								"https://www.swapi.tech/api/starships/3",
								"https://www.swapi.tech/api/starships/5",
								"https://www.swapi.tech/api/starships/9",
								"https://www.swapi.tech/api/starships/10",
								"https://www.swapi.tech/api/starships/11",
								"https://www.swapi.tech/api/starships/12",
								"https://www.swapi.tech/api/starships/13"
							],
							"vehicles": [
								"https://www.swapi.tech/api/vehicles/4",
								"https://www.swapi.tech/api/vehicles/6",
								"https://www.swapi.tech/api/vehicles/7",
								"https://www.swapi.tech/api/vehicles/8"
							],
							"species": [
								"https://www.swapi.tech/api/species/1",
								"https://www.swapi.tech/api/species/2",
								"https://www.swapi.tech/api/species/3",
								"https://www.swapi.tech/api/species/4",
								"https://www.swapi.tech/api/species/5"
							],
							"created": "2022-11-02T00:23:11.196Z",
							"edited": "2022-11-02T00:23:11.196Z",
							"producer": "Gary Kurtz, Rick McCallum",
							"title": "A New Hope",
							"episode_id": 4,
							"director": "George Lucas",
							"release_date": "1977-05-25",
							"opening_crawl": "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.  During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.  Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....",
							"url": "https://www.swapi.tech/api/films/1"
						},
						"description": "A Star Wars Film",
						"_id": "5f63a117cf50d100047f9762",
						"uid": "1",
						"__v": 0
					},
					{
						"properties": {
							"characters": [
								"https://www.swapi.tech/api/people/1",
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
								"https://www.swapi.tech/api/people/26"
							],
							"planets": [
								"https://www.swapi.tech/api/planets/4",
								"https://www.swapi.tech/api/planets/5",
								"https://www.swapi.tech/api/planets/6",
								"https://www.swapi.tech/api/planets/27"
							],
							"starships": [
								"https://www.swapi.tech/api/starships/3",
								"https://www.swapi.tech/api/starships/10",
								"https://www.swapi.tech/api/starships/11",
								"https://www.swapi.tech/api/starships/12",
								"https://www.swapi.tech/api/starships/15",
								"https://www.swapi.tech/api/starships/17",
								"https://www.swapi.tech/api/starships/21",
								"https://www.swapi.tech/api/starships/22",
								"https://www.swapi.tech/api/starships/23"
							],
							"vehicles": [
								"https://www.swapi.tech/api/vehicles/8",
								"https://www.swapi.tech/api/vehicles/14",
								"https://www.swapi.tech/api/vehicles/16",
								"https://www.swapi.tech/api/vehicles/18",
								"https://www.swapi.tech/api/vehicles/19",
								"https://www.swapi.tech/api/vehicles/20"
							],
							"species": [
								"https://www.swapi.tech/api/species/1",
								"https://www.swapi.tech/api/species/2",
								"https://www.swapi.tech/api/species/3",
								"https://www.swapi.tech/api/species/6",
								"https://www.swapi.tech/api/species/7"
							],
							"created": "2022-11-02T00:23:11.196Z",
							"edited": "2022-11-02T00:23:11.196Z",
							"producer": "Gary Kurtz, Rick McCallum",
							"title": "The Empire Strikes Back",
							"episode_id": 5,
							"director": "Irvin Kershner",
							"release_date": "1980-05-17",
							"opening_crawl": "It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.  Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.  The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....",
							"url": "https://www.swapi.tech/api/films/2"
						},
						"description": "A Star Wars Film",
						"_id": "5f63a117cf50d100047f9763",
						"uid": "2",
						"__v": 0
					},
					{
						"properties": {
							"characters": [
								"https://www.swapi.tech/api/people/1",
								"https://www.swapi.tech/api/people/2",
								"https://www.swapi.tech/api/people/3",
								"https://www.swapi.tech/api/people/4",
								"https://www.swapi.tech/api/people/5",
								"https://www.swapi.tech/api/people/10",
								"https://www.swapi.tech/api/people/13",
								"https://www.swapi.tech/api/people/14",
								"https://www.swapi.tech/api/people/16",
								"https://www.swapi.tech/api/people/18",
								"https://www.swapi.tech/api/people/20",
								"https://www.swapi.tech/api/people/21",
								"https://www.swapi.tech/api/people/22",
								"https://www.swapi.tech/api/people/25",
								"https://www.swapi.tech/api/people/27",
								"https://www.swapi.tech/api/people/28",
								"https://www.swapi.tech/api/people/29",
								"https://www.swapi.tech/api/people/30",
								"https://www.swapi.tech/api/people/31",
								"https://www.swapi.tech/api/people/45"
							],
							"planets": [
								"https://www.swapi.tech/api/planets/1",
								"https://www.swapi.tech/api/planets/5",
								"https://www.swapi.tech/api/planets/7",
								"https://www.swapi.tech/api/planets/8",
								"https://www.swapi.tech/api/planets/9"
							],
							"starships": [
								"https://www.swapi.tech/api/starships/2",
								"https://www.swapi.tech/api/starships/3",
								"https://www.swapi.tech/api/starships/10",
								"https://www.swapi.tech/api/starships/11",
								"https://www.swapi.tech/api/starships/12",
								"https://www.swapi.tech/api/starships/15",
								"https://www.swapi.tech/api/starships/17",
								"https://www.swapi.tech/api/starships/22",
								"https://www.swapi.tech/api/starships/23",
								"https://www.swapi.tech/api/starships/27",
								"https://www.swapi.tech/api/starships/28",
								"https://www.swapi.tech/api/starships/29"
							],
							"vehicles": [
								"https://www.swapi.tech/api/vehicles/8",
								"https://www.swapi.tech/api/vehicles/16",
								"https://www.swapi.tech/api/vehicles/18",
								"https://www.swapi.tech/api/vehicles/19",
								"https://www.swapi.tech/api/vehicles/24",
								"https://www.swapi.tech/api/vehicles/25",
								"https://www.swapi.tech/api/vehicles/26",
								"https://www.swapi.tech/api/vehicles/30"
							],
							"species": [
								"https://www.swapi.tech/api/species/1",
								"https://www.swapi.tech/api/species/2",
								"https://www.swapi.tech/api/species/3",
								"https://www.swapi.tech/api/species/5",
								"https://www.swapi.tech/api/species/6",
								"https://www.swapi.tech/api/species/8",
								"https://www.swapi.tech/api/species/9",
								"https://www.swapi.tech/api/species/10",
								"https://www.swapi.tech/api/species/15"
							],
							"created": "2022-11-02T00:23:11.196Z",
							"edited": "2022-11-02T00:23:11.196Z",
							"producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
							"title": "Return of the Jedi",
							"episode_id": 6,
							"director": "Richard Marquand",
							"release_date": "1983-05-25",
							"opening_crawl": "Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.  Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.  When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...",
							"url": "https://www.swapi.tech/api/films/3"
						},
						"description": "A Star Wars Film",
						"_id": "5f63a117cf50d100047f9764",
						"uid": "3",
						"__v": 0
					},
					{
						"properties": {
							"characters": [
								"https://www.swapi.tech/api/people/2",
								"https://www.swapi.tech/api/people/3",
								"https://www.swapi.tech/api/people/10",
								"https://www.swapi.tech/api/people/11",
								"https://www.swapi.tech/api/people/16",
								"https://www.swapi.tech/api/people/20",
								"https://www.swapi.tech/api/people/21",
								"https://www.swapi.tech/api/people/32",
								"https://www.swapi.tech/api/people/33",
								"https://www.swapi.tech/api/people/34",
								"https://www.swapi.tech/api/people/35",
								"https://www.swapi.tech/api/people/36",
								"https://www.swapi.tech/api/people/37",
								"https://www.swapi.tech/api/people/38",
								"https://www.swapi.tech/api/people/39",
								"https://www.swapi.tech/api/people/40",
								"https://www.swapi.tech/api/people/41",
								"https://www.swapi.tech/api/people/42",
								"https://www.swapi.tech/api/people/43",
								"https://www.swapi.tech/api/people/44",
								"https://www.swapi.tech/api/people/46",
								"https://www.swapi.tech/api/people/47",
								"https://www.swapi.tech/api/people/48",
								"https://www.swapi.tech/api/people/49",
								"https://www.swapi.tech/api/people/50",
								"https://www.swapi.tech/api/people/51",
								"https://www.swapi.tech/api/people/52",
								"https://www.swapi.tech/api/people/53",
								"https://www.swapi.tech/api/people/54",
								"https://www.swapi.tech/api/people/55",
								"https://www.swapi.tech/api/people/56",
								"https://www.swapi.tech/api/people/57",
								"https://www.swapi.tech/api/people/58",
								"https://www.swapi.tech/api/people/59"
							],
							"planets": [
								"https://www.swapi.tech/api/planets/1",
								"https://www.swapi.tech/api/planets/8",
								"https://www.swapi.tech/api/planets/9"
							],
							"starships": [
								"https://www.swapi.tech/api/starships/31",
								"https://www.swapi.tech/api/starships/32",
								"https://www.swapi.tech/api/starships/39",
								"https://www.swapi.tech/api/starships/40",
								"https://www.swapi.tech/api/starships/41"
							],
							"vehicles": [
								"https://www.swapi.tech/api/vehicles/33",
								"https://www.swapi.tech/api/vehicles/34",
								"https://www.swapi.tech/api/vehicles/35",
								"https://www.swapi.tech/api/vehicles/36",
								"https://www.swapi.tech/api/vehicles/37",
								"https://www.swapi.tech/api/vehicles/38",
								"https://www.swapi.tech/api/vehicles/42"
							],
							"species": [
								"https://www.swapi.tech/api/species/1",
								"https://www.swapi.tech/api/species/2",
								"https://www.swapi.tech/api/species/6",
								"https://www.swapi.tech/api/species/11",
								"https://www.swapi.tech/api/species/12",
								"https://www.swapi.tech/api/species/13",
								"https://www.swapi.tech/api/species/14",
								"https://www.swapi.tech/api/species/15",
								"https://www.swapi.tech/api/species/16",
								"https://www.swapi.tech/api/species/17",
								"https://www.swapi.tech/api/species/18",
								"https://www.swapi.tech/api/species/19",
								"https://www.swapi.tech/api/species/20",
								"https://www.swapi.tech/api/species/21",
								"https://www.swapi.tech/api/species/22",
								"https://www.swapi.tech/api/species/23",
								"https://www.swapi.tech/api/species/24",
								"https://www.swapi.tech/api/species/25",
								"https://www.swapi.tech/api/species/26",
								"https://www.swapi.tech/api/species/27"
							],
							"created": "2022-11-02T00:23:11.196Z",
							"edited": "2022-11-02T00:23:11.196Z",
							"producer": "Rick McCallum",
							"title": "The Phantom Menace",
							"episode_id": 1,
							"director": "George Lucas",
							"release_date": "1999-05-19",
							"opening_crawl": "Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.  Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.  While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....",
							"url": "https://www.swapi.tech/api/films/4"
						},
						"description": "A Star Wars Film",
						"_id": "5f63a117cf50d100047f9765",
						"uid": "4",
						"__v": 0
					},
					{
						"properties": {
							"characters": [
								"https://www.swapi.tech/api/people/2",
								"https://www.swapi.tech/api/people/3",
								"https://www.swapi.tech/api/people/6",
								"https://www.swapi.tech/api/people/7",
								"https://www.swapi.tech/api/people/10",
								"https://www.swapi.tech/api/people/11",
								"https://www.swapi.tech/api/people/20",
								"https://www.swapi.tech/api/people/21",
								"https://www.swapi.tech/api/people/22",
								"https://www.swapi.tech/api/people/33",
								"https://www.swapi.tech/api/people/35",
								"https://www.swapi.tech/api/people/36",
								"https://www.swapi.tech/api/people/40",
								"https://www.swapi.tech/api/people/43",
								"https://www.swapi.tech/api/people/46",
								"https://www.swapi.tech/api/people/51",
								"https://www.swapi.tech/api/people/52",
								"https://www.swapi.tech/api/people/53",
								"https://www.swapi.tech/api/people/58",
								"https://www.swapi.tech/api/people/59",
								"https://www.swapi.tech/api/people/60",
								"https://www.swapi.tech/api/people/61",
								"https://www.swapi.tech/api/people/62",
								"https://www.swapi.tech/api/people/63",
								"https://www.swapi.tech/api/people/64",
								"https://www.swapi.tech/api/people/65",
								"https://www.swapi.tech/api/people/66",
								"https://www.swapi.tech/api/people/67",
								"https://www.swapi.tech/api/people/68",
								"https://www.swapi.tech/api/people/69",
								"https://www.swapi.tech/api/people/70",
								"https://www.swapi.tech/api/people/71",
								"https://www.swapi.tech/api/people/72",
								"https://www.swapi.tech/api/people/73",
								"https://www.swapi.tech/api/people/74",
								"https://www.swapi.tech/api/people/75",
								"https://www.swapi.tech/api/people/76",
								"https://www.swapi.tech/api/people/77",
								"https://www.swapi.tech/api/people/78",
								"https://www.swapi.tech/api/people/82"
							],
							"planets": [
								"https://www.swapi.tech/api/planets/1",
								"https://www.swapi.tech/api/planets/8",
								"https://www.swapi.tech/api/planets/9",
								"https://www.swapi.tech/api/planets/10",
								"https://www.swapi.tech/api/planets/11"
							],
							"starships": [
								"https://www.swapi.tech/api/starships/21",
								"https://www.swapi.tech/api/starships/32",
								"https://www.swapi.tech/api/starships/39",
								"https://www.swapi.tech/api/starships/43",
								"https://www.swapi.tech/api/starships/47",
								"https://www.swapi.tech/api/starships/48",
								"https://www.swapi.tech/api/starships/49",
								"https://www.swapi.tech/api/starships/52",
								"https://www.swapi.tech/api/starships/58"
							],
							"vehicles": [
								"https://www.swapi.tech/api/vehicles/4",
								"https://www.swapi.tech/api/vehicles/44",
								"https://www.swapi.tech/api/vehicles/45",
								"https://www.swapi.tech/api/vehicles/46",
								"https://www.swapi.tech/api/vehicles/50",
								"https://www.swapi.tech/api/vehicles/51",
								"https://www.swapi.tech/api/vehicles/53",
								"https://www.swapi.tech/api/vehicles/54",
								"https://www.swapi.tech/api/vehicles/55",
								"https://www.swapi.tech/api/vehicles/56",
								"https://www.swapi.tech/api/vehicles/57"
							],
							"species": [
								"https://www.swapi.tech/api/species/1",
								"https://www.swapi.tech/api/species/2",
								"https://www.swapi.tech/api/species/6",
								"https://www.swapi.tech/api/species/12",
								"https://www.swapi.tech/api/species/13",
								"https://www.swapi.tech/api/species/15",
								"https://www.swapi.tech/api/species/28",
								"https://www.swapi.tech/api/species/29",
								"https://www.swapi.tech/api/species/30",
								"https://www.swapi.tech/api/species/31",
								"https://www.swapi.tech/api/species/32",
								"https://www.swapi.tech/api/species/33",
								"https://www.swapi.tech/api/species/34",
								"https://www.swapi.tech/api/species/35"
							],
							"created": "2022-11-02T00:23:11.196Z",
							"edited": "2022-11-02T00:23:11.196Z",
							"producer": "Rick McCallum",
							"title": "Attack of the Clones",
							"episode_id": 2,
							"director": "George Lucas",
							"release_date": "2002-05-16",
							"opening_crawl": "There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.  This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain  peace and order in the galaxy.  Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....",
							"url": "https://www.swapi.tech/api/films/5"
						},
						"description": "A Star Wars Film",
						"_id": "5f63a117cf50d100047f9766",
						"uid": "5",
						"__v": 0
					},
					{
						"properties": {
							"characters": [
								"https://www.swapi.tech/api/people/1",
								"https://www.swapi.tech/api/people/2",
								"https://www.swapi.tech/api/people/3",
								"https://www.swapi.tech/api/people/4",
								"https://www.swapi.tech/api/people/5",
								"https://www.swapi.tech/api/people/6",
								"https://www.swapi.tech/api/people/7",
								"https://www.swapi.tech/api/people/10",
								"https://www.swapi.tech/api/people/11",
								"https://www.swapi.tech/api/people/12",
								"https://www.swapi.tech/api/people/13",
								"https://www.swapi.tech/api/people/20",
								"https://www.swapi.tech/api/people/21",
								"https://www.swapi.tech/api/people/33",
								"https://www.swapi.tech/api/people/35",
								"https://www.swapi.tech/api/people/46",
								"https://www.swapi.tech/api/people/51",
								"https://www.swapi.tech/api/people/52",
								"https://www.swapi.tech/api/people/53",
								"https://www.swapi.tech/api/people/54",
								"https://www.swapi.tech/api/people/55",
								"https://www.swapi.tech/api/people/56",
								"https://www.swapi.tech/api/people/58",
								"https://www.swapi.tech/api/people/63",
								"https://www.swapi.tech/api/people/64",
								"https://www.swapi.tech/api/people/67",
								"https://www.swapi.tech/api/people/68",
								"https://www.swapi.tech/api/people/75",
								"https://www.swapi.tech/api/people/78",
								"https://www.swapi.tech/api/people/79",
								"https://www.swapi.tech/api/people/80",
								"https://www.swapi.tech/api/people/81",
								"https://www.swapi.tech/api/people/82",
								"https://www.swapi.tech/api/people/83"
							],
							"planets": [
								"https://www.swapi.tech/api/planets/1",
								"https://www.swapi.tech/api/planets/2",
								"https://www.swapi.tech/api/planets/5",
								"https://www.swapi.tech/api/planets/8",
								"https://www.swapi.tech/api/planets/9",
								"https://www.swapi.tech/api/planets/12",
								"https://www.swapi.tech/api/planets/13",
								"https://www.swapi.tech/api/planets/14",
								"https://www.swapi.tech/api/planets/15",
								"https://www.swapi.tech/api/planets/16",
								"https://www.swapi.tech/api/planets/17",
								"https://www.swapi.tech/api/planets/18",
								"https://www.swapi.tech/api/planets/19"
							],
							"starships": [
								"https://www.swapi.tech/api/starships/2",
								"https://www.swapi.tech/api/starships/32",
								"https://www.swapi.tech/api/starships/48",
								"https://www.swapi.tech/api/starships/59",
								"https://www.swapi.tech/api/starships/61",
								"https://www.swapi.tech/api/starships/63",
								"https://www.swapi.tech/api/starships/64",
								"https://www.swapi.tech/api/starships/65",
								"https://www.swapi.tech/api/starships/66",
								"https://www.swapi.tech/api/starships/68",
								"https://www.swapi.tech/api/starships/74",
								"https://www.swapi.tech/api/starships/75"
							],
							"vehicles": [
								"https://www.swapi.tech/api/vehicles/33",
								"https://www.swapi.tech/api/vehicles/50",
								"https://www.swapi.tech/api/vehicles/53",
								"https://www.swapi.tech/api/vehicles/56",
								"https://www.swapi.tech/api/vehicles/60",
								"https://www.swapi.tech/api/vehicles/62",
								"https://www.swapi.tech/api/vehicles/67",
								"https://www.swapi.tech/api/vehicles/69",
								"https://www.swapi.tech/api/vehicles/70",
								"https://www.swapi.tech/api/vehicles/71",
								"https://www.swapi.tech/api/vehicles/72",
								"https://www.swapi.tech/api/vehicles/73",
								"https://www.swapi.tech/api/vehicles/76"
							],
							"species": [
								"https://www.swapi.tech/api/species/1",
								"https://www.swapi.tech/api/species/2",
								"https://www.swapi.tech/api/species/3",
								"https://www.swapi.tech/api/species/6",
								"https://www.swapi.tech/api/species/15",
								"https://www.swapi.tech/api/species/19",
								"https://www.swapi.tech/api/species/20",
								"https://www.swapi.tech/api/species/23",
								"https://www.swapi.tech/api/species/24",
								"https://www.swapi.tech/api/species/25",
								"https://www.swapi.tech/api/species/26",
								"https://www.swapi.tech/api/species/27",
								"https://www.swapi.tech/api/species/28",
								"https://www.swapi.tech/api/species/29",
								"https://www.swapi.tech/api/species/30",
								"https://www.swapi.tech/api/species/33",
								"https://www.swapi.tech/api/species/34",
								"https://www.swapi.tech/api/species/35",
								"https://www.swapi.tech/api/species/36",
								"https://www.swapi.tech/api/species/37"
							],
							"created": "2022-11-02T00:23:11.196Z",
							"edited": "2022-11-02T00:23:11.196Z",
							"producer": "Rick McCallum",
							"title": "Revenge of the Sith",
							"episode_id": 3,
							"director": "George Lucas",
							"release_date": "2005-05-19",
							"opening_crawl": "War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.  In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.  As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....",
							"url": "https://www.swapi.tech/api/films/6"
						},
						"description": "A Star Wars Film",
						"_id": "5f63a117cf50d100047f9767",
						"uid": "6",
						"__v": 0
					}
				]
			},
			people: {
				"message": "ok",
				"total_records": 82,
				"total_pages": 9,
				"previous": null,
				"next": "https://www.swapi.tech/api/people?page=2&limit=10",
				"results": [
					{
						"uid": "1",
						"name": "Luke Skywalker",
						"url": "https://www.swapi.tech/api/people/1"
					},
					{
						"uid": "2",
						"name": "C-3PO",
						"url": "https://www.swapi.tech/api/people/2"
					},
					{
						"uid": "3",
						"name": "R2-D2",
						"url": "https://www.swapi.tech/api/people/3"
					},
					{
						"uid": "4",
						"name": "Darth Vader",
						"url": "https://www.swapi.tech/api/people/4"
					},
					{
						"uid": "5",
						"name": "Leia Organa",
						"url": "https://www.swapi.tech/api/people/5"
					},
					{
						"uid": "6",
						"name": "Owen Lars",
						"url": "https://www.swapi.tech/api/people/6"
					},
					{
						"uid": "7",
						"name": "Beru Whitesun lars",
						"url": "https://www.swapi.tech/api/people/7"
					},
					{
						"uid": "8",
						"name": "R5-D4",
						"url": "https://www.swapi.tech/api/people/8"
					},
					{
						"uid": "9",
						"name": "Biggs Darklighter",
						"url": "https://www.swapi.tech/api/people/9"
					},
					{
						"uid": "10",
						"name": "Obi-Wan Kenobi",
						"url": "https://www.swapi.tech/api/people/10"
					}
				]
			},
			planets:{
				"message": "ok",
				"total_records": 60,
				"total_pages": 6,
				"previous": null,
				"next": "https://www.swapi.tech/api/planets?page=2&limit=10",
				"results": [
					{
						"uid": "1",
						"name": "Tatooine",
						"url": "https://www.swapi.tech/api/planets/1"
					},
					{
						"uid": "2",
						"name": "Alderaan",
						"url": "https://www.swapi.tech/api/planets/2"
					},
					{
						"uid": "3",
						"name": "Yavin IV",
						"url": "https://www.swapi.tech/api/planets/3"
					},
					{
						"uid": "4",
						"name": "Hoth",
						"url": "https://www.swapi.tech/api/planets/4"
					},
					{
						"uid": "5",
						"name": "Dagobah",
						"url": "https://www.swapi.tech/api/planets/5"
					},
					{
						"uid": "6",
						"name": "Bespin",
						"url": "https://www.swapi.tech/api/planets/6"
					},
					{
						"uid": "7",
						"name": "Endor",
						"url": "https://www.swapi.tech/api/planets/7"
					},
					{
						"uid": "8",
						"name": "Naboo",
						"url": "https://www.swapi.tech/api/planets/8"
					},
					{
						"uid": "9",
						"name": "Coruscant",
						"url": "https://www.swapi.tech/api/planets/9"
					},
					{
						"uid": "10",
						"name": "Kamino",
						"url": "https://www.swapi.tech/api/planets/10"
					}
				]
			},
			species: {
				"message": "ok",
				"total_records": 37,
				"total_pages": 4,
				"previous": null,
				"next": "https://www.swapi.tech/api/species?page=2&limit=10",
				"results": [
					{
						"uid": "1",
						"name": "Human",
						"url": "https://www.swapi.tech/api/species/1"
					},
					{
						"uid": "2",
						"name": "Droid",
						"url": "https://www.swapi.tech/api/species/2"
					},
					{
						"uid": "3",
						"name": "Wookie",
						"url": "https://www.swapi.tech/api/species/3"
					},
					{
						"uid": "4",
						"name": "Rodian",
						"url": "https://www.swapi.tech/api/species/4"
					},
					{
						"uid": "5",
						"name": "Hutt",
						"url": "https://www.swapi.tech/api/species/5"
					},
					{
						"uid": "6",
						"name": "Yoda's species",
						"url": "https://www.swapi.tech/api/species/6"
					},
					{
						"uid": "7",
						"name": "Trandoshan",
						"url": "https://www.swapi.tech/api/species/7"
					},
					{
						"uid": "8",
						"name": "Mon Calamari",
						"url": "https://www.swapi.tech/api/species/8"
					},
					{
						"uid": "9",
						"name": "Ewok",
						"url": "https://www.swapi.tech/api/species/9"
					},
					{
						"uid": "10",
						"name": "Sullustan",
						"url": "https://www.swapi.tech/api/species/10"
					}
				]
			},
			starships:{
				"message": "ok",
				"total_records": 36,
				"total_pages": 4,
				"previous": null,
				"next": "https://www.swapi.tech/api/starships?page=2&limit=10",
				"results": [
					{
						"uid": "2",
						"name": "CR90 corvette",
						"url": "https://www.swapi.tech/api/starships/2"
					},
					{
						"uid": "3",
						"name": "Star Destroyer",
						"url": "https://www.swapi.tech/api/starships/3"
					},
					{
						"uid": "5",
						"name": "Sentinel-class landing craft",
						"url": "https://www.swapi.tech/api/starships/5"
					},
					{
						"uid": "9",
						"name": "Death Star",
						"url": "https://www.swapi.tech/api/starships/9"
					},
					{
						"uid": "11",
						"name": "Y-wing",
						"url": "https://www.swapi.tech/api/starships/11"
					},
					{
						"uid": "10",
						"name": "Millennium Falcon",
						"url": "https://www.swapi.tech/api/starships/10"
					},
					{
						"uid": "13",
						"name": "TIE Advanced x1",
						"url": "https://www.swapi.tech/api/starships/13"
					},
					{
						"uid": "15",
						"name": "Executor",
						"url": "https://www.swapi.tech/api/starships/15"
					},
					{
						"uid": "12",
						"name": "X-wing",
						"url": "https://www.swapi.tech/api/starships/12"
					},
					{
						"uid": "17",
						"name": "Rebel transport",
						"url": "https://www.swapi.tech/api/starships/17"
					}
				]
			},
			vehicles:{
				"message": "ok",
				"total_records": 39,
				"total_pages": 4,
				"previous": null,
				"next": "https://www.swapi.tech/api/vehicles?page=2&limit=10",
				"results": [
					{
						"uid": "4",
						"name": "Sand Crawler",
						"url": "https://www.swapi.tech/api/vehicles/4"
					},
					{
						"uid": "7",
						"name": "X-34 landspeeder",
						"url": "https://www.swapi.tech/api/vehicles/7"
					},
					{
						"uid": "6",
						"name": "T-16 skyhopper",
						"url": "https://www.swapi.tech/api/vehicles/6"
					},
					{
						"uid": "8",
						"name": "TIE/LN starfighter",
						"url": "https://www.swapi.tech/api/vehicles/8"
					},
					{
						"uid": "14",
						"name": "Snowspeeder",
						"url": "https://www.swapi.tech/api/vehicles/14"
					},
					{
						"uid": "18",
						"name": "AT-AT",
						"url": "https://www.swapi.tech/api/vehicles/18"
					},
					{
						"uid": "16",
						"name": "TIE bomber",
						"url": "https://www.swapi.tech/api/vehicles/16"
					},
					{
						"uid": "19",
						"name": "AT-ST",
						"url": "https://www.swapi.tech/api/vehicles/19"
					},
					{
						"uid": "20",
						"name": "Storm IV Twin-Pod cloud car",
						"url": "https://www.swapi.tech/api/vehicles/20"
					},
					{
						"uid": "24",
						"name": "Sail barge",
						"url": "https://www.swapi.tech/api/vehicles/24"
					}
				]
			},

		},
		actions: {
			// Use getActions para llamar a una función dentro de una función
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: (url, destino) => {
/***** FETCH *********************************************************/
				const opcionesGET = { method: 'GET', redirect: 'follow' }
				// para meter los datos de la API
				fetch(url, opcionesGET)
				.then(response => response.json())
				.then(result => {
					const llenar= destino
					setStore({ llenar : result })
				}
				)
				.catch(error => console.log('error', error));
					
				
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
			llamadaGET: (url, destino) => {
				getActions().loadSomeData(url,destino)
			}
		},
		favorites: {},
		variables: {
			urlHost: location.protocol + '//' + location.host + '/',

		}
	};
};

export default getState;
