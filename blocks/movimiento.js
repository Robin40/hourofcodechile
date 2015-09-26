Blockly.Blocks['avanzar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("avanzar");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('Avanza un paso');
  }
};

Blockly.Blocks['girar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("girar a la")
        .appendField(new Blockly.FieldDropdown([["izquierda ↺", "antihorario"], ["derecha ↻", "horario"]]), "sentido");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('Gira a la izquierda o a la derecha en 90 grados');
  }
};

Blockly.Blocks['al_ejecutar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("cuando se ejecuta");
    this.setNextStatement(true);
    this.setColour(210);
    this.setTooltip('');
    this.setMovable(false);
  }
};

Blockly.Blocks['if_caca'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("si")
        .appendField(new Blockly.FieldDropdown([["veo", "ver"], ["no veo", "no_ver"]]), "condicion")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 24, 24, "caca"))
        .appendField(new Blockly.FieldDropdown([["al frente", "derecho"], ["a la izquierda", "antihorario"], ["a la derecha", "horario"]]), "sentido");
    this.appendStatementInput("if_true")
        .appendField("hacer");
    this.setColour(160);
    this.setTooltip('Realiza algunas acciones si se cumple una condición');
  }
};