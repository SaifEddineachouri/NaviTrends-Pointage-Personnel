<?php
include '../database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	
	if(trim($request['Nom']) === '' || trim($request['Prenom']) === '' || trim($request['Cin']) === '' || trim($request['Email']) === ''  || trim($request['DateDebut']) === '' || trim($request['DateFin']) === ''|| trim($request['Cause']) === '' || trim($request['TypeConges']) === '')
	{
		return http_response_code(400);
	}

	$Nom = mysqli_real_escape_string($mysqli, trim($request['Nom']));
	$Prenom = mysqli_real_escape_string($mysqli, trim($request['Prenom']));
    $Cin = mysqli_real_escape_string($mysqli, trim($request['Cin']));
    $Email = mysqli_real_escape_string($mysqli, trim($request['Email']));
    $DateDebut = mysqli_real_escape_string($mysqli, trim($request['DateDebut']));
    $DateFin = mysqli_real_escape_string($mysqli, trim($request['DateFin']));
    $Cause = mysqli_real_escape_string($mysqli, trim($request['Cause']));
    $TypeConges = mysqli_real_escape_string($mysqli, trim($request['TypeConges']));

    
    

	  
	$sql = "INSERT INTO conges (Id,Nom,Prenom,Cin,Email,DateDebut,DateFin,Cause,TypeConges,Available) VALUES (null,'$Nom','$Prenom','$Cin','$Email','$DateDebut','$DateFin','$Cause','$TypeConges',0);";
	if($mysqli->query($sql))
	{
		http_response_code(201);
		$conges = [
		'Id' => mysqli_insert_id($mysqli),
        'Nom' => $Nom,
		'Prenom' => $Prenom,
        'Cin' => $Cin,
        'Email' =>  $Email,
        'DateDebut' =>  $DateDebut ,
        'DateFin' => $DateFin,
        'Cause' => $Cause ,
        'TypeConges' => $TypeConges,
		'Available' => true
		];

		echo json_encode($conges);
	}
	else
	{
		http_response_code(422);
	}
}