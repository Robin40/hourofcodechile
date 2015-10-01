var HOC_LEVEL = {
	"nombre": "",
	"titulo_ayuda": "Repetir hasta llegar al perro.",
	"imagen_inicial": "perro.png",
	"comentario_ayuda": "Sólo debes avanzar hasta llegar al perro. Pon los bloques de esa forma y lo lograrás.",
	"mensaje_inicial": "Usando el bloque \"repetir hasta\"  puedes llegar al perro sin importar cuántos pasos debes dar.",
	"descripcion": "Usa el bloque \"repetir hasta\" para llegar a tu perro.",
  "maximoBloques": 2,
  "tutorial": "https://www.youtube.com/embed/LgfcGIRns6w",
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
