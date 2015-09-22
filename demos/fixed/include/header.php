	<header>
		<div id="logo-container"></div>
		<div id="levels-bar">
			<div>
				<span class="l-title">Niveles:</span>
				<ul>
					<?php
					for ($i=1; $i <= $GLOBALS['LEVEL_COUNT']; $i++) {
						echo $i==$GLOBALS['level']?"<li class='current-level'>$i</li>":"<li></li>";
					}
					?>
				</ul>
			</div>
			
		</div>
	</header>