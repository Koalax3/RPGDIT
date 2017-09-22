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
	$reponse = $bdd->query("DELETE FROM `sheet` WHERE username='".$_POST['username']."'&& name='".$_POST['tableName']."'&& json='".$_POST['data']."'");
}
else if ($_POST['username'] && $_POST['sheet'] && $_POST['category'] && $_POST['skill'] && $_POST['value'])
{
	$reponse = $bdd->query("DELETE FROM `homecharact` WHERE username='".$_POST['username']."'&& sheet='".$_POST['sheet']."'&& category='".$_POST['category']."'&& skill='".$_POST['skill']."'&& value='".$_POST['value']."'");
}
$bdd = null;
?>