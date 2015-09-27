var maximoBloques = 32;
    var workspace = Blockly.inject('blocklyDiv', {
		media: '../../media/',
        toolbox: document.getElementById('toolbox'),
		trashcan: true,
		maxBlocks: maximoBloques
	});
	Blockly.Xml.domToWorkspace(workspace,
		document.getElementById('startBlocks'));
	
	var interprete = null;

	function initApi(interpreter, scope) {
		var wrapper;		
		
		wrapper = function() {
			interpreter.createPrimitive(avanzar());
		};
		interpreter.setProperty(scope, "avanzar",
			interpreter.createNativeFunction(wrapper));
			
		wrapper = function() {
			interpreter.createPrimitive(girar_antihorario());
		};
		interpreter.setProperty(scope, "girar_antihorario",
			interpreter.createNativeFunction(wrapper));
			
		wrapper = function() {
			interpreter.createPrimitive(girar_horario());
		};
		interpreter.setProperty(scope, "girar_horario",
			interpreter.createNativeFunction(wrapper));
			
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
		Blockly.JavaScript.STATEMENT_PREFIX = "highlightBlock(%1);\n";
		Blockly.JavaScript.addReservedWords("highlightBlock");
		var codigo = Blockly.JavaScript.workspaceToCode(workspace);
		interprete = new Interpreter(codigo, initApi);
		
		//alert("Listo para ejecutar este código:\n\n" + codigo);
		//document.getElementById('stepButton').disabled = '';
		highlightPause = false;
		workspace.traceOn(true);
		workspace.highlightBlock(null);
	}
	
	var gameRunning = false;
	var execbtn = document.getElementById('exec-button');
	function stepCode() {
		try {
			var ok = interprete.step();
		} finally {
			if (!ok) {
				//document.getElementById('stepButton').disabled = 'disabled';
				personaje.estado == "muerto";
				gameRunning = false;
				execbtn.innerHTML = 'Reiniciar';
				execbtn.className = '';
				return;
			}
			else{
				if(personaje.estado == "muerto"){
					gameRunning = false;
					execbtn.innerHTML = 'Reiniciar';
					execbtn.className = '';
					return;
				}
			}
		}
		if (highlightPause) {
			highlightPause = false;
		} else {
			//stepCode();
			//console.log("rec");
		}
	}
	
	function mostrar_javascript() {
		Blockly.JavaScript.STATEMENT_PREFIX = "";
		var codigo = Blockly.JavaScript.workspaceToCode(workspace);
		var jsModal = $('#jsModal');
		jsModal.html(codigo);
		$('#jsModal').modalCodeDisplay();
		//alert(codigo);
	}
	
	
	function ejecutar_javascript() {
		if(!gameRunning){
			gameRunning = true;
			parseCode();
			personaje.trigger("resetear");
			personaje.estado = 'listo';
			//document.getElementById('js-button').disabled = 'disabled';
			execbtn.innerHTML = 'Detener';
			execbtn.className = 'running';
			stepCode();
			
			//gameRunning = false;
			//execbtn.innerHTML = 'Reiniciar';
			//document.getElementById('js-button').disabled = '';
		}
		else{
			gameRunning = false;
			execbtn.innerHTML = 'Reiniciar';
			execbtn.className = '';
			personaje.estado = 'muerto';
			
		}
	}
