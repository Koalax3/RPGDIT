var canvas_home;
var btncategory;
var btncharacter;
var nbrsheet = 0;
var home;
var listcat;
var listcharact;
var arrow;
var edit = false;
var supp_charact;
var change_charact;
var option_cat;
var newskill;
var newvalue;
var test;
class Nothome extends React.Component {
    render() {
        return (<div id="accueil">
            <h1 id="please-home">Please Log us for use Home, But you can use generator</h1>
        </div>);
    }
}

class Home extends React.Component {
    componentWillMount() {
        setTimeout(function () {
            var i = 0;
            listcharact = null;
            btncharacter = null;
            option_cat = (<button id="opt-char" onClick={(e) => this.Option()}><div id="modif"></div></button>);
            btncategory = (<div><button onClick={(e) => this.newchar(1)} id="btncategory"><div id="add"></div></button></div>);
            listcat = Object
                .keys(category[json["element" + nbrsheet].nom])
                .map(key => <Category num={i++} key={key} details={category[json["element" + nbrsheet].nom][key]} />);
            home = "Not Connected"
            if (getcookie("username") != null && getcookie("username") != "" && json["element" + nbrsheet] != undefined) {
                home = json["element" + nbrsheet].nom;
            }
            this.setState(listcat);
            //this.props.func();
        }.bind(this), 500);
    }
    componentDidMount() {
        document.getElementById("switch").style.display = "flex";        
        setTimeout(function () {
            canvas_home = new fabric.StaticCanvas('canvas');
            if (getcookie("username") != null && getcookie("username") != "" && json["element" + nbrsheet] != undefined) {
                var newArr = JSON.parse(json["element" + nbrsheet].json);
                canvas_home.loadFromJSON(newArr);
                canvas_home.add(new fabric.IText("", { left: -100, top: -100 }));
            }
        }.bind(this), 500);
    }
    return = event => { btncategory = (<button onClick={(e) => this.newchar(1)} id="btncategory"><div id="add"></div></button>); }
    Option = event => {
        if (document.getElementById("btncategory") != undefined) {
            if (document.getElementById("btncategory").style.display != "flex") {
                document.getElementById("btncategory").style.display = "flex";
                if (document.getElementById("btncharacter") != undefined)
                    for (var i = 0; i != document.getElementsByName("btncat").length; i++)
                        document.getElementsByName("btncat")[i].style.display = "flex";
            }
            else {
                document.getElementById("btncategory").style.display = "none";
                if (document.getElementById("btncharacter") != undefined)
                    for (var i = 0; i != document.getElementsByName("btncat").length; i++)
                        document.getElementsByName("btncat")[i].style.display = "none";
            }
        }
        else if (document.getElementById("form-category") != undefined) {
            this.return();
            if (document.getElementById("btncharacter") != undefined)
                for (var i = 0; i != document.getElementsByName("btncat").length; i++)
                    document.getElementsByName("btncat")[i].style.display = "none";
        }
    }
    Send = event => {
        var i = 0;
        listcharact = null;
        btncharacter = null;
        this.setState(listcharact);
        Sendcategory();
        btncategory = (<div><button onClick={(e) => this.newchar(1)} id="btncategory"><div id="add"></div></button></div>);
        setTimeout(function () {
            listcat = Object
                .keys(category[json["element" + nbrsheet].nom])
                .map(key => <Category num={i++} key={key} details={category[json["element" + nbrsheet].nom][key]} />); this.setState(btncategory)
        }.bind(this), 2000);
    }
    newchar = event => {
        btncategory = (<div id="form-category">
            <label id='catlb'>Category :<input maxlength="24" type="text" name="category" /></label>
            <input onClick={(e) => this.Send()} id='catbtn' type="submit" name="creatskill" value="Add" />
            <img onClick={this.return} id="img-suppr" src="http://localhost/rpgdit/asset/css/croix.png" />
        </div>);
    }
    turn = event => {
        this.setState(btncategory);
    }
    render() {
        return (<div id="accueil" onClick={this.turn}>
            <div id="character">
                {listcat}
                {btncategory}
            </div>
            <canvas id="canvas" className="canvas-home" width="793" height="1125"></canvas>
        </div>);
    }
}