<?php
include_once __DIR__.'/../db/dbconfig.php';
$filter = isset($_POST['level_crash']);
if(!$filter){
	exit("{status: 'fail'}");
}
$crashs = split(",", $_POST['level_crash']);
if(count($crashs)!=20){
	exit("{status: 'fail'}");
}
foreach ($crashs as $crash) {
	if(!is_numeric($crash)){
		exit("{status: 'fail'}");
	}
}
session_start();
$db = DbConfig::getConnection();

$crashs = $_POST['level_crash'];
$user = $_SESSION['user_id'];

$sql = "UPDATE hoc_user SET crash_count='$crashs' WHERE id=$user LIMIT 1;";
$db->query($sql);
$db->close();
echo "{status: 'ok'}";
session_write_close();
?>