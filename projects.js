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
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Project"
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(ProjBlock, null)
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(ProjBlock, null)
        ),
        React.createElement(
          "div",
          { "class": "row" },
          React.createElement(ProjBlock, null)
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
          { "class": "media-left" },
          React.createElement("img", { "class": "media-object", src: "images/placeGhost.jpg" })
        ),
        React.createElement(
          "div",
          { "class": "media-body" },
          React.createElement(
            "h4",
            { "class": "media-Heading" },
            "Media Heading"
          ),
          React.createElement(
            "p",
            { "class": "text-left" },
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi, viverra vitae tellus at, vehicula ullamcorper tellus. Pellentesque tincidunt dui mollis quam maximus interdum. Etiam pulvinar urna et lectus ultrices pellentesque. Praesent dapibus vel lacus in posuere. Etiam quis accumsan eros. Curabitur pretium facilisis pharetra. Sed leo sem, dictum in dolor et, tempus venenatis mauris. Donec gravida ac est id mollis. Aliquam luctus est vitae metus tempus iaculis."
          )
        )
      );
    }
  }]);

  return ProjBlock;
}(React.Component);

ReactDOM.render(React.createElement(Projects, null), document.getElementById('project-container'));