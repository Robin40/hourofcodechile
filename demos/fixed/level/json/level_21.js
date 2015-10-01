var HOC_LEVEL = {
	"nombre": "",
	"descripcion": "Recoge toda la caca usando solo 7 bloques",
	"imagen_inicial": "caca.png",
	"titulo_ayuda": "Â¡Tu puedes hacerlo!",
	"comentario_ayuda": "Tienes todos los conocimientos para lograrlo.",
	"mensaje_inicial": "Recoge toda la caca usando solo 7 bloques",
	"maximoBloques": 7,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["MMMMMMMMMM",
			"M...MM...M",
			"M.M.MM.M.M",
			"M........M",
			"MMM.MM.MMM",
			"MMM.MM.MMM",
			"M........M",
			"M.M.MM.M.M",
			"M...MM...M",
			"MMMMMMMMMM"
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 8,
		"columna": 3,
		"orientacion": "derecha"
	},
    "cacas": {
        "cantidad": 10,
        "requeridas": 10,
        "c": [
            {"fila": 1, "columna": 2},
            {"fila": 1, "columna": 7},
            {"fila": 3, "columna": 1},
            {"fila": 3, "columna": 4},
            {"fila": 3, "columna": 7},
            {"fila": 6, "columna": 2},
            {"fila": 6, "columna": 5},
            {"fila": 6, "columna": 8},
            {"fila": 8, "columna": 2},
            {"fila": 8, "columna": 7},
        ]
    },
	"stackeables": {
		"cantidad": 0,
		"s": [
		]
	},
	"bloquesRequeridos": {
		"cantidad": 2,
		"b": [
			{"tipo": "controls_repeat", "cantidad": 2},
			{"tipo": "girar", "cantidad": 1}
		]
	}
};