ReactDOM.render(<Main />, document.getElementById('root'));
var canvas;
var b = 1;
var r = 0;
var imgs;
var img;
var picker;

function popup()
{
  var i = 0;
  var pop = document.getElementsByClassName("alert");
  while(pop[i])
  {
  document.body.removeChild(pop[i]);
  }
}
function scriptsheet()
{
  setTimeout(function()
  {
    picker = new CP(document.getElementById("jscolor"));
    picker.on("change", function(color) {
    this.target.value = '#' + color;
      document.getElementById("jscolor").style.backgroundColor = '#'+color;});
    if(!canvas)
    {
      canvas = new fabric.Canvas('canvas');
    }
    canvas.on('mouse:down', function(option){
    if (option.target && option.target.selectable != false && manip === 1)
    {
      canvas.remove(option.target);
    }
    console.log(option.target);
  });
      }, 10);
    }
function addtext()
        {
          var color = document.getElementById("jscolor").value;
          var type = document.querySelector("select").value;
          canvas.add(new fabric.IText("Enter text here", { left: 100, top: 100, fill: color, fontFamily : type, borderColor: '#c0392b', cornerColor: '#2980b9', cornerSize: 12, transparentCorners: false}));
        }

function drop(src) {
  console.log("drop");  
  if (b == 0) {
    fabric.Image.fromURL(src, function (img) {
      canvas.add(img.set({ left: 100, top: 100, angle: 0, borderColor: '#c0392b',
        cornerColor: '#2980b9', cornerSize: 12, transparentCorners: false }).scale(0.35));
    });
  }
  else {
    fabric.Image.fromURL(src, function (img) {
      canvas.add(img.set({ left: 0, top: 0, angle: 0 }).scale(1));
      if (canvas._objects[0]._element.src.search("/back/") != -1)
        canvas._objects[0].remove();
      canvas.moveTo(img, 0);
      img.set('selectable', false);
    });
  }
}