function    download(opt) {
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

function    loadFile() {
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
      r = 1;
    }
    else
    alert("Operation aborted");
    }
  }