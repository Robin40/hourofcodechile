		<div>
			<div id="gameContainer">
				<div id="gameDiv"></div>
			</div>
			
			<!--<div id="current-level"><div>Nivel <?= $GLOBALS['level']; ?></div></div>-->
			<div id="buttons">
				<button id="exec-button" onclick="ejecutar_javascript()">Iniciar</button>
				<button id="js-button" onclick="mostrar_javascript()">Mostrar C&oacute;digo</button>		
		    </div>
			<div id="game-info">
				<span id="game-info-title"></span>
				<span id="game-info-desc">Descripci&oacute;n del nivel actual (este texto es para rellenar la descripci&oacute;n)</span>
			</div>
			<div id="game-tutorial">
				<div>Necesitas ayuda? Has clic aqu&iacute; !</div>
			</div>
			<script src="../../crafty/crafty-min.js"></script>
			<script src="../../juego/juego4.js"></script>
		</div>