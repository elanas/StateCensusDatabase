<?php

$conn = mysql_connect("localhost", "DBFinal_user", "userpass");
if(!$conn) {
	die("Error connecting to mysql");
}

mysql_select_db("DBFinal", $conn);

include "conf.php";
include "open.php";

header('Content-Type: application/json');
$aResult = array();

switch ($_POST['functionname']) {
	case 'hover' :
		$statename = $_POST["arguments"][0];

		$query = "SELECT Name, Population FROM State WHERE Name='$statename';"; 
		$result = mysql_query($query);
		if(!$result) { 
			$aResult['error'] = mysql_error(); 
		} else {
			$row = mysql_fetch_assoc($result);	
			$aResult['result'] = $row;
		}
		break;

//	case "click":
	default:
		$aResult['error'] = "Hit Default with " . $_POST_['funtionname'];
		break;

}

echo json_encode($aResult);

//$statename = $_POST["arg1"]; 

//$query = "SELECT StateName, Population FROM State WHERE StateName='$statename';"; 

//$result = mysql_query($query);
//if(!$result) { console.log(mysql_error()); }


/*
$multiquery = explode(";", $query);


foreach ($multiquery as $subquery)
{
	$result = mysql_query($subquery);
	if($result) {echo "success";}
	else {echo mysql_error();}
	echo "<br>";
}

*/

mysql_close($conn);
?>
