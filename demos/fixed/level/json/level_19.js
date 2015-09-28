var HOC_LEVEL = {
    "nombre": "",
    "imagen_inicial": "caca.png",
    "comentario_ayuda": "Elige dos bloques para girar dependiendo de la condición.",
    "titulo_ayuda": "Son sólo dos bloques.",
    "mensaje_inicial": "Agrega sólo dos bloques más para recoger toda la caca.",
    "descripcion": "Agrega sólo dos bloques más para recoger toda la caca.",
    "maximoBloques": 6,
    "grid": {
        "filas": 10,
        "columnas": 10,
        "matriz":
           ["XMMMMMMMMX",
            "MM......MM",
            "M........M",
            "M........M",
            "M........M",
            "M........M",
            "M........M",
            "M........M",
            "MM......MM",
            "XMMMMMMMMX"]
        // ["qRRRRRRRRw",
        //     "T........G",
        //     "T........G",
        //     "T........G",
        //     "T........G",
        //     "T........G",
        //     "T........G",
        //     "T........G",
        //     "T........G",
        //     "aFFFFFFFFs"]
    },
    "personaje": {
        "tipo": "mariohugo",
        "fila": 4,
        "columna": 1,
        "orientacion": "derecha"
    },
    "cacas": {
        "cantidad": 5,
        "requeridas": 5,
        "c": [
            {"fila": 4, "columna": 3},
            {"fila": 2, "columna": 3},
            {"fila": 2, "columna": 6},
            {"fila": 7, "columna": 6},
            {"fila": 7, "columna": 8},
        ]
    },
    "stackeables": {
        "cantidad": 12,
        "s": [
            {"tipo": "piedra", "fila": 3, "columna": 4},
            {"tipo": "piedra", "fila": 3, "columna": 5},
            {"tipo": "piedra", "fila": 4, "columna": 4},
            {"tipo": "piedra", "fila": 4, "columna": 5},
            {"tipo": "piedra", "fila": 5, "columna": 4},
            {"tipo": "piedra", "fila": 5, "columna": 5},
            {"tipo": "piedra", "fila": 6, "columna": 4},
            {"tipo": "piedra", "fila": 6, "columna": 5},
            {"tipo": "piedra", "fila": 7, "columna": 4},
            {"tipo": "piedra", "fila": 7, "columna": 5},
            {"tipo": "piedra", "fila": 8, "columna": 4},
            {"tipo": "piedra", "fila": 8, "columna": 5},
        ]
    },
    "bloquesRequeridos": {
        "cantidad": 3,
        "b": [
            {"tipo": "repetir_hasta", "cantidad": 1},
            {"tipo": "if_caca", "cantidad": 2},
            {"tipo": "girar", "cantidad": 2}
        ]
    }
};