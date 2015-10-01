<?php
include_once __DIR__.'/../db/dbconfig.php';
$filter = isset($_POST['level_completed']) && is_numeric($_POST['level_completed']) && ($_POST['level_completed']>0);
if(!$filter){
	exit();
}
session_start();
$db = DbConfig::getConnection();

$levels = $_POST['level_completed'];
$user = $_SESSION['user_id'];
$sql = "UPDATE hoc_user SET completed_levels=$levels WHERE id=$user LIMIT 1;";
$db->query($sql);
echo "{status: 'ok'}";
session_write_close();
?>