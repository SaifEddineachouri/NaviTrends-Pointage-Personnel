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


    $id = mysqli_real_escape_string($mysqli, (int)$request['Id']);
	$Nom = mysqli_real_escape_string($mysqli, trim($request['Nom']));
	$Prenom = mysqli_real_escape_string($mysqli, trim($request['Prenom']));
    $Cin = mysqli_real_escape_string($mysqli, trim($request['Cin']));
    $Email = mysqli_real_escape_string($mysqli, trim($request['Email']));
    $DateDebut = mysqli_real_escape_string($mysqli, trim($request['DateDebut']));
    $DateFin = mysqli_real_escape_string($mysqli, trim($request['DateFin']));
    $Cause = mysqli_real_escape_string($mysqli, trim($request['Cause']));
    $TypeConges = mysqli_real_escape_string($mysqli, trim($request['TypeConges']));

    
	$sql = "UPDATE conges SET Available = -1  WHERE Id = '$id' ;";
	
	if($mysqli->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}