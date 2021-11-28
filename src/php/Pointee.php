<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	
	if(trim($request['Nom']) === '' || trim($request['Prenom']) === '' || trim($request['Departement']) === '' || trim($request['Poste']) === '' || trim($request['Date']) === ''|| trim($request['HeureEntree']) === '' || trim($request['HeureSortie']) === '')
	{
		return http_response_code(400);
	}

	$Nom = mysqli_real_escape_string($mysqli, trim($request['Nom']));
	$Prenom = mysqli_real_escape_string($mysqli, trim($request['Prenom']));
    $Departement = mysqli_real_escape_string($mysqli, trim($request['Departement']));
    $Poste = mysqli_real_escape_string($mysqli, trim($request['Poste']));
    $Date= mysqli_real_escape_string($mysqli, trim($request['Date']));
    $HeureEntree = mysqli_real_escape_string($mysqli, trim($request['HeureEntree']));
    $HeureSortie = mysqli_real_escape_string($mysqli, trim($request['HeureSortie'])); 
    $duree = intval($HeureSortie) - intval($HeureEntree) ; 

	  
	$sql = "INSERT INTO pointage (Nom,Prenom,Departement,Poste,Date,HeureEntree,HeureSortie,duree,id) VALUES ('$Nom','$Prenom','$Departement','$Poste','$Date','$HeureEntree','$HeureSortie','$duree',null);";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$pointage = [
		'id' => mysqli_insert_id($mysqli),
        'Nom' => $Nom,
		'Prenom' => $Prenom,
        'Departement' => $Departement,
        'Poste' =>  $Poste ,
        'Date' => $Date,
        'HeureEntree' => $HeureEntree ,
        'HeureSortie' => $HeureSortie,
		'duree' => $duree
		];

		echo json_encode($pointage);
	}
	else
	{
		http_response_code(422);
	}
}