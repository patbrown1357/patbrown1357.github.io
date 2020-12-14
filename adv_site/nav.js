var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "nav",
        { "class": "navbar navbar-expand-md" },
        React.createElement(
          "a",
          { "class": "navbar-nav", href: "#" },
          React.createElement("img", null)
        ),
        React.createElement(
          "button",
          { "class": "navbar-toggler navbar-dark", type: "button", "data-toggle": "collapse", "data-target": "#main-navigation" },
          React.createElement("span", { "class": "navbar-toggler-icon" })
        ),
        React.createElement(
          "div",
          { "class": "collapse navbar-collapse", id: "main-navigation" },
          React.createElement(
            "ul",
            { "class": "navbar-nav" },
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "btn", href: "./index.html" },
                "Home"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "btn", href: "./projects.html" },
                "Projects"
              )
            ),
            React.createElement(
              "li",
              { "class": "nav-item" },
              React.createElement(
                "a",
                { "class": "btn", href: "./about.html" },
                "About"
              )
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

ReactDOM.render(React.createElement(Nav, null), document.getElementById('navbar-container'));