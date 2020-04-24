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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// z wykładowcą\n\nvar cities = [\"Kraków\", \"Olsztyn\", \"Szczecin\", \"Ostrów Wielkopolski\"];\n\nfunction letters(el){\n    return el.length;\n}\n\nvar result = cities.map(letters);\n\nconsole.log(result);\n\n//task1\n\nfunction randomize(param1, param2, callback) {\n    if (typeof callback !== 'function') {\n        console.log('nie jest funkcją')\n    }\n    else {\n        callback (param1, param2);\n    }\n}\n\nrandomize(2,15, function (a,b) {\n    console.log(Math.floor(Math.random() * (a-b) + b));\n\n});\n\n\n//task2\n\nvar animals = [\"cat\", \"shrimp\", \"giraffe\"];\n\nanimals.forEach(function (el) {\n    console.log(el);\n});\n\n//task 3\n\nvar years = [1995, 1856, 2014, 1987];\n\n\nfunction fn(element) {\n    var now = new Date;\n    return now.getFullYear() - element;\n}\n\nconsole.log(years.map(fn));\n\n\n// task4\n\nvar arr = [2,5,96,47,53];\n\n\nfunction sum(prev, curr){\n    return prev + curr;\n}\n\nfunction multiply (prev, curr) {\n    return prev*curr\n}\n var result1 = arr.reduce(sum);\nvar result2 = arr.reduce(multiply);\n\n\n\nconsole.log(result1, result2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB6IHd5a8WCYWRvd2PEhVxuXG52YXIgY2l0aWVzID0gW1wiS3Jha8Ozd1wiLCBcIk9sc3p0eW5cIiwgXCJTemN6ZWNpblwiLCBcIk9zdHLDs3cgV2llbGtvcG9sc2tpXCJdO1xuXG5mdW5jdGlvbiBsZXR0ZXJzKGVsKXtcbiAgICByZXR1cm4gZWwubGVuZ3RoO1xufVxuXG52YXIgcmVzdWx0ID0gY2l0aWVzLm1hcChsZXR0ZXJzKTtcblxuY29uc29sZS5sb2cocmVzdWx0KTtcblxuLy90YXNrMVxuXG5mdW5jdGlvbiByYW5kb21pemUocGFyYW0xLCBwYXJhbTIsIGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmxvZygnbmllIGplc3QgZnVua2NqxIUnKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sgKHBhcmFtMSwgcGFyYW0yKTtcbiAgICB9XG59XG5cbnJhbmRvbWl6ZSgyLDE1LCBmdW5jdGlvbiAoYSxiKSB7XG4gICAgY29uc29sZS5sb2coTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGEtYikgKyBiKSk7XG5cbn0pO1xuXG5cbi8vdGFzazJcblxudmFyIGFuaW1hbHMgPSBbXCJjYXRcIiwgXCJzaHJpbXBcIiwgXCJnaXJhZmZlXCJdO1xuXG5hbmltYWxzLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgY29uc29sZS5sb2coZWwpO1xufSk7XG5cbi8vdGFzayAzXG5cbnZhciB5ZWFycyA9IFsxOTk1LCAxODU2LCAyMDE0LCAxOTg3XTtcblxuXG5mdW5jdGlvbiBmbihlbGVtZW50KSB7XG4gICAgdmFyIG5vdyA9IG5ldyBEYXRlO1xuICAgIHJldHVybiBub3cuZ2V0RnVsbFllYXIoKSAtIGVsZW1lbnQ7XG59XG5cbmNvbnNvbGUubG9nKHllYXJzLm1hcChmbikpO1xuXG5cbi8vIHRhc2s0XG5cbnZhciBhcnIgPSBbMiw1LDk2LDQ3LDUzXTtcblxuXG5mdW5jdGlvbiBzdW0ocHJldiwgY3Vycil7XG4gICAgcmV0dXJuIHByZXYgKyBjdXJyO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBseSAocHJldiwgY3Vycikge1xuICAgIHJldHVybiBwcmV2KmN1cnJcbn1cbiB2YXIgcmVzdWx0MSA9IGFyci5yZWR1Y2Uoc3VtKTtcbnZhciByZXN1bHQyID0gYXJyLnJlZHVjZShtdWx0aXBseSk7XG5cblxuXG5jb25zb2xlLmxvZyhyZXN1bHQxLCByZXN1bHQyKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);