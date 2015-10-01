var maximoBloques = Infinity;
/*if (typeof HOC_LEVEL.maximoBloques !== 'undefined')
	maximoBloques = HOC_LEVEL.maximoBloques + 1;*/
var blocklyArea = document.getElementById('blocklyArea');
var workspace = Blockly.inject('blocklyDiv', {
  media: '../../media/',
  toolbox: document.getElementById('toolbox'),
  trashcan: true,
  maxBlocks: maximoBloques
});

Blockly.Xml.domToWorkspace(workspace,
		           document.getElementById('startBlocks'));

var interprete = null;
/*
  function updateLines(){
  Blockly.JavaScript.STATEMENT_PREFIX = "";
  var codigo = Blockly.JavaScript.workspaceToCode(workspace);
  codigo = codigo.replace(/\n+/g,"\n");
  var lineCount = document.getElementById("lines-count");
  lineCount.innerHTML = codigo.split(/\r\n|\r|\n/).length-1;
  }
  workspace.addChangeListener(updateLines);
*/
function initApi(interpreter, scope) {
  var wrapper;		
  var func = [
    "avanzar", "girar_izquierda", "girar_derecha",
  ];
  var str = "";
  for (var i = 0; i < func.length; ++i) {
    str += "wrapper = function() {\n" +
      "interpreter.createPrimitive(" + func[i] + "());\n" +
      "};\n" +
      "interpreter.setProperty(scope, '" + func[i] + "',\n" +
      "interpreter.createNativeFunction(wrapper));\n\n";
  }
  /*
    wrapper = function() {
    interpreter.createPrimitive(avanzar());
    };
    interpreter.setProperty(scope, "avanzar",
    interpreter.createNativeFunction(wrapper));
  */
  eval(str);
  
  var func2 = [
    "no_mas_caca", "llegue_al_perro",
    "veo_caca_al_frente", "veo_caca_derecha", "veo_caca_izquierda"
  ];
  var str2 = "";
  for (var i = 0; i < func2.length; ++i) {
    str2 += "wrapper = function() {\n" +
      "var r = " + func2[i] + "();\n" +
      "return interpreter.createPrimitive(r);\n" +
      "};\n" +
      "interpreter.setProperty(scope, '" + func2[i] + "',\n" +
      "interpreter.createNativeFunction(wrapper));\n\n";
  }
  /*
    wrapper = function() {
    var r = no_mas_caca();
    return interpreter.createPrimitive(r);
    };
    interpreter.setProperty(scope, "no_mas_caca",
    interpreter.createNativeFunction(wrapper));
  */
  eval(str2);
  
  wrapper = function(id) {
    id = id ? id.toString() : '';
    return interpreter.createPrimitive(highlightBlock(id));
  };
  interpreter.setProperty(scope, "highlightBlock",
			  interpreter.createNativeFunction(wrapper));
}

var highlightPause = false;
function highlightBlock(id) {
	workspace.highlightBlock(id);
	highlightPause = true;
}

function parseCode() {
  Blockly.JavaScript.STATEMENT_PREFIX = "";
  var codigo = Blockly.JavaScript.workspaceToCode(workspace);
  if (codigo == "") {
    $("#codigoVacioModal").modal();
    return "codigoVacio";
  }
  
  Blockly.JavaScript.STATEMENT_PREFIX = "highlightBlock(%1);\n";
  Blockly.JavaScript.addReservedWords("highlightBlock");
  codigo = Blockly.JavaScript.workspaceToCode(workspace);
  interprete = new Interpreter(codigo, initApi);
  
  //alert("Listo para ejecutar este código:\n\n" + codigo);
  //document.getElementById('stepButton').disabled = '';
  highlightPause = false;
  workspace.traceOn(true);
  workspace.highlightBlock(null);
  
  return "success";
}

var gameRunning = false;

var execbtn = $('#exec-button');
function stepCode() {
  try {
    var ok = interprete.step();
  } finally {
    if (!ok) {
      //document.getElementById('stepButton').disabled = 'disabled';
      //personaje.estado == "muerto";
      gameRunning = false;
      execbtn.html('Reiniciar');
      execbtn.toggleClass("btn-danger btn-success");
      //execbtn.className = '';
      personaje.estado = "finalizando";
      return;
    }
    else{
      if(personaje.estado == "muerto"){
	gameRunning = false;
	execbtn.html('Reiniciar');
        execbtn.toggleClass("btn-danger btn-success");
	//execbtn.className = '';
	return;
      }
    }
  }
  if (highlightPause) {
    highlightPause = false;
  } else {
    stepCode();
    //console.log("rec");
  }
}


function hay_bloques_sueltos() {
  return (Blockly.mainWorkspace.getTopBlocks().length >= 2);
}

function mostrar_mensaje_modal(mensaje) {
	var div = $("#mensajeModal");
	div.html(mensaje);
	div.modalDisplay();
}

var nombreBloqueSegunTipo = {
	"avanzar": "\"avanzar\"",
	"girar": "\"girar\"",
	"repetir_hasta": "\"repetir\"",
	"repetir_hasta_perro": "\"repetir\"",
	"controls_repeat": "\"repetir\"",
	"if_caca": "\"si veo caca\"",
	"if_no_caca": "\"si no veo caca\""
};
/*
function mostrar_mensaje_bloques_faltantes_victoria() {
	var cantidad = cantidadBloqueRequeridoFaltante;
	var tipo = tipoBloqueRequeridoFaltante;
	mostrar_mensaje_modal("Tu c&oacute;digo cumple el objetivo principal, " +
		"pero te falta" + (cantidad != 1 ? "n" : "") + " al menos " + 
		(cantidad != 1 ? cantidad : "un") + " bloque" + (cantidad > 1 ? "s" : "") + " " +
		nombreBloqueSegunTipo[tipo] + " para pasar el nivel.");
}
	
function mostrar_mensaje_bloques_faltantes_derrota() {
	var cantidad = cantidadBloqueRequeridoFaltante;
	var tipo = tipoBloqueRequeridoFaltante;
	mostrar_mensaje_modal("&iquest;Qu&eacute; tal si pones un" + 
		(cantidad != 1 ? "os" + cantidad : "") + 
		" bloque" + (cantidad != 1 ? "s" : "") + " " + nombreBloqueSegunTipo[tipo] + "?");
}
*/
function mostrar_javascript() {
  if (hay_bloques_sueltos()) {
    $("#errorModal").modal();
    unconnectedBlocks();
    return;
  }
  
  Blockly.JavaScript.STATEMENT_PREFIX = "";
  var codigo = Blockly.JavaScript.workspaceToCode(workspace);
  
  if (codigo == "") {
    $("#codigoVacioModal").modal();
    return;
  }
  
  var jsModal = $('#jsModal');
  var codigoJs = $('#codigoJS');
  codigoJs.html(codigo);

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
  
  jsModal.modal()
  //  jsModal.modalCodeDisplay(getAllBlocks() , stagesCompleted());
  //  lastLevelMessage();
}

function ejecutar_javascript() {		
  if (hay_bloques_sueltos()) {
    $("#errorModal").modal();
    unconnectedBlocks();
    return;
  }
  
  if(!gameRunning){
    gameRunning = true;
    
    if (parseCode() != "success")
      return;
    
    resetear_nivel();
    personaje.estado = 'listo';
    //document.getElementById('js-button').disabled = 'disabled';
    execbtn.html('Detener');
    //execbtn.className = 'running';
    execbtn.toggleClass("btn-success btn-danger");


    stepCode();
    
    //gameRunning = false;
    //execbtn.innerHTML = 'Reiniciar';
    //document.getElementById('js-button').disabled = '';
  }
  else{
    gameRunning = false;
    execbtn.html('Reiniciar');
    execbtn.toggleClass("btn-danger btn-success");
//    execbtn.className = '';
    personaje.estado = 'muerto';
    
  }
}
