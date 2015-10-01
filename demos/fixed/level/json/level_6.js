var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "caca.png",
	"titulo_ayuda": "Giros y más giros.",
	"comentario_ayuda": "En este escenario debes girar al menos dos veces. Posiblemente sea más fácil solo avanzar para recoger primero las dos cacas que están al frente tuyo.",
	"mensaje_inicial": "Tus perros han dejado más caca en la plaza. Esfuérzate un poco más y recógela toda.",
	"descripcion": "Tus perros han dejado más caca en la plaza. Esfuérzate un poco más y recógela toda.",
	"maximoBloques": 8,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz": [
            "XXXXXXXXXX",
			"XXXXXXXXXX",
			"XqSRSRSRwX",
			"XU......GX",
			"XU......GX",
			"XT......GX",
			"XU......GX",
			"XaFFFFFFsX",
			"XXXXXXXXXX",
			"XXXXXXXXXX"
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 5,
		"columna": 2,
		"orientacion": "derecha"
	},
	"cacas": {
        "cantidad": 3,
        "requeridas": 3,
        "c": [
            {"fila": 4, "columna": 4},
            {"fila": 5, "columna": 5},
            {"fila": 5, "columna": 3},
        ]
    },
    "stackeables": {
        "cantidad": 1,
        "s": [
            {"tipo": "piedra", "fila": 6, "columna": 4},
        ]
    }
};
