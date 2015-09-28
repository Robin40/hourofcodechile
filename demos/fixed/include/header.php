<header>
  <div id="levels-bar">
    <div class="logo">
      <img src="media/hoc-logo.png" width="60" />
    </div>
    <div class="niveles">
      <div class="l-title">Nivel </div>
      <ul>
	<?php
	   for ($i=1; $i <= $GLOBALS['LEVEL_COUNT']; $i++) {
			    echo $i==$GLOBALS['level']?"<li class='current-level'>$i</li>":"<li></li>";
			    }
			    ?>
	   </ul>
    </div>
    <div class="options">
      <div id="reset-level-btn"><button>Resetear nivel</button></div>
    </div>
  </div>
  <!--<div id="lines-info">
      <div>Llevas</div>
      <div id="lines-count">0</div>
      <div>lineas de c&oacute;digo</div>
  </div>
  <div id="logo-container"></div>-->
</header>
