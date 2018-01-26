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

class CharactInput extends React.Component {
    componentWillMount() {
        supp_charact = (<div onClick={this.Send_del} id="charact-suppr"></div>);
        change_charact = (<div onClick={this.Send_change} id="charact-change"></div>);
    }
    Send_del = event => {
        var i = 0;
        DeleteCharact(this.props.details.skill, this.props.details.value, this.props.details.id, 0);
        var del = event.target;
        del.parentNode.style.display = 'none';
    }
    Send_change = event => {
        var i = 0;
        if (newskill == undefined || newskill == "")
            newskill = this.props.details.skill;
        else if (newvalue == undefined || newskill == "")
            newvalue = this.props.details.value;
        DeleteCharact(newskill, newvalue, this.props.details.id, 1);
    }
    Capt_changeskil(event) {
        newskill = "" + event.target.value;
    }
    Capt_changeval(event) {
        newvalue = "" + event.target.value;
    }
    render() {
        return (
            <div id="dispcharact" name="dispcharact">
                {change_charact}
                <input type="text" name="skill" onChange={this.Capt_changeskil} defaultValue={this.props.details.skill} />
                <img id="skill-separator" /><input onChange={this.Capt_changeval} type="text" defaultValue={this.props.details.value} />
                {supp_charact}
            </div>
        );
    }
}

class Charact extends React.Component {
    componentWillMount() {
    }
    render() {
        return (
            <div id="dispcharact" name="dispcharact">
                <div title={this.props.details.skill} >{this.props.details.skill}</div>
                <img id="skill-separator" /><div title={this.props.details.value} >{this.props.details.value}</div>
            </div>
        );
    }
}
class Category extends React.Component {
    Send = event => {
        test = event.target;
        var skill = test.parentNode.childNodes[0].childNodes[3].value;
        var value = test.parentNode.childNodes[1].childNodes[3].value;
        Sendcharact(skill, value, this.props.details.nom);
        this.table();
    }
    return = event => { btncharacter = (<div><button name="btncat" onClick={(e) => this.newchar()} id="btncharacter"><div id="add"></div></button></div>); this.setState(btncharacter); }
    newchar = event => {
        btncharacter = (<div id="form-character">
            <label id='charlb'>Attribute :<input maxlength="24" type="text" name="skill" /></label>
            <label id='charlb'>Value :<input maxlength="24" type="text" name="value" /></label>
            <input onClick={this.Send} id='charbtn' type="submit" name="creatskill" value="Add" />
            <img onClick={this.return} id="img-suppr" src="http://localhost/rpgdit/asset/css/croix.png" />
        </div>);
        this.setState(btncharacter);
    }
    table = event => {
        if (btncharacter == null && listcharact == null) {
            setTimeout(function () {
                if ((document.getElementById("btncategory") != undefined && document.getElementById("btncategory").style.display == "flex") ||
                    document.getElementById("form-category") != undefined)
                    for (var i = 0; i != document.getElementsByName("btncat").length; i++)
                        document.getElementsByName("btncat")[i].style.display = "flex";
                else
                    for (i = 0; i != document.getElementsByName("btncat").length; i++)
                        document.getElementsByName("btncat")[i].style.display = "none";
            }.bind(this), 100);
            btncharacter = (<button name="btncat" onClick={(e) => this.newchar()} id="btncharacter"><div id="add"></div></button>);
            if (charact[json["element" + nbrsheet].nom] != undefined && charact[json["element" + nbrsheet].nom][this.props.details.nom] != undefined) {
                if ((document.getElementById("btncategory") != undefined && document.getElementById("btncategory").style.display == "flex") ||
                    document.getElementById("form-category") != undefined) {
                    listcharact = Object
                        .keys(charact[json["element" + nbrsheet].nom][this.props.details.nom])
                        .map(key => <CharactInput key={key} pos={key} num={this.props.num} details={charact[json["element" + nbrsheet].nom][this.props.details.nom][key]} />);
                }
                else {
                    listcharact = Object
                        .keys(charact[json["element" + nbrsheet].nom][this.props.details.nom])
                        .map(key => <Charact key={key} num={this.props.num} details={charact[json["element" + nbrsheet].nom][this.props.details.nom][key]} />);
                }
            }
            arrow = "up";
        }
        else {
            listcharact = null;
            btncharacter = null;
            arrow = "down";
        }
        this.setState(btncategory);
    }
    componentWillMount() {
        arrow = "down";
    }
    render() {
        return (<div id="category">
            <div id="bar-category" onClick={this.table}>
                <div id="title-category" name="titre-category">{this.props.details.nom}</div>
                <div id={arrow}></div></div>
            {listcharact}
            {btncharacter}</div>);
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
        setTimeout(function () {
            canvas_home = new fabric.Canvas('canvas');
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
                {option_cat}
            </div>
            <canvas id="canvas" className="canvas-home" width="793" height="1125"></canvas>
        </div>);
    }
}