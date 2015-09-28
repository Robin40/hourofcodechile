var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "perro.png",
	"titulo_ayuda": "¿Cuántas veces repetir?",
	"comentario_ayuda": "El bloque 'repetir' interno (el de más abajo) sirve para llegar de una esquina de la plaza a otra ¿Cuánto hay que caminar de una esquina a otra? Pon este número en el bloque 'repetir' interno. ¿Puedes ahora ver qué número debes poner en el 'repetir' de más arriba?",
	"mensaje_inicial": "A pesar de que el perro está al otro lado de la plaza, puedes llegar a él usando pocos bloques. Descubre la cantidad de veces que se deben repetir ambos bloques para llegar a tu objetivo.",
	"descripcion": "Descubre la cantidad de veces que se deben repetir ambos bloques para llegar a tu objetivo.",
	"maximoBloques": 4,
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
		"cantidad": 8,
		"s": [
			{"tipo": "piedra", "fila": 8, "columna": 3},
			{"tipo": "piedra", "fila": 8, "columna": 4},
			{"tipo": "piedra", "fila": 8, "columna": 5},
			{"tipo": "piedra", "fila": 8, "columna": 6},
			{"tipo": "piedra", "fila": 6, "columna": 4},
			{"tipo": "piedra", "fila": 4, "columna": 5},
			{"tipo": "piedra", "fila": 3, "columna": 3},
			{"tipo": "piedra", "fila": 5, "columna": 3},
		]
	},
	"bloquesRequeridos": {
		"cantidad": 1,
		"b": [
			{"tipo": "controls_repeat", "cantidad": 2}
		]
	}
};