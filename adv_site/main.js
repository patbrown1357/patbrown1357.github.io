var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main(props) {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "description" },
          React.createElement(
            "div",
            { "class": "d-flex flex-row" },
            React.createElement(
              "h1",
              { "class": "display-1" },
              "Hello!"
            )
          ),
          React.createElement(
            "div",
            { "class": "d-flex flex-row" },
            React.createElement(
              "p",
              { "class": "text-left" },
              "Welcome to my website this is both a portfolio and a project,",
              React.createElement("br", null),
              "and as I grow it will too."
            )
          ),
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement("p", { "class": "text-left" })
          ),
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement("p", { "class": "text-left" })
          ),
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement("p", { "class": "text-left" })
          )
        ),
        React.createElement(
          "div",
          { "class": "container features" },
          React.createElement(
            "div",
            { "class": "row" },
            React.createElement(
              "div",
              { "class": "col-lg-4 col-md-4 col-sm-12" },
              React.createElement(
                "h3",
                { "class": "feature-title" },
                "A little about me"
              ),
              React.createElement("img", { src: "images/yaharr.jpg", id: "yaharr", "class": "img-thumbnail", title: "Yes, I'm dressed as Gorton." }),
              React.createElement(
                "p",
                null,
                "I am a third year computer science student at the University of Pittsburgh. "
              )
            ),
            React.createElement(
              "div",
              { "class": "col-lg-4 col-md-4 col-sm-12" },
              React.createElement(
                "h3",
                { "class": "feature-title" },
                "LinkedIn Profile"
              ),
              React.createElement(
                "div",
                { "class": "LI-profile-badge", "data-version": "v1", "data-size": "medium", "data-locale": "en_US", "data-type": "vertical", "data-theme": "dark", "data-vanity": "patrick-o-brown" },
                React.createElement(
                  "a",
                  { "class": "LI-simple-link", href: "https://www.linkedin.com/in/patrick-o-brown?trk=profile-badge" },
                  "Patrick Brown"
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById('main-load'));