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
