var idir = [0, -1, 0, 1];
var jdir = [1, 0, -1, 0];
var personaje;

var assetsObj = {
	"sprites": {
		"pjtest.png": {
			tile: 32, tileh: 32,
			map: {
				"pjtest_o0": [0, 0],
				"pjtest_o1": [8, 0],
				"pjtest_o2": [16, 0],
				"pjtest_o3": [24, 0],
				
				"mariohugo_o0": [0, 1],
				"mariohugo_o1": [8, 1],
				"mariohugo_o2": [16, 1],
				"mariohugo_o3": [24, 1],
			}
		},
		"escenariotest.png": {
			tile: 32, tileh: 32,
			map: {
				"pasto": [0, 0]
			}
		}
	}
};

window.onload = function() {
	Crafty.init(450, 476, document.getElementById("gameDiv"));
	Crafty.load(assetsObj, go);
}

function crear_escenario() {
	var escenario = [[]];
	for (var i = 0; i < 12; ++i)
		for(var j = 0; j < 12; ++j)
			escenario[i][j] = Crafty.e("2D, Canvas, pasto")
				.attr({x: j*32, y: i*32, w: 32, h: 32})
			;
}

function go() {
	var spritePersonaje = "mariohugo";
	var subimgsAnim = 8;
	var orientacionInicial = 0;
	var duracionAnim = 800;
	var escenario = crear_escenario();
	personaje = Crafty.e("2D, Canvas, " +
			spritePersonaje + "_o" + orientacionInicial + ", SpriteAnimation")
		.attr({
			tAnimacion: function() {
				return (Date.now() - this.inicioAnimacion)/this.duracionAnimacion;
			}
		})
		.reel("caminando_o0", duracionAnim, 0, 0, subimgsAnim)
		.reel("caminando_o1", duracionAnim, subimgsAnim, 0, subimgsAnim)
		.reel("caminando_o2", duracionAnim, subimgsAnim*2, 0, subimgsAnim)
		.reel("caminando_o3", duracionAnim, subimgsAnim*3, 0, subimgsAnim)
		.bind("inicializar", function(e) {
			this.attr({
				w:32, h:32,
				estado: "esperando",
				duracionAnimacion: duracionAnim
			});
		})
		.bind("setear", function(sprite, fila, columna, orientacionInicial) {
			this.attr({
				x: columna*32, y: fila*32,
				igrid: fila, jgrid: columna,
				orientacion: orientacionInicial,
				estado: "esperando"
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
					this.estado = "listo";
				break;
				case "listo":
					stepCode();
				break;
			}
		})
		.bind("avanzar", function() {
			this.inicioAnimacion = Date.now();
			this.animate("caminando_o" + this.orientacion);
			this.estado = "avanzando";
		})
		.bind("girar", function(sentido) {
			this.inicioAnimacion = Date.now();
			this.sentidoGiro = sentido;
			this.orientacionDespues = (this.orientacion + this.sentidoGiro + 4)%4;
			this.estado = "girando";
		})
	;

	personaje.trigger("inicializar");
	personaje.trigger("setear", "pjtest", 3, 4, 0);
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
