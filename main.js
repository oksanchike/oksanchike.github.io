webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(161);


/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _test = __webpack_require__(162);

	var _test2 = _interopRequireDefault(_test);

	var _reactDom = __webpack_require__(159);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(React.createElement(_test2.default, null), document.getElementById("content"));

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _test = __webpack_require__(163);

	var _test2 = _interopRequireDefault(_test);

	var _react = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Test = function (_Component) {
	    _inherits(Test, _Component);

	    function Test() {
	        _classCallCheck(this, Test);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Test).apply(this, arguments));
	    }

	    _createClass(Test, [{
	        key: "render",
	        value: function render() {
	            return React.createElement(
	                "div",
	                { className: _test2.default.wrapper },
	                "It's react"
	            );
	        }
	    }]);

	    return Test;
	}(_react.Component);

	exports.default = Test;

/***/ },

/***/ 163:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"wrapper":"test-wrapper-22wHUxxd"};

/***/ }

});