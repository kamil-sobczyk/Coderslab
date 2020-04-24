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

eval("\n\n    //z wykładowcą\n\n    let namesA = [\"Zosia\", \"Marcin\", \"Kamil\"];\n    // let namesB = [\"Ala\", \"Puszek\", \"Zosia\", \"Marcin\", \"Kamil\",\"Jan\", \"Karol\" ]; doeclowo\n\n    let namesB = ['Ala', 'Puszek', ...namesA, \"jan\", \"Karol\"];\n\n    console.log(namesB);\n\n\n\n\n    // function getAverage(...args) {\n    //     let suma = [...args].reduce(function (a, b) {\n    //         return a + b;\n    //     });\n    //     let iloscElementow = [...args].length;\n    //\n    //     return suma / iloscElementow;\n    // }\n\n\n\n    let getAverage = (...args) => {\n        return [...args].reduce( (a,b) => {\n            return (a+b) / [...args].length;\n        })\n\n    };\n\n    console.log(getAverage(2,4,5,6,7,79));\n\n\n    //task1\n\n    let name = 'magda';\n\n    let arrName = [...name];\n\n    console.log(arrName);\n\n\n//task2\n\n    let fruits = ['kiwi', 'banan', 'mango'];\n    let vege = ['carrot', 'onion'];\n\n    let mix = [...fruits, ...vege];\n\n    console.log(mix);\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7QUFFQTtBQUNBLGtGQUFrRjs7QUFFbEY7O0FBRUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgLy96IHd5a8WCYWRvd2PEhVxuXG4gICAgbGV0IG5hbWVzQSA9IFtcIlpvc2lhXCIsIFwiTWFyY2luXCIsIFwiS2FtaWxcIl07XG4gICAgLy8gbGV0IG5hbWVzQiA9IFtcIkFsYVwiLCBcIlB1c3pla1wiLCBcIlpvc2lhXCIsIFwiTWFyY2luXCIsIFwiS2FtaWxcIixcIkphblwiLCBcIkthcm9sXCIgXTsgZG9lY2xvd29cblxuICAgIGxldCBuYW1lc0IgPSBbJ0FsYScsICdQdXN6ZWsnLCAuLi5uYW1lc0EsIFwiamFuXCIsIFwiS2Fyb2xcIl07XG5cbiAgICBjb25zb2xlLmxvZyhuYW1lc0IpO1xuXG5cblxuXG4gICAgLy8gZnVuY3Rpb24gZ2V0QXZlcmFnZSguLi5hcmdzKSB7XG4gICAgLy8gICAgIGxldCBzdW1hID0gWy4uLmFyZ3NdLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIC8vICAgICAgICAgcmV0dXJuIGEgKyBiO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgbGV0IGlsb3NjRWxlbWVudG93ID0gWy4uLmFyZ3NdLmxlbmd0aDtcbiAgICAvL1xuICAgIC8vICAgICByZXR1cm4gc3VtYSAvIGlsb3NjRWxlbWVudG93O1xuICAgIC8vIH1cblxuXG5cbiAgICBsZXQgZ2V0QXZlcmFnZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4uYXJnc10ucmVkdWNlKCAoYSxiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKGErYikgLyBbLi4uYXJnc10ubGVuZ3RoO1xuICAgICAgICB9KVxuXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGdldEF2ZXJhZ2UoMiw0LDUsNiw3LDc5KSk7XG5cblxuICAgIC8vdGFzazFcblxuICAgIGxldCBuYW1lID0gJ21hZ2RhJztcblxuICAgIGxldCBhcnJOYW1lID0gWy4uLm5hbWVdO1xuXG4gICAgY29uc29sZS5sb2coYXJyTmFtZSk7XG5cblxuLy90YXNrMlxuXG4gICAgbGV0IGZydWl0cyA9IFsna2l3aScsICdiYW5hbicsICdtYW5nbyddO1xuICAgIGxldCB2ZWdlID0gWydjYXJyb3QnLCAnb25pb24nXTtcblxuICAgIGxldCBtaXggPSBbLi4uZnJ1aXRzLCAuLi52ZWdlXTtcblxuICAgIGNvbnNvbGUubG9nKG1peCk7XG5cblxuXG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("let people = [\n    {\n        person: \"Kim Yoo Suk\",\n        profession: \"tyczkarz\"\n    },\n    {\n        person: \"Sue Yoo\",\n        profession: \"prawnik\"\n    },\n    {\n        person: \"Dr. Alden Cockburn\",\n        profession: \"urolog\"\n    },\n    {\n        person: \"Rusty Kuntz\",\n        profession: \"trener\"\n    }\n];\n\nlet setFunnyName = (...args) => {\n    people.push(...args);\n};\n\nsetFunnyName({person:\"ktos\", profession:'lekarz'}, {person:'ktokolwiek', profession:'nefrolog'});\n\nconsole.log(people);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvemFkYW5pZTAzLmpzP2UwZjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG1DQUFtQyxHQUFHLDJDQUEyQzs7QUFFL0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBwZW9wbGUgPSBbXG4gICAge1xuICAgICAgICBwZXJzb246IFwiS2ltIFlvbyBTdWtcIixcbiAgICAgICAgcHJvZmVzc2lvbjogXCJ0eWN6a2FyelwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBlcnNvbjogXCJTdWUgWW9vXCIsXG4gICAgICAgIHByb2Zlc3Npb246IFwicHJhd25pa1wiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBlcnNvbjogXCJEci4gQWxkZW4gQ29ja2J1cm5cIixcbiAgICAgICAgcHJvZmVzc2lvbjogXCJ1cm9sb2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBwZXJzb246IFwiUnVzdHkgS3VudHpcIixcbiAgICAgICAgcHJvZmVzc2lvbjogXCJ0cmVuZXJcIlxuICAgIH1cbl07XG5cbmxldCBzZXRGdW5ueU5hbWUgPSAoLi4uYXJncykgPT4ge1xuICAgIHBlb3BsZS5wdXNoKC4uLmFyZ3MpO1xufTtcblxuc2V0RnVubnlOYW1lKHtwZXJzb246XCJrdG9zXCIsIHByb2Zlc3Npb246J2xla2Fyeid9LCB7cGVyc29uOidrdG9rb2x3aWVrJywgcHJvZmVzc2lvbjonbmVmcm9sb2cnfSk7XG5cbmNvbnNvbGUubG9nKHBlb3BsZSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy96YWRhbmllMDMuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);