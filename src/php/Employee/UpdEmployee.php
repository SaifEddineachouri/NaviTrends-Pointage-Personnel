<?php
require '../database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if(trim($request['nom']) === '' || trim($request['prenom']) === '' || trim($request['dateNaissance']) === '' || trim($request['Cin']) === '' || trim($request['ncnss']) === ''|| trim($request['dateEmbauche']) === '' || trim($request['salaire']) === '' || trim($request['Regime']) === '' || trim($request['fichier']) === ''|| trim($request['commentaire']) === '' )
	{
		return http_response_code(400);
	}

    
	$Nom = mysqli_real_escape_string($mysqli, trim($request['nom']));
	$Prenom = mysqli_real_escape_string($mysqli, trim($request['prenom']));
    $DateNaissance = mysqli_real_escape_string($mysqli, trim($request['dateNaissance']));
    $Cin  = mysqli_real_escape_string($mysqli,(int)$request['Cin']);
    $Ncnss = mysqli_real_escape_string($mysqli, trim($request['ncnss']));
    $DateEmbauche = mysqli_real_escape_string($mysqli, trim($request['dateEmbauche']));
    $Salaire = mysqli_real_escape_string($mysqli, trim($request['salaire']));
	$Regime = mysqli_real_escape_string($mysqli, trim($request['Regime']));
    $Fichier = mysqli_real_escape_string($mysqli, trim($request['fichier']));
    $Commentaire = mysqli_real_escape_string($mysqli, trim($request['commentaire']));
    $id = mysqli_real_escape_string($mysqli, (int)$request['Id']);


	$sql = "UPDATE employee SET nom='$Nom',prenom='$Prenom',dateNaissance='$DateNaissance',ncnss='$Ncnss',dateEmbauche='$DateEmbauche',salaire='$Salaire',Regime='$Regime',fichier='$Fichier',commentaire='$Commentaire' WHERE id = '$id' ;";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}