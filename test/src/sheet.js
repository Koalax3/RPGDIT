var save_json = null;
var savebtn;
var ghost = "ghost";

class Sheet extends React.Component {

    state = {
        back,
        skill,
        predate,
        portrait,
        box
    };

    componentWillMount() {
        if (getcookie("username") != null) {
            setTimeout(function () {
                document.getElementById('json').style.display = "grid";
            }, 20);
        }
        setTimeout(function () {
            home = "Not Connected"
            if (getcookie("username") != null && getcookie("username") != "" && json["element" + nbrsheet] != undefined) {
                home = json["element" + nbrsheet].nom;
            }
            this.setState(listcat);
            this.props.func();
        }.bind(this), 500);
    }

    componentDidMount() {
        setTimeout(
            function () {
                canvas_home = undefined;
                if (!canvas)
                    canvas = new fabric.Canvas('canvas');
                if (getcookie("username") != null && getcookie("username") != "" && json["element" + nbrsheet] != undefined) {
                    var newArr = JSON.parse(json["element" + nbrsheet].json);
                    canvas.loadFromJSON(newArr);
                    canvas.add(new fabric.IText("", { left: -100, top: -100 }));
                    if (json["element" + nbrsheet] == undefined)
                        savebtn = (<input onClick={(e) => this.Send()} id='saveButton' type="submit" name="save" value="Save" />);
                    else
                        savebtn = (<input onClick={(e) => SendCanvas(2)} id='saveButton' type="submit" name={json["element" + nbrsheet].nom} value="Change" />);
                    this.turn();
                }
            }.bind(this), 500);
    }

    Send = event => {
        SendCanvas(1)
    }
    onglet = event => {
        if (event == 1) {
            b = 1;
            backg = Object
                .keys(this.state.back)
                .map(key => <Image key={key} details={this.state.back[key]} />);
            this.setState(skill);
        }
        else if (event == 2) {
            b = 0;
            backg = Object
                .keys(this.state.predate)
                .map(key => <Image key={key} details={this.state.predate[key]} />);
            this.setState(skill);
        }
        else if (event == 3) {
            b = 0;
            backg = Object
                .keys(this.state.skill)
                .map(key => <Image key={key} details={this.state.skill[key]} />);
            this.setState(skill);
        }
        else if (event == 4) {
            b = 0;
            backg = Object
                .keys(this.state.box)
                .map(key => <Image key={key} details={this.state.box[key]} />);
            this.setState(skill);
        }
        else if (event == 5) {
            b = 0;
            backg = Object
                .keys(this.state.portrait)
                .map(key => <Image key={key} details={this.state.portrait[key]} />);
            this.setState(skill);
        }
        else if (event == 6) {
            backg = <Tutoriel />
            this.setState(skill);
        }
    }
    new = event => {
        var agree = confirm("If you press 'OK' your current project is losting");
        if (agree == true) {
            home = <input id="inputName" type="text" name="sheetname" />
            savebtn = (<input onClick={(e) => this.Send()} id='saveButton' type="submit" name="save" value="Save" />);
            delete canvas._objects;
            while (canvas._objects[0] != undefined)
                canvas.remove(canvas._objects[0]);
            r = 0;
            canvas.add(new fabric.IText("", { left: -100, top: -100 }));
        }
    }
    turn = event => {
        this.setState(sheet);
        this.setState(savebtn);
    }
    Sheetvolet = event => {
        if (save_json == null) {
            save_json = Object
                .keys(json)
                .map(key => <Optjson key={key} details={json[key]} />);
            ghost = "list-json";
        }
        else {
            save_json = null;
            ghost = "ghost";
        }
        this.setState(save_json);
    }
    render() {
        return (<div id="sheet" onClick={this.turn}>
            <div id="touch">
                <button id="mybtn3" onClick={this.new}><img id="myimg2" src="http://localhost/rpgdit/asset/css/sheet.png" /></button>
                <button id="mybtn1" onClick={slc}><img id="myimg1" src="http://localhost/rpgdit/asset/css/croix.png" /></button>
                <button id="mybtn2" onClick={grid}><img id="myimg2" src="http://localhost/rpgdit/asset/css/grid.png" /></button>
                <button id="exportButton" onClick={e => download(1)}>EXPORT .JSON</button>
                <button id="exportButton" onClick={e => download(2)}>EXPORT .PNG</button>
                <button id="exportButton" onClick={e => download(3)}>EXPORT .PDF</button>
                <label id="label-json"><span id="label-text">IMPORT .JSON</span>
                    <input type="file" id='fileinput' onChange={loadFile} data-allowed-file-extensions='json' />
                </label>
                <button onClick={addtext}>TEXT</button>
                <input id="jscolor" />
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
                {savebtn}
            </div>
            <div id="group">
                <ul id='menu'>
                    <li id='back'><a onClick={e => this.onglet(1)}>Background</a></li>
                    <li id='pred'><a onClick={e => this.onglet(2)}>Skill</a></li>
                    <li id='skill'><a onClick={e => this.onglet(3)}>Box</a></li>
                    <li id='port'><a onClick={e => this.onglet(5)}>Portrait</a></li>
                    <li id='box'><a onClick={e => this.onglet(4)}>Misc</a></li>
                    <li id='misc'><a onClick={e => this.onglet(6)}>Tutorial</a></li>

                </ul>
                <div id='side'>
                    <ul className='rig'>
                        {backg}
                    </ul>
                </div>
            </div>
            <canvas id="canvas" className="grid-canvas" width="793" height="1125"></canvas>
        </div>);
    }
}