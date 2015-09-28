var HOC_LEVEL = {
    "nombre": "",
    "imagen_inicial": "caca.png",
    "titulo_ayuda": "Confía en tus conocimientos",
    "comentario_ayuda": "Usa todo lo que has aprendido. Si lo necesitas vuelve a algún nivel anterior para recordar los bloques necesarios. ¡Buena suerte!",
    "mensaje_inicial": "Recoge toda la caca que han dejado tus perros, pero no te intimides por el nivel, ya tienes todo el poder necesario para lograrlo.",
    "descripcion": "Recoge toda la caca que han dejado tus perros, pero no te intimides por el nivel, ya tienes todo el poder necesario para lograrlo.",
    "maximoBloques": 6,
    "grid": {
        "filas": 10,
        "columnas": 10,
        "matriz":
           [
            "...M.MMMMM",
            "...M.....M",
            "MMMMMMMM.M",
            "M........M",
            "M.MMMMMMMM",
            "M........M",
            "MMM.MMMM.M",
            "M........M",
            "M.MMMMMMMM",
            "MMM.......",
        ]
    },
    "personaje": {
        "tipo": "mariohugo",
        "fila": 1,
        "columna": 4,
        "orientacion": "derecha"
    },
    "cacas": {
        "cantidad": 7,
        "requeridas": 7,
        "c": [
            {"fila": 2, "columna": 8},
            {"fila": 3, "columna": 5},
            {"fila": 5, "columna": 1},
            {"fila": 5, "columna": 6},
            {"fila": 7, "columna": 4},
            {"fila": 7, "columna": 8},
            {"fila": 8, "columna": 1},
        ]
    },
    "stackeables": {
        "cantidad": 14,
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
        "cantidad": 5,
        "b": [
            {"tipo": "repetir_hasta", "cantidad": 1},
            {"tipo": "if_caca", "cantidad": 2},
            {"tipo": "girar", "cantidad": 2}
        ]
    }
};