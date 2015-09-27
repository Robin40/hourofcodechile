var HOC_LEVEL = {
	"nombre": "Nombre del nivel",
	"descripcion": "Descripción del nivel",
	"maximoBloques": 5,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz": 
		   ["XXXXXXXXXX",
			"XRRRRRRRRX",
			"T........G",
			"T........G",
			"T........G",
			"T........G",
			"T........G",
			"T........G",
			"XFFFFFFFFX",
			"XXXXXXXXXX"]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 2,
		"columna": 1,
		"orientacion": "derecha"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 7, "columna": 8,
				"orientacion":"izquierda"
			}
		]
	},
	"stackeables": {
		"cantidad": 8,
		"s": [
			{"tipo": "piedra", "fila": 4, "columna": 3},
			{"tipo": "piedra", "fila": 4, "columna": 4},
			{"tipo": "piedra", "fila": 4, "columna": 5},
			{"tipo": "piedra", "fila": 4, "columna": 6},
			{"tipo": "piedra", "fila": 5, "columna": 3},
			{"tipo": "piedra", "fila": 5, "columna": 4},
			{"tipo": "piedra", "fila": 5, "columna": 5},
			{"tipo": "piedra", "fila": 5, "columna": 6}
		]
	}
};