class About extends React.Component {
  constructor(props) {
    super(props);

  }

  hide(comp) {
    const style = document.getElementById(comp).style.display;
    if( style == "none") {
      document.getElementById(comp).style.display = "flex";
    } else if( style != "none") {
      document.getElementById(comp).style.display = "none";
    }
  }


  render() {
    return (
      <div id="fixabout" class='description'>
        <div id="general" class='row'>
          <h4 onClick={() => this.hide("generalp")}>General</h4>
          <div class="w-100"></div>
          <div class='col-sm'>
            <p id="generalp" style={{display:'none'}}>I'm currently in my 20's and living in Pittsburgh. I'm originally from
               <a href="https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania"> Johnstown, PA </a>
               which is about an hour east of Pittsburgh.

            </p>
          </div>
        </div>

        <div id="hobbies" class='row'>
        <h4 onClick={() => this.hide("hobbiesp")}>Hobbies</h4>
        <div class="w-100"></div>
        <div class='col-sm'>
          <p id="hobbiesp" style={{display:'none'}}>I'm currently in my 20's and living in Pittsburgh. I'm originally from
             <a href="https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania"> Johnstown, PA </a>
             which is about an hour east of Pittsburgh.

          </p>
        </div>
        </div>

        <div id="college" class='row'>
        <h4 onClick={() => this.hide("schoolp")}>School</h4>
        <div class="w-100"></div>
        <div class='col-sm'>
          <p id="schoolp" style={{display:'none'}}>I'm currently in my 20's and living in Pittsburgh. I'm originally from
             <a href="https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania"> Johnstown, PA </a>
             which is about an hour east of Pittsburgh.

          </p>
        </div>
        </div>

        <div id="h&d" class='row'>
        <h4 onClick={() => this.hide("handpp")} >Hopes & Dreams</h4>
        <div class="w-100"></div>
        <div class='col-sm'>
          <p id="handpp" style={{display:'none'}}>I'm currently in my 20's and living in Pittsburgh. I'm originally from
             <a href="https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania"> Johnstown, PA </a>
             which is about an hour east of Pittsburgh.

          </p>
        </div>
        </div>

      </div>
    );
  }
}


ReactDOM.render (
  <About />,
  document.getElementById('about-load')
);
