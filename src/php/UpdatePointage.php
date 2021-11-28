<?php
require 'database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if(trim($request['Nom']) === '' || trim($request['Prenom']) === '' || trim($request['Departement']) === '' || trim($request['Poste']) === '' || trim($request['Date']) === ''|| trim($request['HeureEntree']) === '' || trim($request['HeureSortie']) === '') {
		return http_response_code(400);
	}

    $id = mysqli_real_escape_string($mysqli, (int)$request['id']);
	$Nom = mysqli_real_escape_string($mysqli, trim($request['Nom']));
	$Prenom = mysqli_real_escape_string($mysqli, trim($request['Prenom']));
    $Departement = mysqli_real_escape_string($mysqli, trim($request['Departement']));
    $Poste = mysqli_real_escape_string($mysqli, trim($request['Poste']));
    $Date= mysqli_real_escape_string($mysqli, trim($request['Date']));
    $HeureEntree = mysqli_real_escape_string($mysqli, trim($request['HeureEntree']));
    $HeureSortie = mysqli_real_escape_string($mysqli, trim($request['HeureSortie']));
	$duree = intval($HeureSortie) - intval($HeureEntree) ; 


	$sql = "UPDATE pointage SET Nom='$Nom',Prenom='$Prenom',Departement='$Departement',Poste='$Poste',Date='$Date',HeureEntree='$HeureEntree',HeureSortie='$HeureSortie' , duree = '$duree'  WHERE id = '$id' ;";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}