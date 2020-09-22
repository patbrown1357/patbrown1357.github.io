class Projects extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <h1>Project</h1>
        <div class="row">
        <ProjBlock />
        </div>
        <div class="row">
        <ProjBlock />
        </div>
        <div class="row">
        <ProjBlock />
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
        <div class="media-left">
          <img class="logo" src="images/perlin.gif"/>
        </div>
        <div class="media-body">
          <h4 class="media-Heading">This is changing</h4>
          <p class="text-left"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi, viverra vitae tellus at, vehicula ullamcorper tellus. Pellentesque tincidunt dui mollis quam maximus interdum. Etiam pulvinar urna et lectus ultrices pellentesque. Praesent dapibus vel lacus in posuere. Etiam quis accumsan eros. Curabitur pretium facilisis pharetra. Sed leo sem, dictum in dolor et, tempus venenatis mauris. Donec gravida ac est id mollis. Aliquam luctus est vitae metus tempus iaculis.
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
