var idir = [0, -1, 0, 1];
var jdir = [1, 0, -1, 0];
var personaje;
var escenario;
var meta, metaEn;
var caca, indiceCacaEn, cacasRecogidas, cacasRequeridas;
var stackeable, stackeableEn;
var bloquesNecesarios;
var s = 45;
var duracionAnim = 500;
var hoc_paused_;
var t_delay = 0;
var t_ini;
var t_end;

var sepAnimChoque = 0.7;
var dgridMaxAnimChoque = 0.5;
function dgrid_animacion_choque(t) {
	var m = dgridMaxAnimChoque;
	var s = sepAnimChoque;
	var a = 1 - s;
	if (t < 0.25*a)
		return m* t*4/a;
	if (t < 0.5*a)
		return m* (1 - (t-0.25*a)*4/a);
	if (t < 0.5*a + s)
		return 0;
	if (t < 0.75*a + s)
		return m* ((t-(0.5*a+s))*4/a);
	if (t < 1)
		return m* (1 - (t-(0.75*a+s))*4/a);
	return 0;
}

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
				"mariohugo_o3": [24, 1],
				"mariohugo_a0": [32, 1],
				"mariohugo_a1": [33, 1],
				"mariohugo_a2": [34, 1],
				"mariohugo_a3": [35, 1],
				"mariohugo_h0": [36, 1],
				"mariohugo_h1": [37, 1],
				"mariohugo_h2": [38, 1],
				"mariohugo_h3": [39, 1]
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
				"reja_abajo": [17, 0],
				"reja_superior_derecha_i": [18, 0],
				"reja_superior_izquierda_i": [19, 0],
				"reja_inferior_derecha_i": [20, 0],
				"reja_inferior_izquierda_i": [21, 0],
				"fuego0": [22, 0],
				"fuego1": [23, 0],
				"fuego2": [24, 0],
				"fuego3": [25, 0]
			}
		}
	},
	"audio": {
		"beep": ["beep4.wav"],
		"achieve": ["achieve.wav"],
		"mal":["mal.wav"],
		"ladrido":["guau.wav"],
		"masomenos":["masomenos.wav"]
	}
};

window.onload = function() {
	Crafty.init(450, 450, document.getElementById("gameDiv"));
	Crafty.load(assetsObj, go);
}

var simbolosMurallasAltas = new Set("M?".split(''));
var simbolosMurallasBajas = new Set("RSFTUGJqwas".split(''));
var stackeablesSolidos = new Set(["piedra"]);
var tilesFuegos = new Set(["fuego0", "fuego1","fuego2","fuego3"]);
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
var duracionAnimFuego = 500;

function cargar_cacas() {
	cacasRequeridas = 10000;
	caca = [];
	if (typeof HOC_LEVEL.cacas !== 'undefined') {
		for (var i = 0; i < HOC_LEVEL.cacas.cantidad; ++i) {
			var igridCaca = HOC_LEVEL.cacas.c[i].fila;
			var jgridCaca = HOC_LEVEL.cacas.c[i].columna;

			caca[i] = Crafty.e("2D, Canvas, caca")
				.attr({igrid: igridCaca, jgrid: jgridCaca,
					x: jgridCaca*s, y: igridCaca*s, w: s, h: s})
			;
			indiceCacaEn[igridCaca][jgridCaca] = i;
		}
		if (typeof HOC_LEVEL.cacas.requeridas !== 'undefined')
			cacasRequeridas = HOC_LEVEL.cacas.requeridas;
	}
}

function recargar_cacas() {
	cacasRecogidas = 0;
	for (var i = 0; i < caca.length; ++i) {
		caca[i].visible = true;
		indiceCacaEn[caca[i].igrid][caca[i].jgrid] = i;
	}
}

function tile_simbolo(simbolo) {
	if (typeof tileSimbolo[simbolo] !== 'undefined')
		return tileSimbolo[simbolo];
	return "missing_tile";
}

function crear_escenario() {
	escenario = [];
	indiceCacaEn = [];
	metaEn = [];
	stackeableEn = [];
	for (var i = 0; i < HOC_LEVEL.grid.filas; ++i) {
		escenario[i] = [];
		indiceCacaEn[i] = [];
		metaEn[i] = [];
		stackeableEn[i] = [];
		for (var j = 0; j < HOC_LEVEL.grid.columnas; ++j) {
			escenario[i][j] = Crafty.e("2D, Canvas, " +
					tile_simbolo(HOC_LEVEL.grid.matriz[i][j]))
				.attr({x: j*s, y: i*s, w: s, h: s})
			;
			indiceCacaEn[i][j] = -1;
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
			var sonidoDePerro = false;
			if (spriteMeta == "perro" && !sonidoDePerro){
				Crafty.audio.play("ladrido");
				sonidoDePerro=true;
			}
			var igridMeta = HOC_LEVEL.metas.m[i].fila;
			var jgridMeta = HOC_LEVEL.metas.m[i].columna;
			var orientacionMeta = orientacionNumerica[HOC_LEVEL.metas.m[i].orientacion];
			
			meta[i] = Crafty.e("2D, Canvas, " + spriteMeta + "_o" + orientacionMeta)
				.attr({igrid: igridMeta, jgrid: jgridMeta,
					x: jgridMeta*s, y: igridMeta*s, w: s, h: s, tipo: spriteMeta})
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
			
			stackeable[i] = Crafty.e("2D, Canvas, " + spriteStackeable + ", SpriteAnimation")
				.attr({igrid: igridStackeable, jgrid: jgridStackeable,
					x: jgridStackeable*s, y: igridStackeable*s, w: s, h: s,
					tipo: spriteStackeable})
			;
			
			if (tilesFuegos.has(spriteStackeable))
				stackeable[i]
					.reel("flameo", duracionAnimFuego, 22, 0, 4)
					.animate("flameo", -1)
					.reelPosition(parseInt(spriteStackeable[spriteStackeable.length-1]))
				;
			
			stackeableEn[igridStackeable][jgridStackeable] = stackeable[i];
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
		.reel("mirando_a0", duracionAnim, subimgsAnim*4, indicePersonaje, 1)
		.reel("mirando_a1", duracionAnim, subimgsAnim*4 + 1, indicePersonaje, 1)
		.reel("mirando_a2", duracionAnim, subimgsAnim*4 + 2, indicePersonaje, 1)
		.reel("mirando_a3", duracionAnim, subimgsAnim*4 + 3, indicePersonaje, 1)
		.reel("mirando_h0", duracionAnim, subimgsAnim*4 + 4, indicePersonaje, 1)
		.reel("mirando_h1", duracionAnim, subimgsAnim*4 + 5, indicePersonaje, 1)
		.reel("mirando_h2", duracionAnim, subimgsAnim*4 + 6, indicePersonaje, 1)
		.reel("mirando_h3", duracionAnim, subimgsAnim*4 + 7, indicePersonaje, 1)
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
			var dgrid;
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
				case "chocando":
					if (tAnim < 1) {
						dgrid = dgrid_animacion_choque(tAnim);
						this.x = (this.jgrid + dgrid*jdir[this.orientacion])*s;
						this.y = (this.igrid + dgrid*idir[this.orientacion])*s;
					} else {
						this.x = this.jgrid*s;
						this.y = this.igrid*s;
						$("#murallaModal").modalDisplay();
						this.estado = "muerto";
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
				case "mirando":
					if (tAnim < 0.5) {
						
					} else if (tAnim < 1) {
						if (this.sentidoMirada != 0)
							this.animate("mirando_" + (this.sentidoMirada > 0 ? "a" : "h") +
								this.orientacion).pauseAnimation();
					} else {
						this.estado = "listo";
					}
					break;
				case "descansando":
					this.animate("caminando_o" + this.orientacion).pauseAnimation();
					
					if (indiceCacaEn[this.igrid][this.jgrid] != -1) {
						++cacasRecogidas;
						caca[indiceCacaEn[this.igrid][this.jgrid]].visible = false;
						indiceCacaEn[this.igrid][this.jgrid] = -1;
						
						Crafty.audio.play("beep");
					}
					
					if (!condicion_de_victoria_inmediata())
						this.estado = "listo";
					else
						this.estado = "celebrando";
					break;
				case "listo":
					if(t_delay <= 0){
						hoc_paused_ = false;
					}
					stepCode();
					else{
						
					}
					break;
				case "finalizando":
					if (condicion_de_victoria_final()){
						this.estado = "celebrando";
					}
					else {
						incompletedStage();
						this.estado = "muerto";
						Crafty.audio.play("mal");
					}
					break;
				case "celebrando":
					if (bloques_usados() <= bloquesNecesarios){
						completedStage();
						Crafty.audio.play("achieve");
					}
					else{
						semiCompletedStage(5);
						Crafty.audio.play("masomenos");
					}
					this.estado = "muerto";
					break;
			}
		})
		.bind("avanzar", function() {
			var igridDespues = this.igrid + idir[this.orientacion];
			var jgridDespues = this.jgrid + jdir[this.orientacion];
			this.inicioAnimacion = Date.now();
			this.animate("caminando_o" + this.orientacion);
			var simbolo = simbolo_en(igridDespues, jgridDespues);
			if (!simbolosMurallasAltas.has(simbolo) &&
				!simbolosMurallasBajas.has(simbolo) &&
				!stackeablesSolidos.has(stackeableEn[igridDespues][jgridDespues].tipo)) {
				this.estado = "avanzando";
			} else {
				this.estado = "chocando";
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
	recargar_cacas();
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

function veo_caca_en_orientacion(orientacion, sentido) {
	personaje.inicioAnimacion = Date.now();
	personaje.sentidoMirada = sentido;
	personaje.estado = "mirando";
	var igrid = personaje.igrid, jgrid = personaje.jgrid;
	while (!simbolosMurallasAltas.has(simbolo_en(igrid, jgrid))) {
		if (indiceCacaEn[igrid][jgrid] != -1)
			return true;
		igrid += idir[orientacion];
		jgrid += jdir[orientacion];
	}
	return false;
}

function veo_caca_al_frente() {
	return veo_caca_en_orientacion(personaje.orientacion, 0);
}

function veo_caca_izquierda() {
	return veo_caca_en_orientacion((personaje.orientacion + 1)%4, 1);
}

function veo_caca_derecha() {
	return veo_caca_en_orientacion((personaje.orientacion + 3)%4, -1);
}

function no_mas_caca() {
	return (cacasRecogidas >= caca.length);
}

function llegue_al_perro() {
	var m = metaEn[personaje.igrid][personaje.jgrid];
	return (m && m.tipo == "perro");
}