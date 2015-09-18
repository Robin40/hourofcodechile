Crafty.init(450, 476, document.getElementById("gameDiv"));

var idir = [0, -1, 0, 1];
var jdir = [1, 0, -1, 0];

var personaje = Crafty.e("2D, Canvas, Color")
	.attr({
		tAnimacion: function() {
			return (Date.now() - this.inicioAnimacion)/this.duracionAnimacion;
		}
	})
	.color("#FF0000")
	.bind("resetear", function(e) {
		this.attr({
			x: 32, y: 32, w: 32, h: 32,
			igrid: 1, jgrid: 1,
			orientacion: 0,
			estado: "esperando",
			duracionAnimacion: 800
		});
	})
	.bind("EnterFrame", function(e) {
		var tAnim = this.tAnimacion();
		switch (this.estado) {
			case "avanzando":
				this.color("#FF8000");
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
				this.color("#FFFF00");
				if (tAnim < 1) {
					
				} else {
					this.orientacion = (this.orientacion + this.sentidoGiro + 4)%4;
					this.estado = "descansando";
				}
			break;
			case "descansando":
				this.color("#FF0000");
				this.estado = "listo";
			break;
			
			case "listo":
				stepCode();
			break;
		}
	})
;

personaje.trigger("resetear");

function avanzar() {
	personaje.inicioAnimacion = Date.now();
	personaje.estado = "avanzando";
}

function girar_antihorario() {
	personaje.inicioAnimacion = Date.now();
	personaje.sentidoGiro = 1;
	personaje.estado = "girando";
}

function girar_horario() {
	personaje.inicioAnimacion = Date.now();
	personaje.sentidoGiro = -1;
	personaje.estado = "girando";
}