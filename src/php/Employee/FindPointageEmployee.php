<?php
include '../database.php';
$pointage = [];
$postdata = file_get_contents("php://input");
$request = json_decode($postdata,true); 
$nom = $_POST['nom'] ; 
$prenom = $_POST['prenom'] ; 
$date = $_POST['date']; 
$Date = explode("-", $date); 
  

    
	$sql = "select Nom , Prenom , Poste , Departement ,  sum(duree) as duree
			from pointage 
			where Nom = '$nom' and Prenom = '$prenom' and year(Date) = $Date[0] and month(Date) = $Date[1] 
			group by Nom , Prenom ; " ;


	if($result = $mysqli->query($sql))
		{
			$i = 0;
			while($row = $result->fetch_assoc())
			{
				$pointage[$i]['Nom'] = $row['Nom'];
				$pointage[$i]['Prenom'] = $row['Prenom'];
				$pointage[$i]['Departement'] = $row['Departement'];
				$pointage[$i]['Poste'] = $row['Poste'];
				$pointage[$i]['duree'] = $row['duree'];
				$i++;
			}
			echo json_encode($pointage);
		}
		else
		{
			http_response_code(404);
		}
   
	
		


?>