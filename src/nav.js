class Nav extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <nav class="navbar navbar-expand-md">
        <a class="navbar-nav" href="#">
          <img></img>
        </a>
        <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="main-navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="btn" href="./index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="btn" href="./projects.html">Projects</a>
            </li>
            <li class="nav-item">
              <a class="btn" href="./about.html">About</a>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}


ReactDOM.render (
  <Nav />,
  document.getElementById('navbar-container')
);
