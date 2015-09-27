var HOC_LEVEL = {
	"nombre": "Nombre del nivel",
	"descripcion": "Descripción del nivel",
	"maximoBloques": 5,
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
    }
};