'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BtnGreet = function (_React$Component) {
  _inherits(BtnGreet, _React$Component);

  function BtnGreet() {
    _classCallCheck(this, BtnGreet);

    return _possibleConstructorReturn(this, (BtnGreet.__proto__ || Object.getPrototypeOf(BtnGreet)).apply(this, arguments));
  }

  _createClass(BtnGreet, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          {
            style: { background: 'gold', border: 'none', padding: '5px 10px' },
            type: 'button',
            onClick: this._greet.bind(this) },
          this.props.buttonText
        )
      );
    }
  }, {
    key: '_greet',
    value: function _greet() {
      alert(this.props.alertMessage);
    }
  }]);

  return BtnGreet;
}(_react2.default.Component);

exports.default = BtnGreet;


BtnGreet.propTypes = {
  buttonText: _react2.default.PropTypes.string.isRequired,
  alertMessage: _react2.default.PropTypes.string.isRequired
};
