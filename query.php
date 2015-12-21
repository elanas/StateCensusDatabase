<!doctype html>
<html>
<head>
</head>

<?php

$conn = mysql_connect("localhost", "DBFinal_admin", "grahamelana");
if(!$conn) {
	die("Error connecting to mysql");
}

mysql_select_db("DBFinal", $conn);

include "conf.php";
include "open.php";


$query = $_POST["state-text"];

echo $query;

$result = mysql_query("$query");
$row=mysql_fetch_array($result);
if($row["Error Message"]) {echo "BAAAAADDDDDD!!!!";}
else { echo "idk";}

mysql_close($conn);
?>
</html>
