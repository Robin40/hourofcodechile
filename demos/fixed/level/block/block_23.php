<xml id="toolbox" style="display: none">
    <block type="avanzar"></block>
  <block type="girar">
    <field name="sentido">izquierda</field>
  </block>
  <block type="girar">
    <field name="sentido">derecha</field>
  </block>
    <block type="repetir_hasta"></block>
    <block type="if_caca"></block>
  </xml>

  <xml id="startBlocks" style="display: none">
  <block type="al_ejecutar" x="32" y="32">
    <next>
      <block type="repetir_hasta">
        <statement name="until_body">
          <block type="if_caca">
            <field name="sentido">izquierda</field>
            <next>
              <block type="if_caca">
                <field name="sentido">derecha</field>
                <next>
                  <block type="avanzar"></block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </next>
  </block>
  </xml>

