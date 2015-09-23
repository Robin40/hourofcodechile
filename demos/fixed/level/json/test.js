var HOC_LEVEL = {
	"level": 1,
	"grid": {
		"filas": 8,
		"columnas": 8,
		"matriz": [
			"########",
			"########",
			"###.####",
			"###.####",
			"###.####",
			"########",
			"########",
			"########"
		]
	},
	"personaje": {
		"tipo": "pajaro",
		"fila": 2,
		"columna": 3,
		"orientacion": "abajo"
	},
	"meta": {
		"tipo": "cerdo",
		"fila": 4,
		"columna": 3
	},
	"descripcion": "Ay&uacute;dame a llegar a la meta",
	"minimoBloques": 3,
	"bloquesDisponibles": [
		{"tipo": "avanzar"},
		{"tipo": "girar", "sentido": "horario"},
		{"tipo": "girar", "sentido": "antihorario"},
	],
	"bloquesIniciales": [
		{"tipo": "al_ejecutar", "imborrable": true},
		{"tipo": "avanzar"}
	]
}