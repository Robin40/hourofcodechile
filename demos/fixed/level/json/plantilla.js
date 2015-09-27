var HOC_LEVEL = {
	"nombre": "Nombre del nivel",
	"descripcion": "Descripción del nivel",
	"tutorial": url_video_EMBEBIDO,
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
	}
};