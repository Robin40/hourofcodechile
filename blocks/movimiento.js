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