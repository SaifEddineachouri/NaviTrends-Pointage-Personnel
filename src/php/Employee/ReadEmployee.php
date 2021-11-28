<?php
include '../database.php';
$Employee = [];




$sql = "SELECT * FROM `employee`;";

if($result = $mysqli->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$Employee[$i]['Id'] = $row['id'];
		$Employee[$i]['Nom'] = $row['nom'];
		$Employee[$i]['Prenom'] = $row['prenom'];
        $Employee[$i]['DateNaissance'] = $row['dateNaissance'];
        $Employee[$i]['Cin'] = $row['Cin'];
        $Employee[$i]['Ncnss'] = $row['ncnss'];
        $Employee[$i]['DateEmbauche'] = $row['dateEmbauche'];
        $Employee[$i]['Salaire'] = $row['salaire'];
		$Employee[$i]['Regime'] = $row['Regime'];
        $Employee[$i]['Fichier'] = $row['fichier'];
        $Employee[$i]['Commentaire'] = $row['commentaire'];
		$i++;
	}
	echo json_encode($Employee);
}
else
{
	http_response_code(404);
}

?>