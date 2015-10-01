<?php
include_once __DIR__.'/dbconfig.php';

function insertNewUser2($db){
	$sql = "INSERT INTO hoc_user (completed_levels) VALUES (?);";
	if($stmt = $db->prepare($sql)){
		echo "trying to insert \n";
		$stmt->bind_param("i", 10);
		echo "param binded";
		$stmt->execute();	
		echo "inserted";
	}
	else{
		echo "bad sintax\n";
	}
	$sql = "SELECT count(*) as last_id FROM hoc_user;";
	$res = $db->query($sql);
	$row = $res->fetch_assoc();
	return $row['last_id'];
}

function insertNewUser($db){
	$date = date('Y-m-d');
	$sql = "INSERT INTO hoc_user (completed_levels, registered) VALUES (0, '$date');";
	$db->query($sql);
	$sql = "SELECT count(*) as last_id FROM hoc_user;";
	$res = $db->query($sql);
	$row = $res->fetch_assoc();
	return $row['last_id'];
}

$USER_ID;
if (session_status() == PHP_SESSION_NONE) {
   	session_start();
	if(!isset($_SESSION['user_id'])){
		$db = DbConfig::getConnection();
		$USER_ID = insertNewUser($db);
		$_SESSION['user_id'] = $USER_ID;
		$db->close();
	}
	else{
		$USER_ID = $_SESSION['user_id'];
	}
}
session_write_close();
?>