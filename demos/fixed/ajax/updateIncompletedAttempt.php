<?php
include_once __DIR__.'/../db/dbconfig.php';
$filter = isset($_POST['level_incompleted']);
if(!$filter){
	exit("{status: 'fail'}");
}
$incompleteds = split(",", $_POST['level_incompleted']);
if(count($incompleteds)!=20){
	exit("{status: 'fail'}");
}
foreach ($incompleteds as $incompleted) {
	if(!is_numeric($incompleted)){
		exit("{status: 'fail'}");
	}
}
session_start();
$db = DbConfig::getConnection();

$incompleteds = $_POST['level_incompleted'];
$user = $_SESSION['user_id'];

$sql = "UPDATE hoc_user SET incomplete_count='$incompleteds' WHERE id=$user LIMIT 1;";
$db->query($sql);
echo "{status: 'ok'}";
session_write_close();
?>