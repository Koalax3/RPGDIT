<?php
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=mysql.hostinger.fr;dbname=u380693128_sheet;charset=utf8', 'u380693128_admin', 'samsung54');
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}
if ($_POST['username'] && $_POST['tableName'] && $_POST['data'])
{
    $reponse = $bdd->query("INSERT INTO `sheet`(`username`, `name`, `json`) VALUES ('".$_POST['username']."', '".$_POST['tableName']."','".$_POST['data']."')");
}
else if ($_POST['username'] && $_POST['name'] && $_POST['sheet'])
{
	$reponse = $bdd->query("INSERT INTO `homecategory`(`username`, `name`, `sheet`) VALUES ('".$_POST['username']."', '".$_POST['name']."', '".$_POST['sheet']."')");
}
else if ($_POST['username'] && $_POST['sheet'] && $_POST['category'] && $_POST['skill'] && $_POST['value'])
{
	$reponse = $bdd->query("INSERT INTO `homecharact`(`username`, `sheet`, `category`, `skill`, `value`) VALUES ('".$_POST['username']."', '".$_POST['sheet']."', '".$_POST['category']."', '".$_POST['skill']."', '".$_POST['value']."')");
}
$bdd = null;
?>