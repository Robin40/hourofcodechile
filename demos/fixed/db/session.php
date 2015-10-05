<?php
include_once __DIR__.'/dbconfig.php';
class OS_BR{

    private $agent = "";
    private $info = array();

    function __construct(){
        $this->agent = isset($_SERVER['HTTP_USER_AGENT']) ? $_SERVER['HTTP_USER_AGENT'] : NULL;
        $this->getBrowser();
        $this->getOS();
    }

    function getBrowser(){
        $browser = array("Navigator"            => "/Navigator(.*)/i",
                         "Firefox"              => "/Firefox(.*)/i",
                         "Internet Explorer"    => "/MSIE(.*)/i",
                         "Google Chrome"        => "/chrome(.*)/i",
                         "MAXTHON"              => "/MAXTHON(.*)/i",
                         "Opera"                => "/Opera(.*)/i",
                         );
        foreach($browser as $key => $value){
            if(preg_match($value, $this->agent)){
                $this->info = array_merge($this->info,array("Browser" => $key));
                $this->info = array_merge($this->info,array(
                  "Version" => $this->getVersion($key, $value, $this->agent)));
                break;
            }else{
                $this->info = array_merge($this->info,array("Browser" => "UnKnown"));
                $this->info = array_merge($this->info,array("Version" => "UnKnown"));
            }
        }
        return $this->info['Browser'];
    }

    function getOS(){
        $OS = array("Windows"   =>   "/Windows/i",
                    "Linux"     =>   "/Linux/i",
                    "Unix"      =>   "/Unix/i",
                    "Mac"       =>   "/Mac/i"
                    );

        foreach($OS as $key => $value){
            if(preg_match($value, $this->agent)){
                $this->info = array_merge($this->info,array("Operating System" => $key));
                break;
            }
        }
        return $this->info['Operating System'];
    }

    function getVersion($browser, $search, $string){
        $browser = $this->info['Browser'];
        $version = "";
        $browser = strtolower($browser);
        preg_match_all($search,$string,$match);
        switch($browser){
            case "firefox": $version = str_replace("/","",$match[1][0]);
            break;

            case "internet explorer": $version = substr($match[1][0],0,4);
            break;

            case "opera": $version = str_replace("/","",substr($match[1][0],0,5));
            break;

            case "navigator": $version = substr($match[1][0],1,7);
            break;

            case "maxthon": $version = str_replace(")","",$match[1][0]);
            break;

            case "google chrome": $version = substr($match[1][0],1,10);
        }
        return $version;
    }

    function showInfo($switch){
        $switch = strtolower($switch);
        switch($switch){
            case "browser": return $this->info['Browser'];
            break;

            case "os": return $this->info['Operating System'];
            break;

            case "version": return $this->info['Version'];
            break;

            case "all" : return array($this->info["Version"], 
              $this->info['Operating System'], $this->info['Browser']);
            break;

            default: return "Unkonw";
            break;

        }
    }
	
}

function getIP(){
	$ip = "no_ip_detected";
	if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
	    $ip = $_SERVER['HTTP_CLIENT_IP'];
	} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
	    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
	} else {
	    $ip = $_SERVER['REMOTE_ADDR'];
	}
	return $ip;
}

function insertNewUser($db){
	// using
	// create an new instant of OS_BR class
	$obj = new OS_BR();
	// // if you want to show one by one information then try showInfo() function
	
	// get browser
	$name = $obj->showInfo('browser');
	
	// get browser version
	$version = $obj->showInfo('version');
	
	// get Operating system
	$so = $obj->showInfo('os');
	
	$ip = getIP();
	$sql = "INSERT INTO user (browser_name, browser_version, operating_system, ip) VALUES ('$name', '$version', '$so', '$ip');";
	$db->query($sql);
	$sql = "SELECT count(*) as last_id FROM user;";
	$res = $db->query($sql);
	$row = $res->fetch_assoc();
	return $row['last_id'];
}

$USER_ID;
if (session_status() == PHP_SESSION_NONE) {
	ini_set('session.cookie_lifetime', 60 * 60 * 24 * 100);
	ini_set('session.gc_maxlifetime', 60 * 60 * 24 * 100);
   	session_start();
	session_regenerate_id();
	if(!isset($_SESSION['USER'])){
		$db = DbConfig::getConnection();
		$USER_ID = insertNewUser($db);
		$_SESSION['USER'] = $USER_ID;
		$db->close();
	}
	else{
		$USER_ID = $_SESSION['USER'];
	}
}
session_write_close();
?>