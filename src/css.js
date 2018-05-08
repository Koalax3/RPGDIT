var manip = 0;
var quadri = 0;

function    slc()
{
    if ( manip == 1)
    {
        manip = 0;
        document.getElementById("mybtn1").style.backgroundColor = "rgba(192, 57, 43,1.0)";
        document.getElementById("myimg1").src = "http://localhost/rpgdit/asset/css/croix.png";
        document.getElementById("mybtn1").style.border = "0.5vh inset rgba(210, 67, 47,1.0)";
    }
    else if (manip == 0)
    {
        manip = 1;
        document.getElementById("mybtn1").style.backgroundColor = "rgba(39, 174, 96,1.0)";
        document.getElementById("myimg1").src = "http://localhost/rpgdit/asset/css/hand.png";
        document.getElementById("mybtn1").style.border = "0.5vh inset rgba(39, 194, 107,1.0)";
    }
}

function    grid()
{
    if (quadri == 0)
    {
        quadri = 1;
    $( "canvas" ).removeClass("grid-canvas").addClass("canvas");
    }
    else
    {
        quadri = 0;
    $( "canvas" ).removeClass("canvas").addClass("grid-canvas");
    }
}