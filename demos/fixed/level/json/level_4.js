var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "perro.png",
	"titulo_ayuda": "Voltéate antes de avanzar.",
	"comentario_ayuda": "Intenta girando dos veces antes de avanzar.",
	"mensaje_inicial": "El perro está a tu espalda. ¿Qué debes hacer para llegar donde él?",
	"descripcion": "El perro está a tu espalda. ¿Qué debes hacer para llegar donde él?",
	"maximoBloques": 4,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["XXXXXXXXXX",
			"XXXXXXXXXX",
			"qRRRRRRRRw",
			"T........G",
			"T........G",
			"T........G",
			"aFFFFFFFFs",
			"XXXXXXXXXX",
			"XXXXXXXXXX",
			"XXXXXXXXXX"]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 4,
		"columna": 7,
		"orientacion": "derecha"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 4, "columna": 5,
				"orientacion":"izquierda"
			}
		]
	}
};