<xml id="toolbox" style="display: none">
    <block type="avanzar"></block>
  <block type="girar">
    <field name="sentido">izquierda</field>
  </block>
  <block type="girar">
    <field name="sentido">derecha</field>
  </block>
    <block type="repetir_hasta_perro"></block>
  </xml>

  <xml id="startBlocks" style="display: none">
  <block type="al_ejecutar" x="32" y="32">
    <next>
      <block type="repetir_hasta_perro"></block>
    </next>
  </block>
  </xml>

