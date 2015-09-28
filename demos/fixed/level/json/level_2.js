var HOC_LEVEL = {
	"nombre": "",
	"descripcion": "Avanza y gira para llegar donde el perro.",
	"maximoBloques": 4,
	"imagen_inicial": "perro.png",
	"titulo_ayuda": "Avanzar y girar",
	"comentario_ayuda": "Usa el bloque 'avanzar' combinado con 'girar a la derecha'.",
	"mensaje_inicial": "Avanza y gira para llegar donde el perro.",
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz": [
			"XXXXXXXXXX",
			"XXXXXXXXXX",
			"XXXXXXXXXX",
			"XXqRRRRwXX",
			"XXT....GXX",
			"XXT....GXX",
			"XXaFFi.GXX",
			"XXXXXaFsXX",
			"XXXXXXXXXX",
			"XXXXXXXXXX"
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 5,
		"columna": 4,
		"orientacion": "derecha"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 6, "columna": 6,
				"orientacion":"izquierda"
			}
		]
	}
};