Blockly.HSV_SATURATION = 1;
Blockly.HSV_VALUE = .9;

Blockly.Blocks['avanzar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("avanzar");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(185);
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
    this.setColour(185);
    this.setTooltip('Gira a la izquierda o a la derecha en 90 grados');
  }
};

Blockly.Blocks['al_ejecutar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("al inicio");
    this.setNextStatement(true);
    this.setColour(45);
    this.setTooltip('');
    this.setMovable(false);
  }
};

Blockly.Blocks['if_caca'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("si veo")
        //.appendField(new Blockly.FieldDropdown([["veo", "ver"], ["no veo", "no_ver"]]), "condicion")
        .appendField(new Blockly.FieldImage("https://pbs.twimg.com/profile_images/418660180201865216/LYw4POpF.jpeg", 24, 24, "caca"))
        .appendField(new Blockly.FieldDropdown([["al frente", "derecho"], ["a la izquierda", "antihorario"], ["a la derecha", "horario"]]), "sentido");
    this.appendStatementInput("if_true")
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(25);
    this.setTooltip('Realiza algunas acciones si se cumple una condición');
  }
};


Blockly.Blocks['if_no_caca'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("si no veo")
        //.appendField(new Blockly.FieldDropdown([["veo", "ver"], ["no veo", "no_ver"]]), "condicion")
        .appendField(new Blockly.FieldImage("https://pbs.twimg.com/profile_images/418660180201865216/LYw4POpF.jpeg", 24, 24, "caca"))
        .appendField(new Blockly.FieldDropdown([["al frente", "derecho"], ["a la izquierda", "antihorario"], ["a la derecha", "horario"]]), "sentido");
    this.appendStatementInput("if_true")
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(196);
    this.setTooltip('Realiza algunas acciones si se cumple una condición');
  }
};

