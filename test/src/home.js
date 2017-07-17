var canvas_home;
var btncategory;
var btncharacter;
var nbrsheet = 1;
var home;
var listcat;
class Nothome extends React.Component{
    render(){
    return(<div id="accueil">
    <h1 id="please-home">Please Log us for use Home, But you can use generator</h1>
    </div>);
    }
}
class Home extends React.Component{
    state = {
        category
    };
    componentWillMount(){
        btncharacter =(<div><button onClick={this.newchar} id="btncharacter"><div id="add"></div></button></div>);
        listcat = Object
              .keys(this.state.category[json["element"+nbrsheet].nom])
              .map(key => <div id="category"><div key={key}>{this.state.category[json["element"+nbrsheet].nom][key].nom}<div id="down"></div>{btncharacter}</div></div>);
       btncategory = (<div><button onClick={this.newchar} id="btncharacter"><div id="add"></div></button></div>);
        home = "Not Connected"
        if (getcookie("username") != null && getcookie("username") != "" && json["element"+nbrsheet] != undefined)
        {
        home = json["element"+nbrsheet].nom;
        }
    }
    componentDidMount(){
        canvas_home = new fabric.Canvas('canvas');
        if (getcookie("username") != null && getcookie("username") != "" && json["element"+nbrsheet] != undefined)
        {
        var newArr = JSON.parse(json["element"+nbrsheet].json);
        canvas_home.loadFromJSON(newArr);
        canvas_home.add(new fabric.IText("", { left: -100, top: -100}));
        }
    }
    return = event =>{btncategory = (<button onClick={this.newchar} id="btncharacter"><div id="add"></div></button>);}
    newchar = event =>
    {
        btncategory = (<div id="form-home">
        <label id ='catlb'>Category :<input maxlength="24" type="text" name="category"/></label>
        <input onClick={(e) => Sendcharacter(1)} id='catbtn' type="submit" name="creatskill" value="Add"/>
        <img onClick={this.return} id="img-suppr" src="http://depret.tk/asset/css/croix.png"/>
        </div>);
    }
    change = event =>
    {
        if (event == 1)
        {
            nbrsheet++;
            if (json["element"+nbrsheet] == undefined)
            {
                nbrsheet = 1;
            }
            home = json["element"+nbrsheet].nom;
            var newArr = JSON.parse(json["element"+nbrsheet].json);
            canvas_home.loadFromJSON(newArr);
            canvas_home.add(new fabric.IText("", { left: -100, top: -100}));
        }
        else if (event == -1)
        {
            nbrsheet--;
            if (json["element"+nbrsheet] == undefined)
            {
                nbrsheet = Object.keys(json).length;
            }
            home = json["element"+nbrsheet].nom;
            var newArr = JSON.parse(json["element"+nbrsheet].json);
            canvas_home.loadFromJSON(newArr);
            canvas_home.add(new fabric.IText("", { left: -100, top: -100})); 
        }
        if(this.state.category[json["element"+nbrsheet].nom] != undefined )
        {
                listcat = Object
            .keys(this.state.category[json["element"+nbrsheet].nom])
            .map(key => <div id ="category" key={key}>{this.state.category[json["element"+nbrsheet].nom][key].nom}<div id="down"></div></div>);
        }
        else
        listcat = null;
    }
    turn = event =>
    {
      this.setState(btncategory);
    }
render(){
    return(<div id="accueil" onClick={this.turn}>
    <div id ="switch"><div id="arrowl-home" onClick={(e)=>this.change(-1)}></div>
    {home}
    <div id="arrowr-home" onClick={(e)=>this.change(1)}></div></div>
    <div id="character">
    {listcat}
    {btncategory}
    </div>
        <canvas  id="canvas" className="canvas-home" width="793" height="1125"></canvas>
    </div>);
    }
}