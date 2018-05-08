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
if ($_POST['data'])
	$reponse = $bdd->query("UPDATE `sheet` SET `json`='".$_POST['data']."' WHERE username='".$_POST['username']."' && name='".$_POST['tableName']."'");
else
{
	$reponse = $bdd->query("UPDATE `homecharact` SET skill='".$_POST['skill']."', value='".$_POST['value']."' WHERE id='".$_POST['id']."'");
}
$bdd = null;
?>