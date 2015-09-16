ayuda = "https://dl.dropboxusercontent.com/u/37550073/hourofcodechile/ayuda/";

Blockly.Blocks['avanzar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("avanzar");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(20);
    this.setTooltip('Avanza un paso');
    this.setHelpUrl(ayuda + 'ayuda.html');
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
    this.setHelpUrl(ayuda + 'ayuda.html');
  }
};