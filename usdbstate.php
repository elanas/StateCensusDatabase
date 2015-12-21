<!doctype html>
<html>
<head>
</head>

<?php

$conn = mysql_connect("localhost", "DBFinal_user", "userpass");
if(!$conn) {
	die("Error connecting to mysql");
}

mysql_select_db("DBFinal", $conn);

include "conf.php";
include "open.php";


$statename = $_POST["!!!!Where to get state name!!!"]; //Fill in!!!!!

$query = "SELECT * FROM State WHERE StateName='$statename';"; 

$result = mysql_query($query);
if(!$result) { console.log(mysql_error()); }


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
</html>
