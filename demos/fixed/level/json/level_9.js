var HOC_LEVEL = {
	"nombre": "",
	"imagen_inicial": "perro.png",
	"comentario_ayuda": "Prueba poniendo dos bloques 'avanzar' y uno 'girar' dentro 'repetir 3 veces'.",
	"mensaje_inicial": "Tu perro está lejos, pero puedes llegar a él usando sólo dos instrucciones (recuerda utilizar el bloque repetir). ",
	"descripcion": "El perro está ahora detrás de las piedras, pero puedes llegar a él repitiendo tres veces el mismo movimiento, ¿Puedes encontrar los bloques que debes poner dentro de 'repetir 3 veces'?",
	"maximoBloques": 4,
	"titulo_ayuda": "Repetir varias instrucciones",
	"grid": {
		"filas": 10,
		"columnas": 10,
		"matriz":
		   ["XXXXXXXXXX",
		   	"XXXXXXXXXX",
			"XXqRRRRwXX",
			"XXT....GXX",
			"XXT....GXX",
			"XXT....GXX",
			"XXT....GXX",
			"XXaFFFFsXX",
			"XXXXXXXXXX",
			"XXXXXXXXXX"]
	},
	"metas": {
		"cantidad": 1,
		"m": [
			{
				"tipo": "perro",
				"fila": 5, "columna": 5,
				"orientacion":"izquierda"
			}
		]
	},
	"personaje": {
		"tipo": "mariohugo",
		"fila": 5,
		"columna": 3,
		"orientacion": "arriba"
	},
	"stackeables": {
		"cantidad": 3,
		"s": [
			{"tipo": "piedra", "fila": 4, "columna": 4},
			{"tipo": "piedra", "fila": 5, "columna": 4},
			{"tipo": "piedra", "fila": 6, "columna": 4}
		]
	},
	"bloquesRequeridos": {
		"cantidad": 1,
		"b": [
			{"tipo": "controls_repeat", "cantidad": 1}
		]
	}
};