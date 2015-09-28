var HOC_LEVEL = {
	"nombre": "",
	"descripcion": "¿Cómo puedes llegar al perro usando sólo 5 bloques?",
	"imagen_inicial": "perro.png",
	"titulo_ayuda": "Repetir un patrón",
	"comentario_ayuda": "Mira qué bloques te ayudan a caminar desde la posición donde estás hasta la posición que está arriba y a la derecha. Luego podrías repetir este movimiento varias veces usando un bloque 'repetir' para llegar hasta el perro.",
	"mensaje_inicial": "¿Cómo puedes llegar al perro usando sólo 5 bloques?",
	"maximoBloques": 5,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["XXXXXXXXXX",
			"XXXXXXX.XX",
			"XXXXXX...X",
			"XXXXX....X",
			"XXXX....XX",
			"XXX....XXX",
			"XX....XXXX",
			"X....XXXXX",
			"XX..XXXXXX",
			"XXXXXXXXXX"
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 7,
		"columna": 2,
		"orientacion": "derecha"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 2, "columna": 7,
				"orientacion":"izquierda"
			}
		]
	},
	"stackeables": {
		"cantidad": 15,
		"s": [
			{"tipo": "piedra", "fila": 8, "columna": 3},
			{"tipo": "piedra", "fila": 7, "columna": 4},
			{"tipo": "piedra", "fila": 6, "columna": 5},
			{"tipo": "piedra", "fila": 5, "columna": 6},
			{"tipo": "piedra", "fila": 4, "columna": 7},
			{"tipo": "piedra", "fila": 3, "columna": 8},
			{"tipo": "piedra", "fila": 2, "columna": 6},
			{"tipo": "piedra", "fila": 3, "columna": 5},
			{"tipo": "piedra", "fila": 4, "columna": 4},
			{"tipo": "piedra", "fila": 5, "columna": 3},
			{"tipo": "piedra", "fila": 6, "columna": 2},
			{"tipo": "piedra", "fila": 7, "columna": 1},
			{"tipo": "piedra", "fila": 2, "columna": 8},
			{"tipo": "piedra", "fila": 8, "columna": 2},
			{"tipo": "piedra", "fila": 1, "columna": 7},

		]
	},
	"bloquesRequeridos": {
		"cantidad": 2,
		"b": [
			{"tipo": "controls_repeat", "cantidad": 1},
			{"tipo": "girar", "cantidad": 2}
		]
	}
};