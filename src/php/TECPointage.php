<?php
include 'database.php';
$pointage = [];




$sql = "SELECT * FROM `pointage` WHERE Departement = 'TEC'";

if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$pointage[$i]['id'] = $row['id'];
		$pointage[$i]['Nom'] = $row['Nom'];
		$pointage[$i]['Prenom'] = $row['Prenom'];
        $pointage[$i]['Departement'] = $row['Departement'];
        $pointage[$i]['Poste'] = $row['Poste'];
        $pointage[$i]['Date'] = $row['Date'];
        $pointage[$i]['HeureEntree'] = $row['HeureEntree'];
        $pointage[$i]['HeureSortie'] = $row['HeureSortie'];
		$i++;
	}
	echo json_encode($pointage);
}
else
{
	http_response_code(404);
}

?>