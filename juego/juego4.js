var idir = [0, -1, 0, 1];
var jdir = [1, 0, -1, 0];
var personaje;
var escenario;
var meta, metaEn;
var caca, cacaEn, cacasRecogidas, cacasRequeridas;
var stackeable, stackeableEn;
var bloquesNecesarios;
var s = 45;

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
				"tierra": [3, 0],
				"missing_tile": [4, 0],
				"caca": [5, 0],
				"piedra": [6, 0],
				"reja_horizontal_oscuro": [7, 0],
				"reja_horizontal_claro": [8, 0],
				"reja_izquierda_oscuro": [9, 0],
				"reja_izquierda_claro": [10, 0],
				"reja_derecha_oscuro": [11, 0],
				"reja_derecha_claro": [12, 0],
				"reja_superior_derecha": [13, 0],
				"reja_superior_izquierda": [14, 0],
				"reja_inferior_derecha": [15, 0],
				"reja_inferior_izquierda": [16, 0],
				"reja_abajo": [17, 0]
			}
		}
	}
};

var asset_Snd = {"audio":{"beep":["beep4.wav"]}};

window.onload = function() {
	Crafty.init(450, 450, document.getElementById("gameDiv"));
	Crafty.load(assetsObj, go);
	Crafty.load(asset_Snd, go);
}

var simbolosMurallasAltas = new Set("M?".split(''));
var simbolosMurallasBajas = new Set("RSFTUGJqwasP".split(''));
/*
var indiceTipoPersonaje = {
	"pjtest": 0,
	"mariohugo": 1
}

var indiceTipoMeta = {
	"perro": 0
}
*/
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

function cargar_cacas() {
	cacasRequeridas = 10000;
	if (typeof caca === 'undefined')
		caca = [];
	if (typeof HOC_LEVEL.cacas !== 'undefined') {
		for (var i = 0; i < HOC_LEVEL.cacas.cantidad; ++i) {
			var igridCaca = HOC_LEVEL.cacas.c[i].fila;
			var jgridCaca = HOC_LEVEL.cacas.c[i].columna;
			if (typeof caca[i] !== 'undefined')
				caca[i].destroy();
			caca[i] = Crafty.e("2D, Canvas, caca")
				.attr({igrid: igridCaca, jgrid: jgridCaca,
					x: jgridCaca*s, y: igridCaca*s, w: s, h: s})
			;
			cacaEn[igridCaca][jgridCaca] = caca[i];
		}
		if (typeof HOC_LEVEL.cacas.requeridas !== 'undefined')
			cacasRequeridas = HOC_LEVEL.cacas.requeridas;
	}
}

function tile_simbolo(simbolo) {
	if (typeof tileSimbolo[simbolo] !== 'undefined')
		return tileSimbolo[simbolo];
	return "missing_tile";
}

function crear_escenario() {
	escenario = [];
	cacaEn = [];
	metaEn = [];
	stackeableEn = [];
	for (var i = 0; i < HOC_LEVEL.grid.filas; ++i) {
		escenario[i] = [];
		cacaEn[i] = [];
		metaEn[i] = [];
		stackeableEn[i] = [];
		for (var j = 0; j < HOC_LEVEL.grid.columnas; ++j) {
			escenario[i][j] = Crafty.e("2D, Canvas, " +
					tile_simbolo(HOC_LEVEL.grid.matriz[i][j]))
				.attr({x: j*s, y: i*s, w: s, h: s})
			;
			cacaEn[i][j] = false;
			metaEn[i][j] = false;
			stackeableEn[i][j] = false;
		}
	}
	
	spritePersonaje = HOC_LEVEL.personaje.tipo;
	//indicePersonaje = indiceTipoPersonaje[HOC_LEVEL.personaje.tipo];
	subimgsAnim = 8;
	igridInicial = HOC_LEVEL.personaje.fila;
	jgridInicial = HOC_LEVEL.personaje.columna;
	orientacionInicial = orientacionNumerica[HOC_LEVEL.personaje.orientacion];
	duracionAnim = 800;
	/*
	spriteMeta = HOC_LEVEL.meta.tipo;
	indiceMeta = indiceTipoMeta[HOC_LEVEL.meta.tipo];
	igridMeta = HOC_LEVEL.meta.fila;
	jgridMeta = HOC_LEVEL.meta.columna;
	orientacionMeta = orientacionNumerica[HOC_LEVEL.meta.orientacion];
	*/
	meta = [];
	if (typeof HOC_LEVEL.metas !== 'undefined') {
		for (var i = 0; i < HOC_LEVEL.metas.cantidad; ++i) {
			var spriteMeta = HOC_LEVEL.metas.m[i].tipo;
			var igridMeta = HOC_LEVEL.metas.m[i].fila;
			var jgridMeta = HOC_LEVEL.metas.m[i].columna;
			var orientacionMeta = orientacionNumerica[HOC_LEVEL.metas.m[i].orientacion];
			
			meta[i] = Crafty.e("2D, Canvas, " + spriteMeta + "_o" + orientacionMeta)
				.attr({igrid: igridMeta, jgrid: jgridMeta,
					x: jgridMeta*s, y: igridMeta*s, w: s, h: s})
			;
			
			metaEn[igridMeta][jgridMeta] = meta[i];
		}
	}
	
	cargar_cacas();
	
	stackeable = [];
	if (typeof HOC_LEVEL.stackeables !== 'undefined') {
		for (var i = 0; i < HOC_LEVEL.stackeables.cantidad; ++i) {
			var spriteStackeable = HOC_LEVEL.stackeables.s[i].tipo;
			var igridStackeable = HOC_LEVEL.stackeables.s[i].fila;
			var jgridStackeable = HOC_LEVEL.stackeables.s[i].columna;
			
			stackeable[i] = Crafty.e("2D, Canvas, " + spriteStackeable)
				.attr({igrid: igridStackeable, jgrid: jgridStackeable,
					x: jgridStackeable*s, y: igridStackeable*s, w: s, h: s})
			;
		}
	}
	
	bloquesNecesarios = 10000;
	if (typeof HOC_LEVEL.bloquesNecesarios !== 'undefined')
		bloquesNecesarios = HOC_LEVEL.bloquesNecesarios + 1;
	
	if (typeof HOC_LEVEL.maximoBloques !== 'undefined')
		maximoBloques = HOC_LEVEL.maximoBloques;
}

function bloques_usados() {
	return Blockly.mainWorkspace.getAllBlocks().length;
}

function simbolo_en(igrid, jgrid) {
	if (0 <= igrid && igrid < HOC_LEVEL.grid.filas &&
		0 <= jgrid && jgrid < HOC_LEVEL.grid.columnas)
		return HOC_LEVEL.grid.matriz[igrid][jgrid];
	return "?";
}

function condicion_de_victoria_inmediata() {
	return false;
}

function condicion_de_victoria_final() {
	return (metaEn[personaje.igrid][personaje.jgrid] ||
			cacasRecogidas >= cacasRequeridas);
}

function go() {
	crear_escenario();
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
				w: s, h: s,
				orientacion: orientacionInicial,
				estado: "esperando",
				duracionAnimacion: duracionAnim
			});
			this.x = this.jgrid*s;
			this.y = this.igrid*s;
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
						this.x = (this.jgrid + tAnim*jdir[this.orientacion])*s;
						this.y = (this.igrid + tAnim*idir[this.orientacion])*s;
					} else {
						
						this.igrid += idir[this.orientacion];
						this.jgrid += jdir[this.orientacion];
						this.x = this.jgrid*s;
						this.y = this.igrid*s;
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
					
					if (cacaEn[this.igrid][this.jgrid]) {
						++cacasRecogidas;
						cacaEn[this.igrid][this.jgrid].destroy();
						cacaEn[this.igrid][this.jgrid] = false;
						Crafty.audio.play("beep");
					}
					
					if (!condicion_de_victoria_inmediata())
						this.estado = "listo";
					else
						this.estado = "celebrando";
					break;
				case "listo":
					stepCode();
					break;
				case "finalizando":
					if (condicion_de_victoria_final())
						this.estado = "celebrando";
					else{
						incompletedStage();
						this.estado = "muerto";
					}
					break;
				case "celebrando":
					if (bloques_usados() <= bloquesNecesarios)
						completedStage();
					else
						semiCompletedStage(5);
					this.estado = "muerto";
					break;
			}
		})
		.bind("avanzar", function() {	
			var simbolo = simbolo_en(
					this.igrid + idir[this.orientacion],
					this.jgrid + jdir[this.orientacion]);
			if (!simbolosMurallasAltas.has(simbolo) &&
				!simbolosMurallasBajas.has(simbolo)) {
				this.inicioAnimacion = Date.now();
				this.animate("caminando_o" + this.orientacion);
				this.estado = "avanzando";
			} else {
				$("#murallaModal").modalDisplay();
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

	resetear_nivel();
}

function resetear_nivel() {
	personaje.trigger("resetear");
	cargar_cacas();
	cacasRecogidas = 0;
}

function avanzar() {
	personaje.trigger("avanzar");
}

function girar_izquierda() {
	personaje.trigger("girar", 1);
}

function girar_derecha() {
	personaje.trigger("girar", -1);
}

function veo_caca_en_orientacion(orientacion) {
	var igrid = personaje.igrid, jgrid = personaje.jgrid;
	while (!simbolosMurallasAltas.has(simbolo_en(igrid, jgrid))) {
		if (hayCaca[igrid][jgrid])
			return true;
		igrid += idir[orientacion];
		jgrid += jdir[orientacion];
	}
	return false;
}

function veo_caca_al_frente() {
	return veo_caca_en_orientacion(personaje.orientacion);
}

function veo_caca_izquierda() {
	return veo_caca_en_orientacion((personaje.orientacion + 1)%4);
}

function veo_caca_derecha() {
	return veo_caca_en_orientacion((personaje.orientacion + 3)%4);
}

function no_mas_caca() {
	var r = (cacasRecogidas >= caca.length);
	alert(r);
	return r;
}