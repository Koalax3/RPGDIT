ReactDOM.render(<Fabric />, document.getElementById('root'));
var canvas;
var b = 1;
var i = 0;
var r = 0;
var imgs;
var img;
var picker;

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
    if (option.target && option.target.selectable != false && i === 1)
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
          var text = prompt("Insert your text =");
          canvas.add(new fabric.IText(text, { left: 100, top: 100, fill: color, fontFamily : type}));
        }

function drop(src)
        {
          if ( b === 0)
          fabric.Image.fromURL(src , function(img) {
            canvas.add(img.set({ left: 100, top: 100, angle: 0 }).scale(0.35));
          });
          else
              fabric.Image.fromURL(src , function(img)
              {
          canvas.add(img.set({ left: 0, top: 0, angle: 0 }).scale(1));
          canvas.moveTo(img, r);
          img.set('selectable', false);
          r++;
        });
        }