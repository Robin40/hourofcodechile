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
        .appendField(new Blockly.FieldDropdown([["izquierda ↺", "izquierda"], ["derecha ↻", "derecha"]]), "sentido");
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
        .appendField(new Blockly.FieldImage("media/caca.png", 24, 24, "caca"))
        .appendField(new Blockly.FieldDropdown(["a la izquierda", "izquierda"], ["al frente", "al_frente"], ["a la derecha", "derecha"]]), "sentido");
    this.appendStatementInput("if_true")
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(196);
    this.setTooltip('Realiza algunas acciones si se cumple una condición');
  }
};


Blockly.Blocks['if_no_caca'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("si no veo")
        //.appendField(new Blockly.FieldDropdown([["veo", "ver"], ["no veo", "no_ver"]]), "condicion")
        .appendField(new Blockly.FieldImage("media/caca.png", 24, 24, "caca"))
        .appendField(new Blockly.FieldDropdown([["al frente", "al_frente"], ["a la izquierda", "izquierda"], ["a la derecha", "derecha"]]), "sentido");
    this.appendStatementInput("if_true")
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(16);
    this.setTooltip('Realiza algunas acciones si se cumple una condición');
  }
};


Blockly.Blocks['repetir_hasta'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("repetir hasta")
      .appendField(new Blockly.FieldImage("media/no_caca.png", 24, 24, "*"));
 
      //        .appendField(new Blockly.FieldDropdown([["no hay caca", "no_mas_caca"], ["llegue al perro", "llegue_al_perro"]]), "until_opt");
    this.appendStatementInput("until_body")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Realiza las acciones tantas veces como sea necesario hasta que no haya más caca.');
  }
};


Blockly.Blocks['repetir_hasta_perro'] = {
  init: function() {
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("repetir hasta")
      .appendField(new Blockly.FieldImage("media/perro.png", 24, 24, "*"));
 
      //        .appendField(new Blockly.FieldDropdown([["no hay caca", "no_mas_caca"], ["llegue al perro", "llegue_al_perro"]]), "until_opt");
    this.appendStatementInput("until_body")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('Realiza las acciones tantas veces como sea necesario hasta llegar al perro.');
  }
};

Blockly.Blocks['controls_repeat_inamovible'] = {
  /**
   * Block for repeat n times (internal number).
   * The 'controls_repeat_ext' block is preferred as it is more flexible.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg.CONTROLS_REPEAT_TITLE,
      "args0": [
        {
          "type": "field_input",
          "name": "TIMES",
          "text": "10"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "colour": Blockly.Blocks.loops.HUE,
      "tooltip": Blockly.Msg.CONTROLS_REPEAT_TOOLTIP,
      "helpUrl": Blockly.Msg.CONTROLS_REPEAT_HELPURL
    });
    this.appendStatementInput('DO')
        .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);
    this.getField('TIMES').setChangeHandler(
        Blockly.FieldTextInput.nonnegativeIntegerValidator);
	this.setMovable(false);
  }
};