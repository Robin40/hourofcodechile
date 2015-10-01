<?php
include_once __DIR__.'/../db/dbconfig.php';
$filter = isset($_POST['level_fail']);
if(!$filter){
	exit("{status: 'fail'}");
}
$fails = split(",", $_POST['level_fail']);
if(count($fails)!=20){
	exit("{status: 'fail'}");
}
foreach ($fails as $fail) {
	if(!is_numeric($fail)){
		exit("{status: 'fail'}");
	}
}
session_start();
$db = DbConfig::getConnection();

$fails = $_POST['level_fail'];
$user = $_SESSION['user_id'];

$sql = "UPDATE hoc_user SET fail_count='$fails' WHERE id=$user LIMIT 1;";
$db->query($sql);
$db->close();
echo "{status: 'ok'}";
session_write_close();
?>