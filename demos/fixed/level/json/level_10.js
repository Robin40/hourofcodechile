var HOC_LEVEL = {
	"nombre": "Nombre del nivel",
	"descripcion": "Descripción del nivel",
	"maximoBloques": 5,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["qRRRRRRRRw",
		   	"T........G",
			"T.qRRRRw.G",
			"T.TXXXXG.G",
			"T.TXXXXG.G",
			"T.TXXXXG.G",
			"T.TXXXXG.G",
			"T.aFFFFs.G",
			"T........G",
			"aFFFFFFFFs"]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 8,
		"columna": 1,
		"orientacion": "arriba"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 8, "columna": 8,
				"orientacion":"izquierda"
			}
		]
	},
	"stackeables": {
		"cantidad": 4,
		"s": [
			{"tipo": "piedra", "fila": 8, "columna": 3},
			{"tipo": "piedra", "fila": 8, "columna": 4},
			{"tipo": "piedra", "fila": 8, "columna": 5},
			{"tipo": "piedra", "fila": 8, "columna": 6}
		]
	}
};