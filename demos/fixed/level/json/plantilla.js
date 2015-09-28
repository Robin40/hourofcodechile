var HOC_LEVEL = {
	"nombre": "Nombre del nivel",
	"descripcion": "Descripción del nivel",
	"mensaje_inicial": "Recoje la caca!",
	"imagen_inicial": "caca.png", //debe estar en fixed/media/welcome
	"tutorial": url_video_EMBEBIDO,
	"titulo_ayuda": "Ciclo REPETIR",
	"imagen_ayuda": "if_help.png", //debe estar en fixed/media/help
	"comentario_ayuda": "ciclo qlo",
	"maximoBloques": n,
	"bloquesNecesarios": k,
	"grid": {
		"filas": r,
		"columnas": c,
		"matriz": [
			"XYXYXYXYXYXY",
			"YXYXYXYXYXYX",
			"XYXYXYRYXYXY",
			"YXYXYR.RYXYX",
			"XYRRRR.RRYXY",
			"YR.....RRRYX",
			"XYRR.RRRRYXY",
			"YXYXYXYXYXYX",
			"XYXYXYXYXYXY",
			"YXYXYXYXYXYX",
			"XYXYXYXYXYXY",
			"YXYXYXYXYXYX"
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": indexada desde 0,
		"columna": indexada desde 0,
		"orientacion": "arriba"/"izquierda"/"derecha"/"abajo"
	},
	"metas": {
		"cantidad": n,
		"m": [
			{
				"tipo": "perro",
				"fila": i, "columna": j,
				"orientacion": "arriba"/"izquierda"/"derecha"/"abajo"
			},
			{
				"tipo": "perro",
				"fila": i, "columna": j,
				"orientacion": "arriba"/"izquierda"/"derecha"/"abajo"
			},
			...
		]
	},
	"cacas": {
		"cantidad": n,
		"requeridas": k,
		"c": [
			{"fila": i, "columna": j},
			{"fila": i, "columna": j},
			...
		]
	},
	"stackeables": {
		"cantidad": n,
		"s": [
			{"tipo": "piedra"/"fuego0"/.../"fuego3", "fila": i, "columna": j},
			{"tipo": "piedra"/"fuego0"/.../"fuego3", "fila": i, "columna": j},
			...
		]
	}
};