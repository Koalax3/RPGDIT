class Image extends React.Component {

  render() {
    return (
      <div id='vig' crossOrigin="Anonymous" >
        <img id='ima' src={this.props.details.url} onClick={(e) => drop(this.props.details.url)} alt="" />
        <h3 id="subtitre">{this.props.details.nom}</h3>
      </div>);
  }
}
class Tutoriel extends React.Component {
componentDidMount(){
  document.getElementById("switch").style.display = "none";    
}
  render()
  {
    return (
      <div id="tuto">
        <h1 id="tuto-titre">Welcome in RPGDIT</h1>
        <p id='tuto-p'>
          RPGDIT is a Hub project created for EPITECH
        </p>
        <p id='tuto-p'>
          The purpose of the project is to permit people not possessing sufficient montage or drawing skills to make RPG character sheets to create their own, for their RPGs.
          </p>
        <p id='tuto-p'>
          The application revolves around two libraries: REACTJS and FABRICJS
        </p>
        <p id='tuto-p'>
          Adding elements to the sheet is easy:
        </p>
        <p id="tuto-p">
          First, click on the element type you want in the menu (background, skills). Then, click on the element you want, and it will automatically be placed on the sheet.
          </p>
        <p id="tuto-p">
          You can resize and rotate elements afterwards, always directly on the sheet.
          </p>
        <p id="tuto-p">
          The TEXT button lets you integrate values, titles, etc. to your sheet. You can also change the color or font of the text.
          </p>
        <p id="tuto-p">
          SELECT and DELETE button are available to modify or delete elements.
          </p>
        < p id="tuto-p">
          .PDF EXPORT and .PNG EXPORT buttons let you save and print your sheets (don’t forget to unselect everything before, or cursors and modification elements will be exported with them).
          </p>
        < p id="tuto-p">
          The EXPORT JSON button allows you to save your work in a local file, in JSON format.
          </p>
        < p id="tuto-p">
          The IMPORT JSON button allows you to load a saved file.
          </p>
        <p id="tuto-p">
          This tutorial is finished,
            </p>
        <p id="tuto-p">
          Enjoy!
            </p>
        <p id="tuto-p">
          DEPRET LUCAS
            </p>
      </div>
    );
  }
}