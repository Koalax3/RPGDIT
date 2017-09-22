var backg;
var sheet;
var login;
var json = {};
var category = {};
var charact = {};

class Inwork extends React.Component{
  render(){
    return(<div id="accueil">
    <h1 id="please-home">Tab not ready, project in work.</h1>
    </div>);
  }
}

class Logout extends React.Component{
  logout = event =>
  {
    document.cookie = "username=PHPLOL";
    location.reload();
  }
  render(){
    return(
      <div id='notlogin'>
        <li><a onClick={this.logout}>Log out</a></li>
      </div>
    );
  }
}

class Notlogin extends React.Component{
      login = event =>
    {
      if (event == 1)
      {
        login = <Notlogin/>
        this.setState(login);
      }
      else if (event == 2)
      {
        login = <Login/>
        this.setState(login);
      }
      else if (event == 3)
      {
        login = <Signin/>
        this.setState(login);
      }
    }
  render(){
    return(
      <div id ='notlogin'>
            <li><a onClick={e => this.login(2)}>Login</a></li>
      <li><a  onClick={e => this.login(3)}>Sign in</a></li>
      </div>
    );
  }
}

class Login extends React.Component{
  render(){
    return(
      <div id ='notlogin'>
      <form action="" method="post">
            <label id ='loginlb'>Pseudo :<input maxlength="24" type="text" name="pseudo"/></label>
            <label id ='loginlb'>Password :<input  maxlength="24" type="password" name="psw"/></label>
            <input id='loginbtn' type="submit" name="submit" value="OK"/>
            </form>
      </div>
    );
  }
}

class Signin extends React.Component{
  render(){
    return(
      <div id ='notlogin'>
            <form action="" method="post">
            <label id ='loginlb'>Pseudo :<input  maxlength="24" type="text" name="pseudo"/></label>
            <label id ='loginlb'>Passworld :<input  maxlength="24" type="password" name="psw"/></label>
            <input id='loginbtn' type="submit" name="Signin" value="OK"/>
            </form>
      </div>
    );
  }
}
class Main extends React.Component{
componentWillMount()
	{
  if (getcookie("username") == null)
    {
      login = <Notlogin/>;
      this.setState(login);
    }else{
      Resend();
      login = <Logout/>;
      loadbdd();
    }
    if (getcookieint("Page") == -1)
    {
      this.menu(1);
      document.cookie = "Page=1";
    }else
    {
      this.menu(getcookieint("Page"));
    }
  }
    turn = event =>
    {
      this.setState(sheet);
    }
    menu = event =>
    {
      if (event == 1)
      {
        if (getcookie("username") == null)
        {
          sheet = <Nothome/>;
        }
        else{
          sheet = <Home/>;
        }
        this.setState(sheet);
        canvas = undefined;
      }
      else if (event == 2)
      {
        sheet = <Sheet/>;
        this.setState(sheet);
        scriptsheet();
      }
      else{
        sheet = <Inwork/>;
        this.setState(sheet);
        canvas = undefined;
      }
      document.cookie = "Page="+event;
    }
   	
  render() { 
    return (
      <div onClick={e => this.turn()}>
    <h2 id="titre"><div>RPGDIT</div></h2>
        <ul id = 'home' onClick={e => this.turn()}>
      <li id ='back'><a onClick={e => this.menu(1)}>HOME</a></li>
      <li id ='pred'><a>Generator</a>
        <ul>
        <li><a onClick={e => this.menu(2)}>Sheet</a></li>
        <li><a onClick={e => this.menu(3)}>Face</a></li>
        <li><a onClick={e => this.menu(4)}>Map</a></li>
        </ul>
      </li>
      <li id ='skill'><a onClick={e => this.menu(5)}>Inventory</a></li>
      <li id ='box'><a  onClick={e => this.menu(6)}>Game</a></li>
      <li id ='about'><a  onClick={e => this.menu(7)}>About</a></li>
      {login}
    </ul>
    {sheet}
    </div>
    );
  }
}