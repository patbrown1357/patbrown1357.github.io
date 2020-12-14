var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Projects = function (_React$Component) {
  _inherits(Projects, _React$Component);

  function Projects(props) {
    _classCallCheck(this, Projects);

    return _possibleConstructorReturn(this, (Projects.__proto__ || Object.getPrototypeOf(Projects)).call(this, props));
  }

  _createClass(Projects, [{
    key: "render",
    value: function render() {
      var title = "P5 Javascript Engine";
      var image = "images/perlin.gif";
      var description = "P5.js is a graphical Javascript engine. For me it works as a nice\
     creative outlet for when I am programming.";

      var title1 = "School Projects";
      var image1 = "images/perlin.gif";
      var description1 = "blah blah blah";

      var title2 = "Razzybot (RaspberryPi)";
      var image2 = "images/perlin.gif";
      var description2 = "blah blah blah";

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(ProjBlock, { title: title, description: description, image: image })
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(ProjBlock, { title: title1, description: description1, image: image1 })
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(ProjBlock, { title: title2, description: description2, image: image2 })
        ),
        React.createElement(
          "div",
          { "class": "row", style: { padding: '20px' } },
          React.createElement(
            "p",
            null,
            "Check out ",
            React.createElement(
              "strike",
              null,
              "most of"
            ),
            " these projects out on my",
            React.createElement(
              "a",
              { href: "https://github.com/patbrown1357", style: { color: '#cfc4f5' } },
              " Github"
            ),
            "!"
          )
        )
      );
    }
  }]);

  return Projects;
}(React.Component);

var ProjBlock = function (_React$Component2) {
  _inherits(ProjBlock, _React$Component2);

  function ProjBlock(props) {
    _classCallCheck(this, ProjBlock);

    return _possibleConstructorReturn(this, (ProjBlock.__proto__ || Object.getPrototypeOf(ProjBlock)).call(this, props));
  }

  _createClass(ProjBlock, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { "class": "media" },
        React.createElement(
          "div",
          { "class": "media-right" },
          React.createElement("img", { "class": "logo", src: this.props.image })
        ),
        React.createElement(
          "div",
          { "class": "media-body" },
          React.createElement(
            "h4",
            { "class": "media-Heading" },
            this.props.title
          ),
          React.createElement(
            "p",
            { "class": "text-left" },
            this.props.description
          )
        )
      );
    }
  }]);

  return ProjBlock;
}(React.Component);

ReactDOM.render(React.createElement(Projects, null), document.getElementById('project-container'));