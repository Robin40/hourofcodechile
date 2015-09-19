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
				"pjtest_o3": [24, 0]
			}
		}
	}
};

window.onload = function() {
	Crafty.init(450, 476, document.getElementById("gameDiv"));
	Crafty.load(assetsObj, go);
}

function go() {
	var spritePersonaje = "pjtest";
	var subimgsAnim = 8;
	var orientacionInicial = 0;
	var duracionAnim = 800;
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
		.bind("resetear", function(e) {
			this.attr({
				x: 32, y: 32, w: 32, h: 32,
				igrid: 1, jgrid: 1,
				orientacion: 0,
				estado: "esperando",
				duracionAnimacion: duracionAnim
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