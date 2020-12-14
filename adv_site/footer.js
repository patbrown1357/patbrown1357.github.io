var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "container" },
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(
            "div",
            { "class": "col-lg-8 col-md-8 col-sm-12" },
            React.createElement(
              "h6",
              { "class": "text-uppercase font-weight-bold" },
              "Additional Information"
            ),
            React.createElement(
              "p",
              null,
              "This website is not a complete picture of me as a person. If you're interested in contacting me either on a professional or personal level I encourage you to."
            ),
            React.createElement(
              "p",
              null,
              "As an extension this website is not a full reflection of my skills. There are soft skills and little widgets which can't be fully represented by a single portfolio site. If you are interested in these I encourage you to contact me."
            )
          ),
          React.createElement(
            "div",
            { "class": "col-lg-4 col-md-4 col-sm-12" },
            React.createElement(
              "h6",
              { "class": "text-uppercase font-weight-bold" },
              "Contact"
            ),
            React.createElement(
              "p",
              null,
              React.createElement("br", null),
              "patbrown1357@gmail.com",
              React.createElement("br", null),
              "https://www.linkedin.com/in/patrick-o-brown/"
            ),
            React.createElement("div", { id: "clock-container" })
          )
        ),
        React.createElement(
          "div",
          { "class": "footer-copyright text-center" },
          "\xA9 2020 Copyright: patrickotho.com"
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

ReactDOM.render(React.createElement(Footer, null), document.getElementById('page-footer'));