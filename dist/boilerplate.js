(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Boilerplate"] = factory(require("react"));
	else
		root["Boilerplate"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// this should be the entry point to your library
	
	module.exports = {
		ProgressBar: __webpack_require__(1)
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ProgressBar = function (_React$Component) {
		_inherits(ProgressBar, _React$Component);
	
		function ProgressBar(props) {
			_classCallCheck(this, ProgressBar);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ProgressBar).call(this, props));
	
			var orange = 30;
			var yellow = 55;
			var green = 85;
	
			if (props.colors) {
				var _props$colors = _slicedToArray(props.colors, 3);
	
				orange = _props$colors[0];
				yellow = _props$colors[1];
				green = _props$colors[2];
			}
			_this.colors = { orange: orange, yellow: yellow, green: green };
			return _this;
		}
	
		_createClass(ProgressBar, [{
			key: "updateProgress",
			value: function updateProgress() {
				var percent = this.props.completed;
				var progress = { className: "" };
				var bar = {
					className: "",
					divStyle: {
						width: "0%"
					}
				};
				var text = "";
				var _colors = this.colors;
				var orange = _colors.orange;
				var yellow = _colors.yellow;
				var green = _colors.green;
	
	
				if (percent >= 100) {
					progress.className = "progress--complete";
					bar.className = "progress__bar--blue";
					text = "Complete";
				} else {
					if (percent >= green) {
						bar.className = "progress__bar--green";
					} else if (percent >= yellow) {
						bar.className = "progress__bar--yellow";
					} else if (percent >= orange) {
						bar.className = "progress__bar--orange";
					}
				}
				bar.divStyle.width = percent + "%";
				return { percent: percent, progress: progress, bar: bar, text: text };
			}
		}, {
			key: "render",
			value: function render() {
				var _updateProgress = this.updateProgress();
	
				var percent = _updateProgress.percent;
				var progress = _updateProgress.progress;
				var bar = _updateProgress.bar;
				var text = _updateProgress.text;
	
				return _react2.default.createElement(
					"div",
					{ className: "progress progress--active " + progress.className },
					_react2.default.createElement(
						"b",
						{ className: "progress__bar " + bar.className, style: bar.divStyle },
						_react2.default.createElement(
							"span",
							{ className: "progress__text" },
							"Progress: ",
							_react2.default.createElement(
								"em",
								null,
								this.props.completed,
								" %"
							)
						)
					)
				);
			}
		}]);
	
		return ProgressBar;
	}(_react2.default.Component);
	
	exports.default = ProgressBar;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=boilerplate.js.map