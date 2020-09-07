class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (

      <div>
        <div class="description">
          <div class="d-flex flex-row">
            <h1 class="display-1">Hello!</h1>
          </div>
          <div class="d-flex flex-row">
            <p class="text-left">Welcome to my website this is both a portfolio and a project,
              <br />and as I grow it will too.
            </p>
          </div>
          <div class="row">
            <p class="text-left">

            </p>
          </div>
          <div class="row">
            <p class="text-left">

            </p>
          </div>
          <div class="row">
            <p class="text-left">

            </p>
          </div>

        </div>

        <div class="container features">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-12">
              <h3 class="feature-title">A little about me</h3>
                <img src="images/yaharr.jpg" id="yaharr" class="img-thumbnail" title="Yes, I'm dressed as Gorton."/>
              <p>I am a third year computer science student at the University of Pittsburgh. </p>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12">
              <h3 class="feature-title">LinkedIn Profile</h3>
              <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="patrick-o-brown"><a class="LI-simple-link" href='https://www.linkedin.com/in/patrick-o-brown?trk=profile-badge'>Patrick Brown</a></div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}


ReactDOM.render (
  <Main />,
  document.getElementById('main-load')
);
