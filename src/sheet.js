class Sheet extends React.Component{

      state = {
    back,
    skill,
    predate,
    portrait,
    box
   };

    onglet = event => 
	{
    if (event == 1)
    {
        act();
        backg = Object
                      .keys(this.state.back)
                      .map(key => <Back key={key} details={this.state.back[key]}/>);
                      this.setState(skill);
    }
    else if (event == 2)
    {
      pas();
              backg = Object
                      .keys(this.state.predate)
                      .map(key => <Back key={key} details={this.state.predate[key]}/>);
                      this.setState(skill);
    }
    else if (event == 3)
    {
      pas();
        backg = Object
                      .keys(this.state.skill)
                      .map(key => <Back key={key} details={this.state.skill[key]}/>);
                      this.setState(skill);
    }
    else if (event == 4){
      pas();
       backg = Object
                      .keys(this.state.box)
                      .map(key => <Back key={key} details={this.state.box[key]}/>);
                      this.setState(skill);
    }
    else if (event == 5)
    {
      pas();
        backg = Object
                      .keys(this.state.portrait)
                      .map(key => <Back key={key} details={this.state.portrait[key]}/>);
                      this.setState(skill);
    }
    else if (event == 6)
    {
      pas();
      backg= <Tutoriel/>
      this.setState(skill);
    }
	}

    render(){
        return(<div id="sheet">
            <div id="touch">
    <button id ="mybtn1" onClick={slc}><img id ="myimg1" src="http://depret.tk/src/css/icon/hand.png"/></button>
    <button id="exportButton" onClick={e => download(1)}>EXPORT .JSON</button>
    <button id="exportButton" onClick={e => download(2)}>EXPORT .PNG</button>
    <button id="exportButton" onClick={e => download(3)}>EXPORT .PDF</button>
    <label id="label-json"><span id ="label-text">IMPORT .JSON</span>
  <input type="file" id='fileinput' onChange={loadFile} data-allowed-file-extensions='json'/>
  </label>
      <button onClick={addtext}>TEXT</button>
            <input id="jscolor"/>
            <select id="font" className="grid" name="type">
        <option value="Times New Roman">font family</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Arial">Arial</option>
        <option value="Verdana">Verdana</option>
        <option value="Courier New">Couriel New</option>
        <option value="serif">Serif</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Arial Black">Arial Black</option>
        <option value="Gadget">Gadget</option>
        <option value="Impact">Impact</option>
        <option value="Webdings">Webdings</option>
        <option value="Comic Sans MS">Comic Sans MS</option>
        <option value="wingdings">Wingdings</option>
    </select>
    </div>
    <div id="group">
    <ul id = 'menu'>
      <li id ='back'><a onClick={e => this.onglet(1)}>Background</a></li>
      <li id ='pred'><a  onClick={e => this.onglet(2)}>Predate</a></li>
      <li id ='skill'><a onClick={e => this.onglet(3)}>Skill</a></li>
      <li id ='box'><a  onClick={e => this.onglet(4)}>Box</a></li>
      <li id ='port'><a  onClick={e => this.onglet(5)}>Portrait</a></li>
      <li id ='misc'><a onClick={e => this.onglet(6)}>Tutorial</a></li>
    </ul>
     <div id ='side'>
    <ul className='rig'>
    {backg}
    </ul>
    </div>
    </div>
    <canvas id="canvas" className="canvas" width="793" height="1125"></canvas>
    </div>);
    }
}