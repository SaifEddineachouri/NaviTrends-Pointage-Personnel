<?php
include 'database.php';
$login = [];




$sql = "SELECT * FROM `admin`;";

if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$login[$i]['id'] = $row['id'];
		$login[$i]['name'] = $row['Nom'];
		$login[$i]['password'] = $row['Prenom'];
        $login[$i]['email'] = $row['Departement'];
        $login[$i]['role'] = $row['Poste'];
		$i++;
	}
	echo json_encode($login);
}
else
{
	http_response_code(404);
}

?>