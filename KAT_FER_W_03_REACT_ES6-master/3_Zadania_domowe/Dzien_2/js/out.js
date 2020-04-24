/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n$(function () {\n\n    //task1\n\n    var Insect = function () {\n        function Insect(name, legs, type) {\n            _classCallCheck(this, Insect);\n\n            this.name = name;\n            this.legs = legs;\n            this.type = type;\n        }\n\n        _createClass(Insect, [{\n            key: 'getLegs',\n            value: function getLegs() {\n                console.log('czesc mam na imię ' + this.name + ' jestem ' + this.type + ' i mam ' + this.legs + ' nóg');\n            }\n        }]);\n\n        return Insect;\n    }();\n\n    var Centipede = function (_Insect) {\n        _inherits(Centipede, _Insect);\n\n        function Centipede(name, legs, type) {\n            _classCallCheck(this, Centipede);\n\n            var _this = _possibleConstructorReturn(this, (Centipede.__proto__ || Object.getPrototypeOf(Centipede)).call(this, name, legs, type));\n\n            _this.name = 'lucy';\n            _this.legs = 20;\n            _this.type = 'centipede';\n            return _this;\n        }\n\n        _createClass(Centipede, [{\n            key: 'getLegs',\n            value: function getLegs() {\n                console.log('czesc mam na imię ' + this.name + ' jestem ' + this.type + ' i mam ' + this.legs + ' nóg');\n            }\n        }]);\n\n        return Centipede;\n    }(Insect);\n\n    var stonoga = new Centipede('lucy', 6, 'centipede');\n    stonoga.getLegs();\n\n    var Spider = function (_Insect2) {\n        _inherits(Spider, _Insect2);\n\n        function Spider(name, legs, type) {\n            _classCallCheck(this, Spider);\n\n            var _this2 = _possibleConstructorReturn(this, (Spider.__proto__ || Object.getPrototypeOf(Spider)).call(this, name, legs, type));\n\n            _this2.name = 'majkel';\n            _this2.legs = 8;\n            _this2.type = 'spider';\n            return _this2;\n        }\n\n        _createClass(Spider, [{\n            key: 'getLegs',\n            value: function getLegs() {\n                console.log('czesc mam na imię ' + this.name + ' jestem ' + this.type + ' i mam ' + this.legs + ' nóg');\n            }\n        }]);\n\n        return Spider;\n    }(Insect);\n\n    var pajak = new Spider('majkel', 20, 'spider');\n    pajak.getLegs();\n\n    //task2\n    //\n    var saySomething = function saySomething() {\n        return {\n            name: \"Wally\",\n            age: 2,\n            proffesion: \"Naprawianie innych robotów\"\n        };\n    };\n\n    var _saySomething = saySomething(),\n        name = _saySomething.name,\n        age = _saySomething.age,\n        proffesion = _saySomething.proffesion;\n\n    console.log('czesc mam na imię ' + name + ' mam ' + age + ' lata, a moim zajęciem jest ' + proffesion);\n\n    //czemu nie tak: ???\n    //     let saySomething =() => {\n    //         let wally = {\n    //             name: \"Wally\",\n    //             age: 2,\n    //             proffesion: \"Naprawianie innych robotów\"\n    //         }\n    //     };\n    //     let {name:name, age:age, proffesion:proffesion} = saySomething();\n    //\n    //     console.log('czesc mam na imię ' + name + ' mam ' + age + ' lata, a moim zajęciem jest ' + proffesion);\n\n\n    //task3\n\n    var sayHello = function sayHello() {\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        [].concat(args).forEach(function (e) {\n            console.log('hello: ' + e);\n        });\n    };\n\n    sayHello(\"Ania\", \"Kasia\", \"Steve\", \"Bogumił\");\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });