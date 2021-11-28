<?php
include '../database.php';
$conge = [];




$sql = "SELECT * FROM `conges` where Available = 0 ;";

if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$conge[$i]['Id'] = $row['Id'];
		$conge[$i]['Nom'] = $row['Nom'];
		$conge[$i]['Prenom'] = $row['Prenom'];
		$conge[$i]['Cin'] = $row['Cin'];
        $conge[$i]['Email'] = $row['Email'];
        $conge[$i]['DateDebut'] = $row['DateDebut'];
        $conge[$i]['DateFin'] = $row['DateFin'];
        $conge[$i]['Cause'] = $row['Cause'];
        $conge[$i]['TypeConges'] = $row['TypeConges'];

		$i++;
	}
	echo json_encode($conge);
}
else
{
	http_response_code(404);
}

?>