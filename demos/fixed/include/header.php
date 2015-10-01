<header>
  <div class="col-xs-12 levels-bar">
    <!-- logo -->
    <div class="col-xs-3" style="padding-top:10px;">
      <p class="hdc-title">La Hora del Código Chile </p>
    </div>

    <!-- niveles -->
    <div class="col-xs-6" style="padding-top: 5px">
      <strong>Nivel</strong>
      <ul class="levels">
	<?php
           for ($i=1; $i <= $GLOBALS['LEVEL_COUNT']; $i++) {
                            echo $i==$GLOBALS['level']?"<li class='current-level'>$i</li>":"<li></li>";
                            }?>
           </ul>
    </div>

    <!-- opciones -->
    <div class="col-xs-3" style="padding-top: 4px">
      <button id="video" class="btn btn-sm btn-success invisible" data-toggle="modal" data-target="#videoModal">Vídeo</button>
      <button id="game-tutorial" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#helpModal">¿Necesitas ayuda?</button>
      <button id="reset-level-btn" class="btn btn-sm btn-info">Reiniciar nivel</button>
    </div>

  </div>
</header> 
