var HOC_LEVEL = {
	"nombre": "Nombre del nivel",
	"descripcion": "Descripción del nivel",
	"maximoBloques": 5,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz": 
		   ["XXXXXXXXXX",
		   	"XXXXXXXXXX",
			"XXqRRRRwXX",
			"XXT....GXX",
			"XXT....GXX",
			"XXT....GXX",
			"XXT....GXX",
			"XXaFFFFsXX",
			"XXXXXXXXXX",
			"XXXXXXXXXX"]
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 5, "columna": 5,
				"orientacion":"izquierda"
			}
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 5,
		"columna": 3,
		"orientacion": "arriba"
	},
	"stackeables": {
		"cantidad": 3,
		"s": [
			{"tipo": "piedra", "fila": 4, "columna": 4},
			{"tipo": "piedra", "fila": 5, "columna": 4},
			{"tipo": "piedra", "fila": 6, "columna": 4}
		]
	}
};