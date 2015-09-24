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