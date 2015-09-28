var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "perro.png",
	"titulo_ayuda": "Repite un patrón",
	"mensaje_inicial": "Completa el nivel poniendo bloques dentro de \"repetir hasta\" para llegar donde el perro.",
	"descripcion": "Completa el nivel poniendo bloques dentro de \"repetir hasta\" para llegar donde el perro.",
	"maximoBloques": 5,
	"comentario_ayuda": "¿Qué bloques te llevan hasta la esquina de las rocas? trata de llegar ahí y mirar hacia abajo, para luego repetir ese movimiento hasta llegar al perro.",
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["XXXXXXXXXX",
			"XqRRRRRRwX",
			"XT......GX",
			"XT......GX",
			"XT......GX",
			"XT......GX",
			"XT......GX",
			"XT......GX",
			"XaFFFFFFsX",
			"XXXXXXXXXX"]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 3,
		"columna": 2,
		"orientacion": "derecha"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 6, "columna": 2,
				"orientacion":"izquierda"
			}
		]
	},
	"stackeables": {
        "cantidad": 6,
        "s": [
            {"tipo": "piedra", "fila": 4, "columna": 2},
            {"tipo": "piedra", "fila": 4, "columna": 3},
            {"tipo": "piedra", "fila": 4, "columna": 4},
            {"tipo": "piedra", "fila": 5, "columna": 2},
            {"tipo": "piedra", "fila": 5, "columna": 3},
            {"tipo": "piedra", "fila": 5, "columna": 4},

        ]
    },
	"bloquesRequeridos": {
		"cantidad": 1,
		"b": [
			{"tipo": "repetir_hasta_perro", "cantidad": 1}
		]
	}
};