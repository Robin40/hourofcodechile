var HOC_LEVEL = {
    "nombre": "",
    "imagen_inicial": "caca.png",
    "comentario_ayuda": "Este nivel es esencialmente igual a los dos anteriores pero en vez de mirar y girar a la derecha, debes hacerlo hacia la izquierda. Si tienes dudas puedes volver atrás y revisar los bloques anteriores.",
    "titulo_ayuda": "Es esencialmente igual al anterior",
    "descripcion": "Ya te estás acercando al final. El nivel es intimidante, pero tienes los conocimientos para superarlo. Usa solo 4 bloques para recoger toda la caca y pasar al siguiente nivel.",
    "maximoBloques": 4,
    "mensaje_inicial": "Ya te estás acercando al final. El nivel es intimidante, pero tienes los conocimientos para superarlo. Usa solo 4 bloques para recoger toda la caca y pasar al siguiente nivel.",
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