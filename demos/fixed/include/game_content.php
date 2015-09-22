		<div id="game-content">
			<table>
				<thead>
					<tr>
						<th><span id="current-level">Nivel <?= $GLOBALS['level']; ?></span></th>
					</tr>
				</thead>
				<tbody>
					<tr><td>
						<div id="gameDiv"></div>
						<script src="../../crafty/crafty-min.js"></script>
						<script src="../../juego/juego4.js"></script>
					</td></tr>
				</tbody>
			</table>
			<table>
				<thead>
					<tr>
						<th id="block-table-header"><div>Acciones disponibles</div><div>Acciones a realizar</div></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><div id="blocklyDiv"></div></td>
					</tr>
				</tbody>
			</table>
		</div>