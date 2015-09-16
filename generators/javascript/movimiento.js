Blockly.JavaScript['avanzar'] = function(block) {
	return "avanzar();\n";
};

Blockly.JavaScript['girar'] = function(block) {
	var sentido = block.getFieldValue('sentido');
	return "girar_" + sentido + "();\n";
};

function avanzar() {
	alert("avanzar");
}

function girar_antihorario() {
	alert("girar antihorario");
}

function girar_horario() {
	alert("girar horario");
}