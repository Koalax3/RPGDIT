var backg;
var sheet;
var login;
var json = {};
var category = {};
var charact = {};
var setStateMain;

class Inwork extends React.Component {
  render() {
    return (<div id="accueil">
      <h1 id="please-home">Tab not ready, project in work.</h1>
    </div>);
  }
}

class Logout extends React.Component {
  logout = event => {
    document.cookie = "username=PHPLOL";
    location.reload();
  }
  render() {
    return (
      <div id='notlogin'>
        <li><a onClick={this.logout}>Log out</a></li>
      </div>
    );
  }
}

class Notlogin extends React.Component {
  login = event => {
    if (event == 1) {
      login = <Notlogin />
      this.setState(login);
    }
    else if (event == 2) {
      login = <Login />
      this.setState(login);
    }
    else if (event == 3) {
      login = <Signin />
      this.setState(login);
    }
  }
  render() {
    return (
      <div id='notlogin'>
        <li><a onClick={e => this.login(2)}>Login</a></li>
        <li><a onClick={e => this.login(3)}>Sign in</a></li>
      </div>
    );
  }
}

class Login extends React.Component {
  render() {
    return (
      <div id='notlogin'>
        <form action="" method="post">
          <label id='loginlb'>Pseudo :<input maxlength="24" type="text" name="pseudo" /></label>
          <label id='loginlb'>Password :<input maxlength="24" type="password" name="psw" /></label>
          <input id='loginbtn' type="submit" name="submit" value="OK" />
        </form>
      </div>
    );
  }
}

class Signin extends React.Component {
  render() {
    return (
      <div id='notlogin'>
        <form action="" method="post">
          <label id='loginlb'>Pseudo :<input maxlength="24" type="text" name="pseudo" /></label>
          <label id='loginlb'>Passworld :<input maxlength="24" type="password" name="psw" /></label>
          <input id='loginbtn' type="submit" name="Signin" value="OK" />
        </form>
      </div>
    );
  }
}
class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  componentWillMount() {
    if (getcookie("username") == null) {
      login = <Notlogin />;
      this.setState(login);
    } else {
      Resend();
      login = <Logout />;
      loadbdd();
    }
    if (getcookieint("Page") == -1) {
      this.menu(1);
      document.cookie = "Page=1";
    } else {
      this.menu(getcookieint("Page"));
    }
    home = 'wait';
  }
  componentDidMount() {
  }
  change = event => {
    if (event == 1) {
      btncategory = (<div><button onClick={(e) => this.newchar(1)} id="btncategory"><div id="add"></div></button></div>);
      nbrsheet++;
      if (json["element" + nbrsheet] == undefined) {
        nbrsheet = 0;
      }
      home = json["element" + nbrsheet].nom;
      var newArr = JSON.parse(json["element" + nbrsheet].json);
      console.log("test =" + newArr);
      console.log("test =" + json["element" + nbrsheet]);
      if (canvas_home != undefined) {
        canvas_home.loadFromJSON(newArr);
        canvas_home.add(new fabric.IText("", { left: -100, top: -100 }));
      }
      else {
        canvas.loadFromJSON(newArr);
        canvas.add(new fabric.IText("", { left: -100, top: -100 }));
        savebtn = (<input onClick={(e) => SendCanvas(2)} id='saveButton' type="submit" name={json["element" + nbrsheet].nom} value="Change" />);
      }
    }
    else if (event == -1) {
      btncategory = (<div><button onClick={(e) => this.newchar(1)} id="btncategory"><div id="add"></div></button></div>);
      nbrsheet--;
      if (json["element" + nbrsheet] == undefined) {
        nbrsheet = (Object.keys(json).length) - 1;
      }
      home = json["element" + nbrsheet].nom;
      var newArr = JSON.parse(json["element" + nbrsheet].json);
      if (canvas_home != undefined) {
        canvas_home.loadFromJSON(newArr);
        canvas_home.add(new fabric.IText("", { left: -100, top: -100 }));
      }
      else {
        canvas.loadFromJSON(newArr);
        canvas.add(new fabric.IText("", { left: -100, top: -100 }));
        savebtn = (<input onClick={(e) => SendCanvas(2)} id='saveButton' type="submit" name={json["element" + nbrsheet].nom} value="Change" />);
      }
    }
    if (category[json["element" + nbrsheet].nom] != undefined) {
      var i = 0;
      listcharact = null;
      btncharacter = null;
      listcat = Object
        .keys(category[json["element" + nbrsheet].nom])
        .map(key => <Category num={i++} key={key} details={category[json["element" + nbrsheet].nom][key]} />);
    }
    else
      listcat = null;
    setStateMain.turn();
  }
  turn = event => {
    this.setState(sheet);
  }
  menu = event => {
    if (event == 1) {
      if (getcookie("username") == null) {
        sheet = <Nothome />;
      }
      else {
        sheet = <Home ref={(e) => { setStateMain = e }} func={this.turn} />;
      }
      this.setState(sheet);
      canvas = undefined;
    }
    else if (event == 2) {
      sheet = <Sheet ref={(e) => { setStateMain = e }} func={this.turn} func={this.turn} />;
      this.setState(sheet);
      scriptsheet();
    }
    else {
      sheet = <Inwork />;
      this.setState(sheet);
      canvas = undefined;
    }
    document.cookie = "Page=" + event;
  }

  render() {
    return (
      <div onClick={e => this.turn()}>
        <h2 id="titre"><div>RPGDIT</div></h2>
        <ul id='home' onClick={e => this.turn()}>
          <li id='back'><a onClick={e => this.menu(1)}>HOME</a></li>
          <li id='pred'><a>Generator</a>
            <ul>
              <li><a onClick={e => this.menu(2)}>Sheet</a></li>
              <li><a onClick={e => this.menu(3)}>Face</a></li>
              <li><a onClick={e => this.menu(4)}>Map</a></li>
            </ul>
          </li>
          <li id='skill'><a onClick={e => this.menu(5)}>Inventory</a></li>
          <li id='box'><a onClick={e => this.menu(6)}>Game</a></li>
          <li id='about'><a onClick={e => this.menu(7)}>About</a></li>
          {login}
        </ul>
        <div id="switch"><div id="arrowl-home" onClick={(e) => this.change(-1)}></div>
          {home}
          <div id="arrowr-home" onClick={(e) => this.change(1)}></div></div>
        {sheet}
      </div>
    );
  }
}