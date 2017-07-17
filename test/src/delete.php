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
    $reponse = $bdd->query("DELETE FROM `sheet` WHERE username='".$_POST['username']."'&& name='".$_POST['tableName']."'&& json='".$_POST['data']."'");
$bdd = null;
?>