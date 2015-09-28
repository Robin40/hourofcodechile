var HOC_LEVEL = {
    "nombre": "",
    "imagen_inicial": "caca.png",
    "maximoBloques": 4,
    "comentario_ayuda": "Debes combinar los bloques \"repetir hasta\", \"si veo caca\", \"girar\" y \"avanzar\" para resolver este nivel. Como ayuda, los bloques \"si veo caca\" y \"girar\" deben ser hacia la derecha.",
    "titulo_ayuda": "Debes combinar varios bloques.",
    "mensaje_inicial": "Este nivel es similar al anterior. Recuerda cómo usaste el bloque \"repetir hasta\" combinado con \"si veo caca\" y el bloque \"girar\" para resolver el nivel anterior y podrás recoger toda la caca.",
    "descripcion": "Recuerda cómo usaste el bloque \"repetir hasta\" combinado con \"si veo caca\" y el bloque \"girar\" para resolver el nivel anterior y podrás recoger toda la caca.",
    "grid": {
        "filas": 10,
        "columnas": 10,
        "matriz": [
            "XXXXXXXXXX",
            "XqRRRRRRwX",
            "XT......GX",
            "XT......GX",
            "XT......GX",
            "XT......GX",
            "XT......GX",
            "XaFFFFFFsX",
            "XXXXXXXXXX",
            "XXXXXXXXXX",
        ]
    },
    "personaje": {
        "tipo": "mariohugo",
        "fila": 2,
        "columna": 3,
        "orientacion": "derecha"
    },
    "cacas": {
        "cantidad": 3,
        "requeridas": 3,
        "c": [
            {"fila": 2, "columna": 7},
            {"fila": 6, "columna": 7},
            {"fila": 6, "columna": 2}
        ]
    },
    "stackeables": {
		"cantidad": 5,
		"s": [
			{"tipo": "piedra", "fila": 4, "columna": 2},
			{"tipo": "piedra", "fila": 4, "columna": 3},
			{"tipo": "piedra", "fila": 4, "columna": 4},
			{"tipo": "piedra", "fila": 4, "columna": 5},
			{"tipo": "piedra", "fila": 4, "columna": 6}
		]
	},
    "bloquesRequeridos": {
        "cantidad": 3,
        "b": [
            {"tipo": "repetir_hasta", "cantidad": 1},
            {"tipo": "if_caca", "cantidad": 1},
            {"tipo": "girar", "cantidad": 1}
        ]
    }
};

