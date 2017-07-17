function    slc()
{
    if ( i === 1)
    {
        i = 0;
        document.getElementById("mybtn1").style.backgroundColor = "rgba(39, 174, 96,1.0)";
        document.getElementById("myimg1").src = "http://depret.tk/asset/css/hand.png";
        document.getElementById("mybtn1").style.border = "0.5vh inset rgba(39, 194, 107,1.0)";
    }
    else if (i === 0)
    {
        i = 1;
        document.getElementById("mybtn1").style.backgroundColor = "rgba(192, 57, 43,1.0)";
        document.getElementById("myimg1").src = "http://depret.tk/asset/css/croix.png";
        document.getElementById("mybtn1").style.border = "0.5vh inset rgba(210, 67, 47,1.0)";
    }
}