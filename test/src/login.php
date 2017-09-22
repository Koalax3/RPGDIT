<?php

if ($_POST['recupe'])
{
    $username = $_POST['recupe'];
    $json = Save_json($username);
    $category = Save_category($username);
    $charact = Save_charact($username);
    echo "<option id='save' style='display:none;' value='".$json."'></option>";
    echo "<option id='category' style='display:none;' value='".$category."'></option>";
    echo "<option id='characts' style='display:none;' value='".$charact."'></option>";
}

function Save_json($username)
{
    $json;
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
$reponse = $bdd->query("SELECT * FROM sheet WHERE username='".$username."' ORDER BY  `name` ASC");
while ($donnees = $reponse->fetch())
{
    $json .= $donnees['name'].';;'.$donnees['json'].';;';
}
if ($json == "")
    return "none;;0;;";
return $json;
}

function Save_category($username)
{
    $category;
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
$reponse = $bdd->query("SELECT * FROM homecategory WHERE username='".$username."' ORDER BY  `id` ASC");
while ($donnees = $reponse->fetch())
{
    $category .= $donnees['sheet'].';;'.$donnees['name'].';;';
}
if ($category == "")
{
    return "none;;Create your first sheet";
}
return $category;
}

function Save_charact($username)
{
    $charact;
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
$reponse = $bdd->query("SELECT * FROM homecharact WHERE username='".$username."' ORDER BY  `skill` ASC");
while ($donnees = $reponse->fetch())
{
    $charact .= $donnees['sheet'].';;'.$donnees['category'].';;'.$donnees['skill'].';;'.$donnees['value'].';;';
}
if ($charact == "")
{
    return "";
}
return $charact;
}

function Login($username, $password, $agree)
{
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
$reponse = $bdd->query("SELECT * FROM username WHERE username='".$username."'");
if ($reponse == false)
{
    echo "<div onclick='popup()' class='alert alert-warning'>
  <strong>Warning!</strong> Invalid Login.
</div>";
return false;
}
while ($donnees = $reponse->fetch())
{
    if ($password == $donnees['pass'])
    {
        echo "<div onclick='popup()' id='success' class='alert alert-success'>
        <strong>Success!</strong> Login agree! Welcome <strong>".$username."</strong>.
        </div>";
        $agree = true;
    }else
    {
        echo "<div onclick='popup()' class='alert alert-warning'>
        <strong>Warning!</strong> Invalid Password.
        </div>";
        $agree = false;
    }
}
$bdd = null;
return $agree;
}

function Signin($username, $password)
{
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
$reponse = $bdd->query("SELECT * FROM username WHERE username='".$username."'");
if ($reponse->fetch() == false)
{
    $reponse = $bdd->query("INSERT INTO `username`(`username`, `pass`) VALUES ('".$username."','".$password."')");
if ($reponse != false)
{
    echo "<div onclick='popup()' id='success' class='alert alert-success'>
  <strong>Success!</strong> Inscription agree! Welcome <strong>".$username."</strong>.
</div>";
return true;
}else{
    echo "<div onclick='popup()' class='alert alert-warning'>
  <strong>Warning!</strong> Error in manipulation! Please try later.
</div>
";
return false;
}
}else{
    echo "<div onclick='popup()' class='alert alert-warning'>
  <strong>Warning!</strong> The user name you have chosen is already in use.
</div>";
return false;
}
$bdd = null;
}
?>