class About extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class='description'>
        <div class = 'row'>
        <h1> Who is Patrick <u>Otho</u> Brown? </h1>
        </div>
        <div class='row'>
          <h4>General</h4>
          <div class="w-100"></div>
          <div class='col-sm'>
            <p>I'm currently in my 20's and living in Pittsburgh. I'm originally from
               <a href="https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania"> Johnstown, PA </a>
               which is about an hour east of Pittsburgh.
            </p>
          </div>
          <div class='col-sm'><img class='logo' src='images/Johnstownview.jpg'></img></div>
        </div>

        <div class='row'>
        <h4>Hobbies</h4>
        </div>

        <div class='row'>
        <h4>College</h4>
        </div>

        <div class='row'>
        <h4>Hopes & Dreams</h4>
        </div>

      </div>
    );
  }
}


ReactDOM.render (
  <About />,
  document.getElementById('about-load')
);
