<?php
include_once __DIR__.'/../db/dbconfig.php';
$filter = isset($_POST['level_block']);
if(!$filter){
	exit("There is no blocks.");
}
$blocks = split(",", $_POST['level_block']);
if(count($blocks)!=20){
	exit("Number of blocks doesn't match.");
}
foreach ($blocks as $block) {
	if(!is_numeric($block)){
		exit("Blocks are not numeric.");
	}
}
session_start();
$db = DbConfig::getConnection();

$blocks = $_POST['level_block'];
$user = $_SESSION['user_id'];

$sql = "UPDATE hoc_user SET block_count='$blocks' WHERE id=$user LIMIT 1;";
echo $sql;
$db->query($sql);
$db->close();
echo "{status: 'ok'}";
session_write_close();
?>