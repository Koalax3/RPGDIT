function getcookieint(str)
{
  var tmp = document.cookie.split(';');
  var i;
  i = 0;
  while (tmp[i] != null)
  {
  if (tmp[i].split('=')[0].replace(' ', '') == str)
  {
    return Number(tmp[i].split('=')[1]);
  }
    i++;
  }
  console.log("error: not number");
  return -1;
}

function getcookie(str)
{
  var tmp = document.cookie.split(';');
  var i;
  i = 0;
  while (tmp[i] != null)
  {
  if (tmp[i].split('=')[0].replace(' ', '') == str)
  {
    return (tmp[i].split('=')[1]);
  }
    i++;
  }
  console.log("not in cookie");
  return null;
}

function    loadbdd()
{
    loadsave();
    loadcategory();
    loadcharact();
}
function    loadsave()
{
  if (document.getElementById('save') != undefined)
  {
  var tmp = document.getElementById('save').value.split(';;');
  console.log(tmp);
  var i = 0;
  var j = 0;
  while (tmp[i] != "" && tmp[i] != undefined)
  {
    json["element"+j] = {nom: tmp[i], json: tmp[i+1]};
    
    i += 2;
    j++;
  }
  document.getElementById('save').parentNode.removeChild(document.getElementById('save'));
  console.log("json=" + json);
  }
}

function    loadcategory()
{
    var i = 0;
    var j = 0;
     if (document.getElementById('category') != undefined)
  {
        var tmp = document.getElementById('category').value.split(';;');
        while (tmp[i] != "" && tmp[i] != undefined)
        {
                if (category[tmp[i]] == undefined)
                {
                    category[tmp[i]] = {["element"+j]:{sheet: tmp[i], nom:tmp[i+1]}};
                }
                else
                    category[tmp[i]]["element"+j]={sheet: tmp[i], nom:tmp[i+1]};
                i += 2;
                j++;
        }
          document.getElementById('category').parentNode.removeChild(document.getElementById('category'));
        console.log(category);
  }
}
function    loadcharact()
{
    var i = 0;
    var j = 0;
     if (document.getElementById('characts') != undefined)
  {
        var tmp = document.getElementById('characts').value.split(';;');
        while (tmp[i] != "" && tmp[i] != undefined)
        {
                if (charact[tmp[i]] == undefined)
                {
                    charact[tmp[i]] = {[tmp[i+1]]:{["element"+j]:{id: tmp[i+2], skill: tmp[i+3], value:tmp[i+4]}}};
                }
                else{
                    if(charact[tmp[i]][tmp[i+1]] == undefined)
                        {
                            charact[tmp[i]][tmp[i+1]] = {["element"+j]:{id: tmp[i+2], skill: tmp[i+3], value:tmp[i+4]}};
                        }
                        else
                            charact[tmp[i]][tmp[i+1]]["element"+j]={id: tmp[i+2], skill: tmp[i+3], value:tmp[i+4]};
                i += 5;
                j++;
                }
        }
          document.getElementById('characts').parentNode.removeChild(document.getElementById('characts'));
        console.log(charact);
  }
}
function    download(opt)
{
          var canva = document.getElementById("canvas");
          var context = canva.getContext("2d");
          var url = canva.toDataURL("image/png");
        if(opt === 2)
        {
            var w=window.open('Your image','image from canvas');
            w.document.write("<link rel='stylesheet' type='text/css' href='src/css/Flat.css'>");
            w.document.write("<h1 id='titre'>Your sheet:</h1>");
            w.document.write("<img src='"+url+"' alt='from canvas'style='margin: 2%;margin-left: 29%;'/>");
        }
        else if (opt ===3)
        {
          var doc = new jsPDF('p', 'mm');
          doc.addImage(url, 'PNG', 0, 0);
          doc.text ("depret.tk - RPGDIT", 10,10);
          doc.save('fiche_de_perso.pdf');
        }
        else if (opt === 1)
        {
          var json = canvas.toJSON();
          console.log(json);
          json.objects[r-1].selectable = false;
          while (r-2 > -1)
          {
          delete json.objects[r-2];
          r--;
          }
          var blob = new Blob([JSON.stringify(json)], {type: "text/json;charset=utf-8"});
          saveAs(blob, "fiche-rpgdit.json");
        }
      }

function    loadFile()
{
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

function    receivedText(e) {
      var lines = e.target.result;
      var newArr = JSON.parse(lines);
      console.log(newArr);
      var agree = confirm("If you press 'OK' your current project is losting");
      if (agree === true)
      {
      canvas.loadFromJSON(newArr);
      canvas.add(new fabric.IText("", { left: -100, top: -100}));
      r = 1;
    }
    else
    alert("Operation Aborted");
    }
  }
  function Sendcategory(option)
  {
    var user = getcookie('username');
    var sheet = json["element"+nbrsheet].nom;
    var category = document.getElementsByName('category')[0].value;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('ok');
                Resend();
            }
        };
    
    xmlhttp.open("POST",'src/save.php', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(encodeURI('username=' + user + '&name=' + category + '&sheet='+ sheet));
  }
  function Sendcharact(skill, value, category)
  {
    var user = getcookie('username');
    var sheet = json["element"+nbrsheet].nom;
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('ok');
                Resend();
            }
        };
    
    xmlhttp.open("POST",'src/save.php', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(encodeURI('username=' + user + '&sheet=' + sheet + '&category='+ category + '&skill='+ skill + '&value='+ value));
  }
  function SendCanvas(option)
  {
          var user = getcookie('username');
          var json = canvas.toJSON();
          console.log(json);
          if (r != 0)
          {
          json.objects[r-1].selectable = false;
          while (r-2 > -1)
          {
            delete json.objects[r-2];
            r--;
          }
          }
          json = JSON.stringify(json);
    if (canvas._objects.length == 0) {
        alert('your sheet is empty');
        return;
    }else { 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('ok');
                Resend();
            }
        };
        if (option == 1)
        {
            var name = document.getElementsByName('sheetname')[0].value;
            if (name == null || name == "")
                {
                    alert("Invalid Name: Operation Aborted");
                    return;
                }
            xmlhttp.open("POST",'src/save.php', true);
        }else if (option == 2)
        {
        var name = document.getElementById('saveButton').name;
        var agree = confirm("If you press 'OK' your sheet'"+name+"' is Changing");
      if (agree == false)
        return;
        xmlhttp.open("POST",'src/change.php', true);
        }
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(encodeURI('username=' + user + '&tableName=' + name + '&data=' + json));
    }
}

  function DeleteCanvas(deljson, delname) {
          var tmp = getcookie('username'); 
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('ok');
                Resend();
            }
        };
        var agree = confirm("If you press 'OK' your sheet'"+delname+"' is losting");
      if (agree == true)
      {
        xmlhttp.open("POST",'src/delete.php', true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(encodeURI('username=' + tmp + '&tableName=' + delname + '&data=' + deljson));
      }
}

  function DeleteCharact(skill, value, id, mode) {
        
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log('ok');
                Resend();
            }
        };
        if (mode == 0)
        {
        var agree = confirm("If you press 'OK' your charact '"+skill+"' is losting");
      if (agree == true)
      {
        xmlhttp.open("POST",'http://localhost/rpgdit/test/src/delete.php', true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(encodeURI('id=' + id + '&skill=' + skill+'&value=' + value));
      }
    }
    else{
        var agree = confirm("If you press 'OK' your charact '"+skill+"' is changing");
        if (agree == true)
        {
          xmlhttp.open("POST",'src/change.php', true);
          xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xmlhttp.send(encodeURI('id=' + id + '&skill=' + skill+'&value=' + value));
        }
    }
}

function Resend()
{
    var tmp = getcookie('username'); 
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            console.log('ok');
            var element = document.createElement("div");
            element.innerHTML = xmlhttp.responseText;
            var tmp = document.getElementById('root');
            var parentDiv = tmp.parentNode;
            parentDiv.insertBefore(element, tmp);
            json = {};
            category = {};
            charact = {};
            loadbdd();
        }
    };
    xmlhttp.open("POST",'src/login.php', true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(encodeURI('recupe=' + tmp));
}