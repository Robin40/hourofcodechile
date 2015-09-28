var HOC_LEVEL = {
	"nombre": "",
	"titulo_ayuda": "Repetir hasta llegar al perro.",
	"imagen_inicial": "perro.png",
	"comentario_ayuda": "Sólo debes avanzar hasta llegar al perro. Pon los bloques de esa forma y lo lograrás.",
	"mensaje_inicial": "Ahora puedes llegar al perro aunque esté lejos y sin saber cuantos pasos debes dar simplemente usando el bloque \"repetir hasta\". Solo necesitas dos bloques.",
	"descripcion": "Ahora puedes llegar al perro aunque esté lejos y sin saber cuantos pasos debes dar simplemente usando el bloque \"repetir hasta\". Solo necesitas dos bloques.",
	"maximoBloques": 2,
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["XXXXXXXXXX",
			"XXXXXXXXXX",
			"qRRRRRRRRw",
			"T........G",
			"T........G",
			"T........G",
			"T........G",
			"aFFFFFFFFs",
			"XXXXXXXXXX",
			"XXXXXXXXXX"]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 5,
		"columna": 1,
		"orientacion": "derecha"
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 5, "columna": 8,
				"orientacion":"izquierda"
			}
		]
	},
	"bloquesRequeridos": {
		"cantidad": 1,
		"b": [
			{"tipo": "repetir_hasta_perro", "cantidad": 1},
		]
	}
};