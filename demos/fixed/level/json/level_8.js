var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "perro.png",
	"mensaje_inicial": "Ahora el perro está en la otra esquina de la plaza. ¿Puedes llegar a él usando sólo 5 bloques?",
	"descripcion": "Ahora el perro está en la otra esquina de la plaza. ¿Puedes llegar a él usando sólo 5 bloques?",
	"maximoBloques": 5,
	"titulo_ayuda": "Dos bloques repetir",
	"comentario_ayuda": "Prueba utilizando dos bloques "repetir", uno para llegar a la primera esquina y otro para llegar desde ahí hasta el perro. ¡Cuidado que ambos deberán repetirse distintas veces, y también tendrás que girar!",
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["XXXXXXXXXX",
			"qRRRRRRRRw",
			"T........G",
			"T........G",
			"T........G",
			"T........G",
			"T........G",
			"T........G",
			"aFFFFFFFFs",
			"XXXXXXXXXX"]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 2,
		"columna": 1,
		"orientacion": "derecha"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 7, "columna": 8,
				"orientacion":"izquierda"
			}
		]
	},
	"stackeables": {
        "cantidad": 8,
        "s": [
            {"tipo": "piedra", "fila": 4, "columna": 3},
            {"tipo": "piedra", "fila": 4, "columna": 4},
            {"tipo": "piedra", "fila": 4, "columna": 5},
            {"tipo": "piedra", "fila": 4, "columna": 6},
            {"tipo": "piedra", "fila": 5, "columna": 3},
            {"tipo": "piedra", "fila": 5, "columna": 4},
            {"tipo": "piedra", "fila": 5, "columna": 5},
            {"tipo": "piedra", "fila": 5, "columna": 6},

        ]
    },
    "bloquesRequeridos": {
		"cantidad": 2,
		"b": [
			{"tipo": "controls_repeat", "cantidad": 2}
		]
	}
};