<?php
function Save_json($username, $password)
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
$reponse = $bdd->query("SELECT * FROM sheet WHERE username='".$username."'");
if ($reponse->fetch() == false)
{
    return "vide;0;";
}
while ($donnees = $reponse->fetch())
{
    $json .= $donnees['name'].';'.$donnees['json'].';';
}
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
$reponse = $bdd->query("SELECT * FROM homecategory WHERE username='".$username."'");
if ($reponse == false)
{
    echo var_dump($reponse);
    echo var_dump($username);
    return "vide;0;";
}
while ($donnees = $reponse->fetch())
{
    $category .= $donnees['sheet'].';'.$donnees['name'].';';
}
return $category;
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
        echo "<div onclick='popup()' class='alert alert-success'>
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
    echo "<div onclick='popup()' class='alert alert-success'>
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