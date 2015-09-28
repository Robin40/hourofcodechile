    var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "caca.png",
	"mensaje_inicial": "Puedes usar el nuevo bloque \"repetir hasta que no haya más caca\" para recoger toda la caca. Este bloque te ayudará a repetir movimientos mientras todavía quede caca por recoger.",
	"descripcion": "Puedes usar el nuevo bloque \"repetir hasta que no haya más caca\". Este te ayudará a repetir movimientos mientras todavía quede caca por recoger.",
	"maximoBloques": 5,
	"comentario_ayuda": "Este nivel es similar a otros que has pasado antes. Como ayuda, debes tratar de subir moviéndote en dos direcciones para luego repetir ese patrón de movimiento. No olvides usar el bloque \"repetir hasta que no haya más caca\".",
	"titulo_ayuda": "Repite un patrón simple",
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
		"fila": 7,
		"columna": 2,
		"orientacion": "derecha"
	},
    "cacas": {
        "cantidad": 5,
        "requeridas": 5,
        "c": [
            {"fila": 6, "columna": 3},
            {"fila": 5, "columna": 4},
            {"fila": 4, "columna": 5},
            {"fila": 3, "columna": 6},
            {"fila": 2, "columna": 7},
        ]
    },
    "stackeables": {
        "cantidad": 2,
        "s": [
            {"tipo": "piedra", "fila": 3, "columna": 2},
            {"tipo": "piedra", "fila": 2, "columna": 3},

        ]
    },
	"bloquesRequeridos": {
		"cantidad": 1,
		"b": [
			{"tipo": "repetir_hasta", "cantidad": 1}
		]
	}
};