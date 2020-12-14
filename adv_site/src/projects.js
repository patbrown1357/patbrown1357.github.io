class Projects extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const title = "P5 Javascript Engine";
    const image ="images/perlin.gif";
    var description =
    "P5.js is a graphical Javascript engine. For me it works as a nice\
     creative outlet for when I am programming.";

    const title1 = "School Projects";
    const image1 ="images/perlin.gif";
    const description1 = "blah blah blah";

    const title2 = "Razzybot (RaspberryPi)";
    const image2 ="images/perlin.gif";
    const description2 = "blah blah blah";

    return (
      <div>
        <div class="row">
        <ProjBlock title={title} description={description} image={image}/>
        </div>
        <div class="row">
        <ProjBlock title={title1} description={description1} image={image1}/>
        </div>
        <div class="row">
        <ProjBlock title={title2} description={description2} image={image2}/>
        </div>
        <div class="row" style={{padding:'20px'}}>
          <p>
            Check out <strike>most of</strike> these projects out on my
            <a href="https://github.com/patbrown1357" style ={{color:'#cfc4f5'}}> Github</a>!
          </p>
        </div>
      </div>
    );
  }
}

class ProjBlock extends React.Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div class="media">
        <div class="media-right">
          <img class="logo" src={this.props.image}/>
        </div>
        <div class="media-body">
          <h4 class="media-Heading">{this.props.title}</h4>
          <p class="text-left">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }

}


ReactDOM.render (
  <Projects />,
  document.getElementById('project-container')
);
