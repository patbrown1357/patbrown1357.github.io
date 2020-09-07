class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-8 col-sm-12">
          <h6 class="text-uppercase font-weight-bold">Additional Information</h6>
          <p>This website is not a complete picture of me as a person. If you're interested in contacting me
             either on a professional or personal level I encourage you to.
          </p>
          <p>
            As an extension this website is not a full reflection of my skills. There are soft skills and
            little widgets which can't be fully represented by a single portfolio site. If you are interested
            in these I encourage you to contact me.
          </p>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12">
          <h6 class="text-uppercase font-weight-bold">Contact</h6>
          <p>
          <br/>patbrown1357@gmail.com
          <br/>https://www.linkedin.com/in/patrick-o-brown/
          </p>
                  <div id="clock-container"></div>
        </div>
      </div>
      <div class="footer-copyright text-center">© 2020 Copyright: patrickotho.com</div>
      </div>
    );
  }
}


ReactDOM.render (
  <Footer />,
  document.getElementById('page-footer')
);
