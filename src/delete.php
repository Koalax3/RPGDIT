<?php
try
{
	// On se connecte à MySQL
	$bdd = new PDO('mysql:host=localhost;dbname=u380693128_sheet;charset=utf8', 'u380693128_admin', 'samsung54');
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
else
{
	$reponse = $bdd->query("DELETE FROM `homecharact` WHERE id='".$_POST['id']."'");
}
$bdd = null;
?>