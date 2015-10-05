<?php
include_once __DIR__.'/../db/dbconfig.php';
if(
	!isset($_POST['result']) ||
	!isset($_POST['blocks']) ||
	!isset($_POST['level'])
	){
	exit("{status: 'fail'}");
}
session_start();

if(!isset($_SESSION['USER'])){
	exit("{status: 'fail'}");
}
$user = $_SESSION['USER'];
$db = DbConfig::getConnection();

if(
	!is_numeric($_POST['result']) ||
	!is_numeric($_POST['blocks']) ||
	!is_numeric($_POST['level'])
	){
	exit("{status: 'fail'}");
}

$result = $_POST['result'];
$blocks = $_POST['blocks'];
$level = $_POST['level'];
$sql = "INSERT INTO attempt_registry (used_blocks, level, result) VALUES ('$blocks', '$level', '$result');";
$db->query($sql);
$db->close();
echo "{status: 'ok'}";
session_write_close();
?>