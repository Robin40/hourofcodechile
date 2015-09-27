	<header>
		<div id="levels-bar">
			<div>
				<div class="l-title">Nivel <?= $GLOBALS['level']; ?></div>
				<ul>
					<?php
					for ($i=1; $i <= $GLOBALS['LEVEL_COUNT']; $i++) {
						echo $i==$GLOBALS['level']?"<li class='current-level'>$i</li>":"<li></li>";
					}
					?>
				</ul>
			</div>
		</div>
		<div id="lines-info">
	    		<div>Llevas</div>
	    		<div id="lines-count">0</div>
	    		<div>lineas de c&oacute;digo</div>
	    </div>
	    <div id="logo-container"></div>
	</header>