<!DOCTYPE html>
<?php
include_once 'config.php';
$level = 1;
if(isset($_GET['level']) && $_GET['level'] > 0 && $_GET['level'] <= $GLOBALS['LEVEL_COUNT']){
	$level = $_GET['level'];
}
?>
<html>
<?php include_once 'include/head.php'; ?> 
<body>
	<input id="i-level" type="hidden" value="<?= $level ?>" />
	<div id="wrap">
		<?php include_once 'include/game_content.php'; ?>
		<div>
			<?php include_once 'include/header.php'; ?>
			<?php include_once 'include/block_content.php'; ?>
		</div>
	</div>
	

		<?php $a = 'include/game_header.php'; ?>
  
	<?php
	/*Bloques y mensajes para el modo prueba*/
	//include_once 'level/block/test.php';
	//include_once 'level/modal/test.php';
	?>
	
	
	<?php
	/*Bloques disponibles e iniciales para $level*/
	include_once "level/block/block_$level.php";
	
	/*Mensajes utilizados para $level*/
	include_once "level/modal/modal_$level.php";
	?>
	<div class="modalWindowMessages">
		<div id="jsModal">jsmodal</div>
		<div id="errorModal">&iexcl;Tienes bloques sueltos! Aseg&uacute;rate de que todos los bloques que uses est&aacute;n conectados al bloque "al inicio".</div>
		<div id="codigoVacioModal">No has puesto bloques... Arrastra bloques en "Acciones disponibles" hasta el bloque "Al inicio" para que estos se ejecuten.</div>
		<div id="completedModal"><b>
			<div class="completedTitle">&iexcl;Has completado el nivel!</div>
			<div>Completaste la tarea que se te ha pedido, &iexcl;Felicitaciones!</div></b>
			<br />
			<div class="completedExtra">Este nivel pudo ser completado utilizando solamente <span class="blockNumber"></span> bloques. Puedes volver a intentarlo.</div>
			
			<div class="completed-buttons">
				<button class="completed-repeat-btn">Repetir nivel</button>
				<button class="completed-next-btn">Siguiente nivel</button>
			</div>
		</div>
		<div id="incompletedModal"><b>
			<div class="completedTitle">&iexcl;A&uacute;n no has completado este nivel!</div></b>
			<div>Intenta utilizar tus bloques de manera diferente o agregar m&aacute;s para alcanzar los objetivos.</div>
			<br />
			<div class="completed-buttons">
				<button class="completed-repeat-btn">Reintentar</button>
				<button class="completed-help-btn">Necesito ayuda</button>
			</div>
		</div>
		<div id="failedModal"><b>
			<div class="completedTitle">&iexcl;Has fallado!</div></b>
			<div>Debes utilizar el bloque <b><span class="incompleted-block">bloque_x</span></b> para completar este nivel</div>
			<br />
			
			<div class="completed-buttons">
				<button class="completed-repeat-btn">Reintentar</button>
				<button class="completed-help-btn">Necesito ayuda</button>
			</div>
		</div>
	</div>
	
	<script src="js/jquery.min.js"></script>
	<script src="js/modalPlugin.js"></script>
	
	<!-- 
		IMPORTANTE: Para Robinson
		Json del nivel actual  -->
	<script src="level/json/level_<?= $level ?>.js"></script>
	<!--<script src="level/json/test.js"></script>--!>
	
	<!-- 
		IMPORTANTE: Para Robinson
		Funciones e inicializador de la API del videojuego -->
	<script src="js/blockInit.js"></script>
	
	<script src="js/content.js"></script>
</body>
</html>
