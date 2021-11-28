<?php
include '../database.php';
$postdata = file_get_contents("php://input");
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
    $Cin  = mysqli_real_escape_string($mysqli, trim($request['Cin']));
    $Ncnss = mysqli_real_escape_string($mysqli, trim($request['ncnss']));
    $DateEmbauche = mysqli_real_escape_string($mysqli, trim($request['dateEmbauche']));
    $Salaire = mysqli_real_escape_string($mysqli, trim($request['salaire']));
	$Regime = mysqli_real_escape_string($mysqli, trim($request['Regime']));
    $Fichier = mysqli_real_escape_string($mysqli, trim($request['fichier']));
    $Commentaire = mysqli_real_escape_string($mysqli, trim($request['commentaire']));

	$sql = "INSERT INTO employee (id,nom,prenom,dateNaissance,Cin,ncnss,dateEmbauche,salaire,Regime,fichier,commentaire) VALUES (null,'$Nom','$Prenom','$DateNaissance','$Cin','$Ncnss','$DateEmbauche','$Salaire','$Regime','$Fichier','$Commentaire');";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$Employee = [
		'id' => mysqli_insert_id($mysqli),
        'nom' => $Nom,
		'prenom' => $Prenom,
        'dateNaissance' => $DateNaissance,
        'Cin' =>  $Cin ,
        'ncnss' => $Ncnss,
        'dateEmbauche' => $DateEmbauche ,
        'salaire' => $Salaire,
		'Regime' => $Regime,
        'fichier'=> $Fichier,
        'commentaire'=> $Commentaire
    ];

		echo json_encode($Employee);
	}
	else
	{
		http_response_code(422);
	}
}