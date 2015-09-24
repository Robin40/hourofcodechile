Blockly.JavaScript['avanzar'] = function(block) {
	return "avanzar();\n";
};

Blockly.JavaScript['girar'] = function(block) {
	var sentido = block.getFieldValue('sentido');
	return "girar_" + sentido + "();\n";
};

Blockly.JavaScript['al_ejecutar'] = function(block) {
	return "";
}