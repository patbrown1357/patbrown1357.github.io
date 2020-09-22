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
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { 'class': 'description' },
        React.createElement(
          'div',
          { 'class': 'row' },
          React.createElement(
            'h1',
            null,
            ' Who is Patrick ',
            React.createElement(
              'u',
              null,
              'Otho'
            ),
            ' Brown? '
          )
        ),
        React.createElement(
          'div',
          { 'class': 'row' },
          React.createElement(
            'h4',
            null,
            'General'
          ),
          React.createElement('div', { 'class': 'w-100' }),
          React.createElement(
            'div',
            { 'class': 'col-sm' },
            React.createElement(
              'p',
              null,
              'I\'m currently in my 20\'s and living in Pittsburgh. I\'m originally from',
              React.createElement(
                'a',
                { href: 'https://en.wikipedia.org/wiki/Johnstown,_Pennsylvania' },
                ' Johnstown, PA '
              ),
              'which is about an hour east of Pittsburgh.'
            )
          ),
          React.createElement(
            'div',
            { 'class': 'col-sm' },
            React.createElement('img', { 'class': 'logo', src: 'images/Johnstownview.jpg' })
          )
        ),
        React.createElement(
          'div',
          { 'class': 'row' },
          React.createElement(
            'h4',
            null,
            'Hobbies'
          )
        ),
        React.createElement(
          'div',
          { 'class': 'row' },
          React.createElement(
            'h4',
            null,
            'College'
          )
        ),
        React.createElement(
          'div',
          { 'class': 'row' },
          React.createElement(
            'h4',
            null,
            'Hopes & Dreams'
          )
        )
      );
    }
  }]);

  return About;
}(React.Component);

ReactDOM.render(React.createElement(About, null), document.getElementById('about-load'));