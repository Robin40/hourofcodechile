<?php
include_once __DIR__.'/../dbconfig.php';

$filter = isset($_POST['level_completed']) && is_numeric($_POST['level_completed']);
$filter = $filter && isset($_POST['level_block_number']);
$filter = $filter && isset($_POST['level_attempts']);
$filter = $filter && isset($_POST['level_fail']);
$filter = $filter && isset($_POST['level_incomplete']);
$filter = $filter && isset($_POST['level_connected']);
$filter = $filter && isset($_POST['level_crash']);
$filter = $filter && isset($_POST['level_help']);
if(!$filter){
	exit();
}

$db = DbConfig::getConnection();

$sql = "SELECT id, name, address, city, comune, postal_code, phone_number, mobile, depto  FROM user_address WHERE id=? AND user_id=? LIMIT 1;";
		if($stmt = $db->prepare($sql)){
			$address = new Address();
			$stmt->bind_param('ii', $id, $user);
			$stmt->execute();
			$stmt->store_result();
			$stmt->bind_result($address->id,
				$address->name,
				$address->address,
				$address->city,
				$address->comune,
				$address->postal_code,
				$address->phone,
				$address->mobile,
				$address->depto);
			$stmt->fetch();
				
			if($stmt->num_rows==1){
				return $address;	
			}
		}


class AddressManager{
	private static $maxAddressQuantity = 6;
	
	private $db;
	private $addresses = array();
	
	public function __construct($user, $db){
		$this->db = $db;
		$this->loadAddresses($user);
	}
	
	private function loadAddresses($user){
		$sql = "SELECT * from user_address WHERE user_id=$user;";
		$res = $this->db->query($sql);
		while($row = $res->fetch_assoc()){
			$this->addresses[] = $row;
		}
	}
	
	public function getAddresses(){
		return $this->addresses;
	}
	
	public function getAddressesHtml(){
		$c = 1;
		$html = '';
		foreach ($this->addresses as $address_info) {
			$id = $address_info['id'];
			$name = $address_info['name'];
			$address = $address_info['address'];
			$dpto = $address_info['depto'];
			$city = $address_info['city'];
			$comune = $address_info['comune'];
			$postal_code = $address_info['postal_code'];
			$phone = $address_info['phone_number'];
			$mobile = $address_info['mobile'];
			$margin = $c%2?'':' adss-mleft';
			$html .= $c%2?'<div>':'';
			$html .= 
			"<div class='adss-item$margin'>
					<ul>
						<li>Nombre: $name</li>
						<li>Dirección: $address</li>
						<li>Dpto: $dpto</li>
						<li>Comuna: $comune</li>
						<li>Ciudad: $city</li>
						<li>Teléfono: $phone</li>
						<li>Móvil: $mobile</li>
						<li>Código Postal: $postal_code</li>
						
					</ul>
					<a href='address.php?address=$id'><input type='button' class='adss-edit-btn' value='E'></a>
					<input type='button' class='adss-del-btn' value='D' address='$id'/>
				</div>";
				$html .= $c%2?'':'</div>';
				$c++;
			
		}
		if($c<=6){
			$margin = $c%2?'':' adss-mleft';
			$html .= 
			"
			<div id='adss-add-div' class='adss-item$margin'><a href='address.php'><div class='adss-add'></div></a></div>
			";
			$html .= $c%2?'':'</div>';
		}
		return $html;
		
		
	}
	
	public function getContent(){
		$html = $this->getAddressesHtml();
		return $html;
	}
	
	public static function verify($id, $user, $db){
		
		return false;;
	}

	public static function limitUserAddresses($user, $db){
		$sql = "SELECT count(*) FROM user_address WHERE user_id=$user;";
		$res = $db->query($sql);
		$row = $res->fetch_row();
		$count = $row[0];
		return $count == self::$maxAddressQuantity;
	}
	
	public static function delete($id, $db){
		$sql = "DELETE FROM user_address WHERE id=?;";
		if($stmt = $db->prepare($sql)){
			$stmt->bind_param('i', $id);
			$stmt->execute();
		}
	}
}

?>