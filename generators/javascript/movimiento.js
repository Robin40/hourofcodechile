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
  var dropdown_sentido = block.getFieldValue('sentido');
  var statements_if_true = Blockly.JavaScript.statementToCode(block, 'if_true');
  
  var code = "if (veo_caca_" + dropdown_sentido + "()) {\n" + statements_if_true + "}\n";
  return code;
};

Blockly.JavaScript['if_no_caca'] = function(block) {
  var dropdown_sentido = block.getFieldValue('sentido');
  var statements_if_true = Blockly.JavaScript.statementToCode(block, 'if_true');
  
  var code = "if (!veo_caca_" + dropdown_sentido + "()) {\n" + statements_if_true + "}\n";
  return code;
};


Blockly.JavaScript['repetir_hasta'] = function(block) {
  var statements_until_body = Blockly.JavaScript.statementToCode(block, 'until_body');
  
  var code = 'while (!no_mas_caca()) {\n' + statements_until_body + '}\n';
  return code;
};

Blockly.JavaScript['repetir_hasta_perro'] = function(block) {
  var statements_until_body = Blockly.JavaScript.statementToCode(block, 'until_body');
  
  var code = 'while (!llegue_al_perro()) {\n' + statements_until_body + '}\n';
  return code;
};
