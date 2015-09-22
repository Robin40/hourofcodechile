  <xml id="toolbox" style="display: none">
    <block type="avanzar"></block>
	<block type="girar">
		<field name="sentido">antihorario</field>
	</block>
	<block type="girar">
		<field name="sentido">horario</field>
	</block>
    <block type="controls_repeat_ext">
	  <value name="TIMES">
	    <block type="math_number">
		  <field name="NUM">10</field>
		</block>
	  </value>
	</block>
	<block type="math_number"></block>
	<!-- <block type="text_print"></block>
	<block type="text"></block> -->
  </xml>

  <xml id="startBlocks" style="display: none">
    <block type="controls_repeat_ext">
	  <value name="TIMES">
	    <block type="math_number">
		  <field name="NUM">10</field>
		</block>
	  </value>
	</block>
  </xml>