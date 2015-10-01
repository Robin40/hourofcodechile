var HOC_LEVEL = {
    "nombre": "",
    "imagen_inicial": "caca.png",
    "titulo_ayuda": "Tu puedes",
    "comentario_ayuda": "Ya no hay ayuda, solo tienes tu mente!",
    "mensaje_inicial": "Recoge toda la caca usando a lo mas 7 bloques.",
    "descripcion": "Recoge toda la caca usando a lo mas 7 bloques.",
    "maximoBloques": 7,
    "grid": {
        "filas": 10,
        "columnas": 10,
        "matriz":
           [
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "M........M",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
        ]
    },
    "personaje": {
        "tipo": "mariohugo",
        "fila": 4,
        "columna": 4,
        "orientacion": "derecha"
    },
    "cacas": {
        "cantidad": 2,
        "requeridas": 2,
        "c": [
            {"fila": 4, "columna": 8},
            {"fila": 4, "columna": 1},
        ]
    },
    "stackeables": {
        "cantidad": 0,
        "s": [
            {"tipo": "piedra", "fila": 0, "columna": 4},
            {"tipo": "fuego0", "fila": 0, "columna": 0},
            {"tipo": "fuego1", "fila": 0, "columna": 1},
            {"tipo": "fuego2", "fila": 0, "columna": 2},

            {"tipo": "fuego2", "fila": 1, "columna": 0},
            {"tipo": "fuego1", "fila": 1, "columna": 1},
            {"tipo": "fuego0", "fila": 1, "columna": 2},

            {"tipo": "fuego0", "fila": 9, "columna": 3},
            {"tipo": "fuego1", "fila": 9, "columna": 4},
            {"tipo": "fuego2", "fila": 9, "columna": 5},
            {"tipo": "fuego3", "fila": 9, "columna": 6},
            {"tipo": "fuego0", "fila": 9, "columna": 7},
            {"tipo": "fuego1", "fila": 9, "columna": 8},
            {"tipo": "fuego2", "fila": 9, "columna": 9},
        ],
    },
    "bloquesRequeridos": {
        "cantidad": 1,
        "b": [
            {"tipo": "repetir_hasta", "cantidad": 1},
        ]
    }
};