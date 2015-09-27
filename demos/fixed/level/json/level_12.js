var HOC_LEVEL = {
    "nombre": "Nombre del nivel",
    "descripcion": "Descripción del nivel",
    "maximoBloques": 5,
    "grid": {
        "filas": 10,
        "columnas": 10,
        "matriz":
           [
            "MMMMMMMMMM",
            "M........M",
            "M.MM..MMMM",
            "M.M.....MX",
            "M.M.MMM.MX",
            "M...M.M.MX",
            "M.M...M..X",
            "M.MMMMM.MX",
            "M.......MX",
            "MM..MMMMMX",
        ]
    },
    "personaje": {
        "tipo": "mariohugo",
        "fila": 1,
        "columna": 8,
        "orientacion": "izquierda"
    },
    "cacas": {
        "cantidad": 7,
        "requeridas": 7,
        "c": [
            {"fila": 1, "columna": 1},
            {"fila": 8, "columna": 1},
            {"fila": 8, "columna": 7},
            {"fila": 3, "columna": 7},
            {"fila": 3, "columna": 3},
            {"fila": 6, "columna": 3},
            {"fila": 6, "columna": 5},
        ]
    },
    "stackeables": {
        "cantidad": 6,
        "s": [
            {"tipo": "piedra", "fila": 2, "columna": 4},
            {"tipo": "piedra", "fila": 2, "columna": 5},
            {"tipo": "piedra", "fila": 5, "columna": 2},
            {"tipo": "piedra", "fila": 6, "columna": 8},
            {"tipo": "piedra", "fila": 9, "columna": 2},
            {"tipo": "piedra", "fila": 9, "columna": 3},

        ]
    }
};