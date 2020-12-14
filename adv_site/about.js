var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_React$Component) {
  _inherits(About, _React$Component);

  function About(props) {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).call(this, props));
  }

  _createClass(About, [{
    key: "hide",
    value: function hide(comp) {
      var style = document.getElementById(comp).style.display;
      if (style == "none") {
        document.getElementById(comp).style.display = "flex";
      } else if (style != "none") {
        document.getElementById(comp).style.display = "none";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        { id: "fixabout", "class": "description" },
        React.createElement(
          "div",
          { id: "general", "class": "row" },
          React.createElement(
            "h4",
            { onClick: function onClick() {
                return _this2.hide("generalp");
              } },
            "General"
          ),
          React.createElement("div", { "class": "w-100" }),
          React.createElement(
            "div",
            { "class": "col-sm" },
            React.createElement(
              "p",
              { id: "generalp", style: { display: 'none' } },
              "I'm currently in my 20's and living in Pittsburgh. I'm originally from",
              React.createElement(
                "a",
                { href: "https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania" },
                " Johnstown, PA "
              ),
              "which is about an hour east of Pittsburgh."
            )
          )
        ),
        React.createElement(
          "div",
          { id: "hobbies", "class": "row" },
          React.createElement(
            "h4",
            { onClick: function onClick() {
                return _this2.hide("hobbiesp");
              } },
            "Hobbies"
          ),
          React.createElement("div", { "class": "w-100" }),
          React.createElement(
            "div",
            { "class": "col-sm" },
            React.createElement(
              "p",
              { id: "hobbiesp", style: { display: 'none' } },
              "I'm currently in my 20's and living in Pittsburgh. I'm originally from",
              React.createElement(
                "a",
                { href: "https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania" },
                " Johnstown, PA "
              ),
              "which is about an hour east of Pittsburgh."
            )
          )
        ),
        React.createElement(
          "div",
          { id: "college", "class": "row" },
          React.createElement(
            "h4",
            { onClick: function onClick() {
                return _this2.hide("schoolp");
              } },
            "School"
          ),
          React.createElement("div", { "class": "w-100" }),
          React.createElement(
            "div",
            { "class": "col-sm" },
            React.createElement(
              "p",
              { id: "schoolp", style: { display: 'none' } },
              "I'm currently in my 20's and living in Pittsburgh. I'm originally from",
              React.createElement(
                "a",
                { href: "https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania" },
                " Johnstown, PA "
              ),
              "which is about an hour east of Pittsburgh."
            )
          )
        ),
        React.createElement(
          "div",
          { id: "h&d", "class": "row" },
          React.createElement(
            "h4",
            { onClick: function onClick() {
                return _this2.hide("handpp");
              } },
            "Hopes & Dreams"
          ),
          React.createElement("div", { "class": "w-100" }),
          React.createElement(
            "div",
            { "class": "col-sm" },
            React.createElement(
              "p",
              { id: "handpp", style: { display: 'none' } },
              "I'm currently in my 20's and living in Pittsburgh. I'm originally from",
              React.createElement(
                "a",
                { href: "https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania" },
                " Johnstown, PA "
              ),
              "which is about an hour east of Pittsburgh."
            )
          )
        )
      );
    }
  }]);

  return About;
}(React.Component);

ReactDOM.render(React.createElement(About, null), document.getElementById('about-load'));