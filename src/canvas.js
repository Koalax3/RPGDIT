var backg;
var sheet;
class Fabric extends React.Component{
componentWillMount()
	{
    this.menu(1);
	}
    menu = event =>
    {
      if (event == 1)
      {
        sheet = <Sheet/>;
      this.setState(skill);
      lol();
    }
    else if (event == 2)
      {
        sheet = <Home/>;
      this.setState(skill);
      canvas = undefined;
      }
    }
   	
  render() { 
    return (
      <div>
    <h2 id="titre">RPGDIT</h2>
    {sheet}
    <h2 id="footer"></h2>
    </div>
    );
  }
}