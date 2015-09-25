		<div>
			<div id="gameContainer">
				<div id="gameDiv"></div>
				<div id="buttons">
					<button id="js-button" onclick="mostrar_javascript()">Mostrar JavaScript</button>
		    		<button id="exec-button" onclick="ejecutar_javascript()">Iniciar</button>
		    	</div>
			</div>
			
			<!--<div id="current-level"><div>Nivel <?= $GLOBALS['level']; ?></div></div>-->
			<div id="game-info">
				<div id="game-info-title"></div>
				<div id="game-info-desc">Descripci&oacute;n del nivel actual (este texto es para rellenar la descripci&oacute;n)</div>
			</div>
			<script src="../../crafty/crafty-min.js"></script>
			<script src="../../juego/juego4.js"></script>
		</div>