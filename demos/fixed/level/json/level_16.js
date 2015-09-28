var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "caca.png",
	"maximoBloques": 4,
	"bloquesRequeridos": {
		"cantidad": 1,
		"b": [
			{"tipo": "repetir_hasta", "cantidad": 1}
		]
	},
	"titulo_ayuda": "Sólo debes girar.",
	"comentario_ayuda": "Para completar el código, sólo debes girar. Mira la condición del bloque \"si\", para decidir en qué dirección debes girar.",
	"mensaje_inicial": "Completa el código para poder recoger la caca.",
	"descripcion": "Completa el código para poder recoger la caca.",
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz": [
			"XXXXXXXXXX",
			"XXXXXXXXXX",
			"XqRRRRRRwX",
			"XT......GX",
			"XT......GX",
			"XaFFFFi.GX",
			"XXXXXXT.GX",
			"XXXXXXT.GX",
			"XXXXXXaFsX",
			"XXXXXXXXXX",
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 4,
		"columna": 2,
		"orientacion": "derecha"
	},
    "cacas": {
        "cantidad": 1,
        "requeridas": 1,
        "c": [
            {"fila": 6, "columna": 7},
        ]
    },
};