var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "caca.png",
	"mensaje_inicial": "Recoge toda la caca usando solo 5 bloques.",
	"descripcion": "Recoge toda la caca usando solo 5 bloques.",
	"maximoBloques": 5,
	"comentario_ayuda": "Tu puedes!",
	"titulo_ayuda": "Tu puedes!",
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["MMMMMMMMMM",
			"MMMMMMMMMM",
			"MMMMMMMMMM",
			"MMMMMMMMMM",
			"MM......MM",
			"MM......MM",
			"MMMMMMMMMM",
			"MMMMMMMMMM",
			"MMMMMMMMMM",
			"MMMMMMMMMM",
			"MMMMMMMMMM",
			]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 4,
		"columna": 4,
		"orientacion": "derecha"
	},
    "cacas": {
        "cantidad": 3,
        "requeridas": 3,
        "c": [
            {"fila": 4, "columna": 6},
            {"fila": 5, "columna": 2},
            {"fila": 5, "columna": 5},
        ]
    },
    "stackeables": {
        "cantidad": 0,
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