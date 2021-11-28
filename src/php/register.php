<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
include("database.php");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$role =  mysqli_real_escape_string($mysqli, trim($request->role));
$sql = "INSERT INTO admin(name,password,email,role) VALUES ('$name','$pwd','$email','$role')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'pwd' => '',
'email' => $email,
'role' => $role,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>