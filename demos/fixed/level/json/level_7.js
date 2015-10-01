var HOC_LEVEL = {
	"nombre": "",
	"comentario_ayuda": "Usa un bloque 'repetir' y un bloque 'avanzar' dentro. La clave está en decidir cuántas veces se debe repetir, prueba con distintos valores.",
	"descripcion": "Tu perro está lejos, pero puedes llegar a él usando sólo dos bloques (recuerda utilizar el bloque repetir). ",
	"imagen_inicial": "perro.png",
	"mensaje_inicial": "Tu perro está lejos, pero puedes llegar a él usando sólo dos bloques (recuerda utilizar el bloque repetir). ",
	"maximoBloques": 2,
  "titulo_ayuda": "Repetir y repetir",
  "tutorial": "https://www.youtube.com/embed/TOdjWfgt_vc",
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
			{"tipo": "controls_repeat", "cantidad": 1}
		]
	}
};
