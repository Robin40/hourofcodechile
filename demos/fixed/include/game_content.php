<div id="gameDiv"></div>

<!--<div id="current-level"><div>Nivel <?= $GLOBALS['level']; ?></div></div>-->
<div id="buttons">
  <div class="col-xs-6" style="padding: 5px 5px 5px 0">
    <button class="btn-lg btn btn-success btn-block" id="exec-button"
    onclick="ejecutar_javascript()">Iniciar <span class="glyphicon glyphicon-play"></span></button>
  </div>
  
  <div class="col-xs-6" style="padding: 5px 0 5px 5px">
    <button class="btn btn-lg btn-info btn-block" id="js-button" onclick="mostrar_javascript()">Mostrar C&oacute;digo</button>
  </div>
</div>

<div id="game-info" class="col-xs-12" style="padding-left: 0px;
                                             padding-right: 0px;">
  <span id="game-info-title"></span>
  <div class="bg-info" id="game-info-desc">
      Descripci&oacute;n del nivel actual (este texto es para rellenar
      la descripci&oacute;n)
  </div>
</div>
