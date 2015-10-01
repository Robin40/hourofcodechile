var HOC_LEVEL = {
    "nombre": "",
    "imagen_inicial": "caca.png",
    "comentario_ayuda": "Piensa un poco mas",
    "titulo_ayuda": "Tu puedes!",
    "descripcion": "Recoge toda la caca usando a lo mas 12 bloques.",
    "maximoBloques": 12,
    "mensaje_inicial": "Recoge toda la caca usando a lo mas 12 bloques.",
    "grid": {
        "filas": 10,
        "columnas": 10,
        "matriz":
           [
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "M........M",
            "M........M",
            "M........M",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
            "MMMMMMMMMM",
        ]
    },
    "personaje": {
        "tipo": "mariohugo",
        "fila": 4,
        "columna": 1,
        "orientacion": "derecha"
    },
    "cacas": {
        "cantidad": 9,
        "requeridas": 9,
        "c": [
            {"fila": 3, "columna": 2},
            {"fila": 3, "columna": 4},
            {"fila": 3, "columna": 6},
            {"fila": 3, "columna": 7},
            {"fila": 4, "columna": 4},
            {"fila": 4, "columna": 6},
            {"fila": 5, "columna": 1},
            {"fila": 5, "columna": 3},
            {"fila": 5, "columna": 7},
        ]
    },
    "stackeables": {
        "cantidad": 0,
        "s": [
            {"tipo": "piedra", "fila": 2, "columna": 4},
            {"tipo": "piedra", "fila": 2, "columna": 5},
            {"tipo": "piedra", "fila": 5, "columna": 2},
            {"tipo": "piedra", "fila": 6, "columna": 8},
            {"tipo": "piedra", "fila": 9, "columna": 2},
            {"tipo": "piedra", "fila": 9, "columna": 3},

        ]
    },
    "bloquesRequeridos": {
        "cantidad": 1,
        "b": [
            {"tipo": "repetir_hasta", "cantidad": 1},
        ]
    }
};