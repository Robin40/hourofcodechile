<xml id="toolbox" style="display: none">
    <block type="avanzar"></block>
  <block type="girar">
    <field name="sentido">izquierda</field>
  </block>
  <block type="girar">
    <field name="sentido">derecha</field>
  </block>
    <block type="controls_repeat"><field name="TIMES">5</field></block>
  </xml>

  <xml id="startBlocks" style="display: none">
  <block type="al_ejecutar" x="32" y="32">
    <next>
    <block type="controls_repeat">
    <field name="TIMES">?</field>
    <statement name="DO">
      <block type="controls_repeat">
        <field name="TIMES">?</field>
        <statement name="DO">
          <block type="avanzar"></block>
        </statement>
      </block>
    </statement>
    <next>
      <block type="girar">
        <field name="sentido">derecha</field>
      </block>
    </next>
  </block>
    </next>
  </block>
  </xml>