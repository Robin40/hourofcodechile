    var HOC_LEVEL = {
	"nombre": "",
	"comentario_ayuda": "Sólo debes cambiar uno de los bloques \"girar\" para girar en otra dirección.",
	"titulo_ayuda": "Debes cambiar muy poco",
	"mensaje_inicial": "En este nivel, el código tiene un error y te deja dando vueltas en círculos. ¿Puedes arreglarlo para que se convierta en uno que lleva a recoger toda la caca?",
	"descripcion": "¿Puedes arreglar el código para que se convierta en uno que lleva a recoger toda la caca?",
	"imagen_inicial": "caca.png",
	"maximoBloques": 6,
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
			"XT......GX",
			"XaFFFFFFsX",

        ]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 2,
		"columna": 3,
		"orientacion": "derecha"
	},
    "cacas": {
        "cantidad": 6,
        "requeridas": 6,
        "c": [
            {"fila": 2, "columna": 4},
            {"fila": 4, "columna": 4},
            {"fila": 4, "columna": 5},
            {"fila": 6, "columna": 5},
            {"fila": 6, "columna": 6},
            {"fila": 8, "columna": 6},
        ]
    },
	"bloquesRequeridos": {
		"cantidad": 2,
		"b": [
			{"tipo": "repetir_hasta", "cantidad": 1},
			{"tipo": "girar", "cantidad": 2}
		]
	}
};