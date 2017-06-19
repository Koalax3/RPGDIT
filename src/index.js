ReactDOM.render(<Fabric />, document.getElementById('root'));
var canvas;
var b = 1;
var i = 0;
var r = 0;
var imgs;
var img;
var picker;
function act(){b=1;}
function pas(){b=0;}

function slc(){
  if ( i === 1)
  {
  i = 0;
  document.getElementById("mybtn1").style.backgroundColor = "rgba(39, 174, 96,1.0)";
  document.getElementById("myimg1").src = "http://depret.tk/src/css/icon/hand.png";
  document.getElementById("mybtn1").style.border = "0.5vh inset rgba(39, 194, 107,1.0)";
}
else if (i === 0)
{
  i = 1;
  document.getElementById("mybtn1").style.backgroundColor = "rgba(192, 57, 43,1.0)";
  document.getElementById("myimg1").src = "http://depret.tk/src/css/icon/croix.png";
    document.getElementById("mybtn1").style.border = "0.5vh inset rgba(210, 67, 47,1.0)";
}
}
function del(){
  i = 1;
}
function scriptsheet(){
  setTimeout(function(){
    picker = new CP(document.getElementById("jscolor"));
        picker.on("change", function(color) {
        this.target.value = '#' + color;
        document.getElementById("jscolor").style.backgroundColor = '#'+color;});
    if (document.cookie && !canvas)
    {
      canvas = new fabric.Canvas('canvas');
      canvas.loadFromJSON(document.cookie);
      r = 1;
    }
    else if(!canvas){
          canvas = new fabric.Canvas('canvas');
    }
              canvas.on('mouse:down', function(option){
          if (option.target && option.target.selectable != false && i === 1){canvas.remove(option.target);}
           console.log(option.target);});
      }, 10);
}
function addtext()
        {
          var color = document.getElementById("jscolor").value;
          var type = document.querySelector("select").value;
          var listen = prompt("Insert your text =");
          canvas.add(new fabric.IText(listen, { left: 100, top: 100, fill: color, fontFamily : type}));
          document.cookie = new Blob([JSON.stringify(canvas.toJSON())], {type: "text/json;charset=utf-8"});
        }
function drop(src)
        {
          if ( b === 0)
          fabric.Image.fromURL(src , function(img) {
            canvas.add(img.set({ left: 400, top: 350, angle: 0 }).scale(0.35));});
          else
              fabric.Image.fromURL(src , function(img) {
          canvas.add(img.set({ left: 0, top: 0, angle: 0 }).scale(1)); canvas.moveTo(img, r); img.set('selectable', false); ++r;});
            setTimeout(function(){var json = canvas.toJSON();
          json.objects[r].selectable = false;
          document.cookie = "json =" + JSON.stringify(json) + ";";
          console.log('2',document.cookie);}, 10);
        }
    function download(opt) {
          var canva = document.getElementById("canvas");
          var context = canva.getContext("2d");
          // no argument defaults to image/png; image/jpeg, etc also work on some
          // implementations -- image/png is the only one that must be supported per spec.
          var url = canva.toDataURL("image/png");
          if(opt === 2)
          {
          open(url,"_blank");
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

      function loadFile() {
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

    function receivedText(e) {
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