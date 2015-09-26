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

Blockly.JavaScript['if_caca'] = function(block) {
  var dropdown_condicion = block.getFieldValue('condicion');
  var dropdown_sentido = block.getFieldValue('sentido');
  var statements_if_true = Blockly.JavaScript.statementToCode(block, 'if_true');
  
  var code = "if (" + (dropdown_condicion == "veo" ? "" : "!") +
	"veo_caca_" + dropdown_sentido + ") {\n" + statements_if_true + "}\n";
  return code;
};