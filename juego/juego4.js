var idir = [0, -1, 0, 1];
var jdir = [1, 0, -1, 0];
var personaje;

var assetsObj = {
	"sprites": {
		"personajes.png": {
			tile: 32, tileh: 32,
			map: {
				"pjtest_o0": [0, 0],
				"pjtest_o1": [8, 0],
				"pjtest_o2": [16, 0],
				"pjtest_o3": [24, 0],
				
				"mariohugo_o0": [0, 1],
				"mariohugo_o1": [8, 1],
				"mariohugo_o2": [16, 1],
				"mariohugo_o3": [24, 1]
			}
		},
		"metas.png": {
			tile: 32, tileh: 32,
			map: {
				"perro_o0": [0, 0],
				"perro_o1": [1, 0],
				"perro_o2": [2, 0],
				"perro_o3": [3, 0]
			}
		},
		"tiles.png": {
			tile: 32, tileh: 32,
			map: {
				"pasto_oscuro": [0, 0],
				"pasto_claro": [1, 0],
				"bloque_muralla": [2, 0],
				"tierra": [3, 0]
			}
		}
	}
};

window.onload = function() {
	Crafty.init(450, 476, document.getElementById("gameDiv"));
	Crafty.load(assetsObj, go);
}

var tileSimbolo = {
	"X": "pasto_oscuro",
	"Y": "pasto_claro",
	".": "tierra",
	"R": "bloque_muralla",
	"?": "missing_tile"
}

var simbolosMurallas = new Set("R?".split(''));

var indiceTipoPersonaje = {
	"pjtest": 0,
	"mariohugo": 1
}

var indiceTipoMeta = {
	"perro": 0
}

var orientacionNumerica = {
	"derecha": 0,
	"arriba": 1,
	"izquierda": 2,
	"abajo": 3
}

var spritePersonaje = "mariohugo";
var indicePersonaje = 1;
var subimgsAnim = 8;
var igridInicial = 3;
var jgridInicial = 4;
var orientacionInicial = 0;
var duracionAnim = 800;

var spriteMeta = "perro";
var indiceMeta = 0;
var igridMeta = 11;
var jgridMeta = 11;
var orientacionMeta = 0;

function crear_escenario() {
	var escenario = [];
	for (var i = 0; i < HOC_LEVEL.grid.filas; ++i) {
		escenario[i] = [];
		for(var j = 0; j < HOC_LEVEL.grid.columnas; ++j)
			escenario[i][j] = Crafty.e("2D, Canvas, " + tileSimbolo[HOC_LEVEL.grid.matriz[i][j]])
				.attr({x: j*32, y: i*32, w: 32, h: 32})
			;
	}
	
	spritePersonaje = HOC_LEVEL.personaje.tipo;
	indicePersonaje = indiceTipoPersonaje[HOC_LEVEL.personaje.tipo];
	subimgsAnim = 8;
	igridInicial = HOC_LEVEL.personaje.fila;
	jgridInicial = HOC_LEVEL.personaje.columna;
	orientacionInicial = orientacionNumerica[HOC_LEVEL.personaje.orientacion];
	duracionAnim = 800;
	
	spriteMeta = HOC_LEVEL.meta.tipo;
	indiceMeta = indiceTipoMeta[HOC_LEVEL.meta.tipo];
	igridMeta = HOC_LEVEL.meta.fila;
	jgridMeta = HOC_LEVEL.meta.columna;
	orientacionMeta = orientacionNumerica[HOC_LEVEL.meta.orientacion];
	
	var meta = Crafty.e("2D, Canvas, " + spriteMeta + "_o" + orientacionMeta)
		.attr({x: jgridMeta*32, y: igridMeta*32, w: 32, h: 32})
	;
}

function crear_test() {
	var test = Crafty.e("2D, Canvas, mariohugo_o0, SpriteAnimation")
		.attr({x: 32, y: 32, w: 32, h: 32})
	;
}

function simbolo_en(igrid, jgrid) {
	if (0 <= igrid && igrid < HOC_LEVEL.grid.filas &&
		0 <= jgrid && jgrid < HOC_LEVEL.grid.columnas)
		return HOC_LEVEL.grid.matriz[igrid][jgrid];
	return "?";
}

function go() {
	var escenario = crear_escenario();
	//var test = crear_test();
	personaje = Crafty.e("2D, Canvas, " +
			spritePersonaje + "_o" + orientacionInicial + ", SpriteAnimation")
		.attr({
			tAnimacion: function() {
				return (Date.now() - this.inicioAnimacion)/this.duracionAnimacion;
			}
		})
		.reel("caminando_o0", duracionAnim, 0, indicePersonaje, subimgsAnim)
		.reel("caminando_o1", duracionAnim, subimgsAnim, indicePersonaje, subimgsAnim)
		.reel("caminando_o2", duracionAnim, subimgsAnim*2, indicePersonaje, subimgsAnim)
		.reel("caminando_o3", duracionAnim, subimgsAnim*3, indicePersonaje, subimgsAnim)
		.bind("setear", function(atributos) {
			this.attr(atributos);
			this.attr({
				igrid: igridInicial, jgrid: jgridInicial,
				w: 32, h: 32,
				orientacion: orientacionInicial,
				estado: "esperando",
				duracionAnimacion: duracionAnim
			});
			this.x = this.jgrid*32;
			this.y = this.igrid*32;
			this.animate("caminando_o" + this.orientacion).pauseAnimation();
		})
		.bind("resetear", function() {
			personaje.trigger("setear", {
				spritePersonaje: spritePersonaje,
				indicePersonaje: indicePersonaje,
				igridInicial: igridInicial,
				jgridInicial: jgridInicial,
				orientacionInicial: orientacionInicial
			});
		})
		.bind("EnterFrame", function(e) {
			var tAnim = this.tAnimacion();
			switch (this.estado) {
				case "avanzando":
					if (tAnim < 1) {
						this.x = (this.jgrid + tAnim*jdir[this.orientacion])*32;
						this.y = (this.igrid + tAnim*idir[this.orientacion])*32;
					} else {
						
						this.igrid += idir[this.orientacion];
						this.jgrid += jdir[this.orientacion];
						this.x = this.jgrid*32;
						this.y = this.igrid*32;
						this.estado = "descansando";
					}
				break;
				case "girando":
					if (tAnim < 0.5) {
						
					} else if (tAnim < 1) {
						this.animate("caminando_o" + this.orientacionDespues).pauseAnimation();
					} else {
						this.orientacion = this.orientacionDespues;
						this.estado = "descansando";
					}
				break;
				case "descansando":
					this.animate("caminando_o" + this.orientacion).pauseAnimation();
					if (this.igrid != igridMeta || this.jgrid != jgridMeta)
						this.estado = "listo";
					else
						this.estado = "celebrando";
				break;
				case "listo":
					stepCode();
				break;
				case "celebrando":
					alert("has pasado el nivel\nmovimiento abortado");
					this.estado = "muerto";
				break;
			}
		})
		.bind("avanzar", function() {			
			if (!simbolosMurallas.has(simbolo_en(
					this.igrid + idir[this.orientacion],
					this.jgrid + jdir[this.orientacion]))) {
				this.inicioAnimacion = Date.now();
				this.animate("caminando_o" + this.orientacion);
				this.estado = "avanzando";
			} else {
				alert("chocaste con una muralla\nmovimiento abortado");
				this.estado = "muerto";
			}
		})
		.bind("girar", function(sentido) {
			this.inicioAnimacion = Date.now();
			this.sentidoGiro = sentido;
			this.orientacionDespues = (this.orientacion + this.sentidoGiro + 4)%4;
			this.estado = "girando";
		})
	;

	personaje.trigger("resetear");
}

function avanzar() {
	personaje.trigger("avanzar");
}

function girar_antihorario() {
	personaje.trigger("girar", 1);
}

function girar_horario() {
	personaje.trigger("girar", -1);
}
