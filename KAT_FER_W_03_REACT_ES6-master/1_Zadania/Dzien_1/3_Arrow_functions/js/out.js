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
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// task1\n\nlet write = () => console.log('hello world');\nwrite();\n\n//task2\n\nlet multiply = (num=6) => {return num * 2};\n\nconsole.log(multiply());\n\n//task3\n\nlet biggerNum = (num1, num2) => {\n  if (num1>num2) {\n      return num1;\n  }\n  else return num2;\n};\n\nconsole.log(biggerNum(87,25));\n\n\n//task4\n\nlet getSecondMaxNumber = (array) => {\n\n    array.sort((a,b)=> b-a );\n\n    return array[1];\n\n    //wersja pełna:\n//     function fn(a, b) {\n//         return a-b;\n//     }\n//\n//     arr.sort(fn);\n\n};\n\nvar arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];\nconsole.log(getSecondMaxNumber(arr1));\n\n\n//task5\n\nconsole.log((param => param)(6));\nconsole.log(((x) => { return x })(3));\n\n\n// task6\n\n\nlet foo = (j=4) => {\n    let counter = 0;\n    let intervalID= setInterval(() =>{\n        if (counter <=j) {\n            console.log('hello' + counter++);\n        }\n        else {\n            clearInterval(intervalID);\n        }\n    }, 2000);\n};\n\nfoo(3);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSwyQkFBMkI7O0FBRTNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUJBQXFCLFdBQVc7OztBQUdoQzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0YXNrMVxuXG5sZXQgd3JpdGUgPSAoKSA9PiBjb25zb2xlLmxvZygnaGVsbG8gd29ybGQnKTtcbndyaXRlKCk7XG5cbi8vdGFzazJcblxubGV0IG11bHRpcGx5ID0gKG51bT02KSA9PiB7cmV0dXJuIG51bSAqIDJ9O1xuXG5jb25zb2xlLmxvZyhtdWx0aXBseSgpKTtcblxuLy90YXNrM1xuXG5sZXQgYmlnZ2VyTnVtID0gKG51bTEsIG51bTIpID0+IHtcbiAgaWYgKG51bTE+bnVtMikge1xuICAgICAgcmV0dXJuIG51bTE7XG4gIH1cbiAgZWxzZSByZXR1cm4gbnVtMjtcbn07XG5cbmNvbnNvbGUubG9nKGJpZ2dlck51bSg4NywyNSkpO1xuXG5cbi8vdGFzazRcblxubGV0IGdldFNlY29uZE1heE51bWJlciA9IChhcnJheSkgPT4ge1xuXG4gICAgYXJyYXkuc29ydCgoYSxiKT0+IGItYSApO1xuXG4gICAgcmV0dXJuIGFycmF5WzFdO1xuXG4gICAgLy93ZXJzamEgcGXFgm5hOlxuLy8gICAgIGZ1bmN0aW9uIGZuKGEsIGIpIHtcbi8vICAgICAgICAgcmV0dXJuIGEtYjtcbi8vICAgICB9XG4vL1xuLy8gICAgIGFyci5zb3J0KGZuKTtcblxufTtcblxudmFyIGFycjEgPSBbMiwgMywgMSwgNiwgMTAwLCA0OSwgNSwgNywgOCwgOSBdO1xuY29uc29sZS5sb2coZ2V0U2Vjb25kTWF4TnVtYmVyKGFycjEpKTtcblxuXG4vL3Rhc2s1XG5cbmNvbnNvbGUubG9nKChwYXJhbSA9PiBwYXJhbSkoNikpO1xuY29uc29sZS5sb2coKCh4KSA9PiB7IHJldHVybiB4IH0pKDMpKTtcblxuXG4vLyB0YXNrNlxuXG5cbmxldCBmb28gPSAoaj00KSA9PiB7XG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGxldCBpbnRlcnZhbElEPSBzZXRJbnRlcnZhbCgoKSA9PntcbiAgICAgICAgaWYgKGNvdW50ZXIgPD1qKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGVsbG8nICsgY291bnRlcisrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJRCk7XG4gICAgICAgIH1cbiAgICB9LCAyMDAwKTtcbn07XG5cbmZvbygzKTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("var Students = function(students) {\n\tthis.names = students;\n  \tthis.numberOfLetters = [];\n};\n\nStudents.prototype.countLetters = function(){\n\tthis.names.map((name) => {\n\t\tthis.numberOfLetters.push(name.length);\n\t\t})\n};\n\n\nvar students = new Students([\"Ania\", \"Kamil\", \"Mariusz\"]);\nstudents.countLetters();\nconsole.log('task00 ' + students.numberOfLetters);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvemFkYW5pZTAwLmpzPzU3MmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTdHVkZW50cyA9IGZ1bmN0aW9uKHN0dWRlbnRzKSB7XG5cdHRoaXMubmFtZXMgPSBzdHVkZW50cztcbiAgXHR0aGlzLm51bWJlck9mTGV0dGVycyA9IFtdO1xufTtcblxuU3R1ZGVudHMucHJvdG90eXBlLmNvdW50TGV0dGVycyA9IGZ1bmN0aW9uKCl7XG5cdHRoaXMubmFtZXMubWFwKChuYW1lKSA9PiB7XG5cdFx0dGhpcy5udW1iZXJPZkxldHRlcnMucHVzaChuYW1lLmxlbmd0aCk7XG5cdFx0fSlcbn07XG5cblxudmFyIHN0dWRlbnRzID0gbmV3IFN0dWRlbnRzKFtcIkFuaWFcIiwgXCJLYW1pbFwiLCBcIk1hcml1c3pcIl0pO1xuc3R1ZGVudHMuY291bnRMZXR0ZXJzKCk7XG5jb25zb2xlLmxvZygndGFzazAwICcgKyBzdHVkZW50cy5udW1iZXJPZkxldHRlcnMpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvemFkYW5pZTAwLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("$(function(){\n\n\n\n\nconst App = function() {\n  this.websites = ['onet', 'wp', 'facebook'];\n  this.links = [];\n};\n\n\nApp.prototype.generateLinks = function() {\n  this.websites.map((el)=>{\n    this.links.push('https://' + el + '.com');\n  })\n\n};\n\n\nlet app = new App();\napp.generateLinks();\nconsole.log(app.links);\n\n\n\n$('.menu').find('a').first().attr('href',app.links[0]);\n$('.menu').find('a').eq(1).attr('href', app.links[1]);\n$('.menu').find('a').last().attr('href', app.links[2]);\n\n\n\n\n\n// var as = $('.menu').find('a');\n//\n// as.each(function (i){\n//    // console.log(as[i].setAttribute('href', app.links[i]));\n//    //  console.log($(this).attr('href', app.links[i]));\n// });\n\n\n});\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvemFkYW5pZTA3LmpzP2Y0NjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKLENBQUMiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcblxuXG5cblxuY29uc3QgQXBwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMud2Vic2l0ZXMgPSBbJ29uZXQnLCAnd3AnLCAnZmFjZWJvb2snXTtcbiAgdGhpcy5saW5rcyA9IFtdO1xufTtcblxuXG5BcHAucHJvdG90eXBlLmdlbmVyYXRlTGlua3MgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy53ZWJzaXRlcy5tYXAoKGVsKT0+e1xuICAgIHRoaXMubGlua3MucHVzaCgnaHR0cHM6Ly8nICsgZWwgKyAnLmNvbScpO1xuICB9KVxuXG59O1xuXG5cbmxldCBhcHAgPSBuZXcgQXBwKCk7XG5hcHAuZ2VuZXJhdGVMaW5rcygpO1xuY29uc29sZS5sb2coYXBwLmxpbmtzKTtcblxuXG5cbiQoJy5tZW51JykuZmluZCgnYScpLmZpcnN0KCkuYXR0cignaHJlZicsYXBwLmxpbmtzWzBdKTtcbiQoJy5tZW51JykuZmluZCgnYScpLmVxKDEpLmF0dHIoJ2hyZWYnLCBhcHAubGlua3NbMV0pO1xuJCgnLm1lbnUnKS5maW5kKCdhJykubGFzdCgpLmF0dHIoJ2hyZWYnLCBhcHAubGlua3NbMl0pO1xuXG5cblxuXG5cbi8vIHZhciBhcyA9ICQoJy5tZW51JykuZmluZCgnYScpO1xuLy9cbi8vIGFzLmVhY2goZnVuY3Rpb24gKGkpe1xuLy8gICAgLy8gY29uc29sZS5sb2coYXNbaV0uc2V0QXR0cmlidXRlKCdocmVmJywgYXBwLmxpbmtzW2ldKSk7XG4vLyAgICAvLyAgY29uc29sZS5sb2coJCh0aGlzKS5hdHRyKCdocmVmJywgYXBwLmxpbmtzW2ldKSk7XG4vLyB9KTtcblxuXG59KTtcblxuXG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL3phZGFuaWUwNy5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("// const dog = {\n//     type: \"Mammal\",\n//     name: \"\",\n//     setName: (newName) => {\n//         this.name = newName;\n//     }\n// };\n//\n// dog.setName(\"Reksio\");\n// console.log(dog.name);\n//\n// poprawione: w obiekcie nie może być arrow function\n\n//     const dog = {\n//         type: \"Mammal\",\n//         name: \"\",\n//         setName: function(newName) {\n//             this.name = newName;\n//         }\n//     };\n//\n// dog.setName(\"Reksio\");\n// console.log(dog.name);\n\n//albo: nie używać this\n\nconst dog = {\n    type: \"Mammal\",\n    name: \"\",\n    setName: (newName) => {\n        dog.name = newName;\n    }\n};\n\ndog.setName(\"Reksio\");\nconsole.log(dog.name);\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvemFkYW5pZTA4LmpzPzg3NWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGRvZyA9IHtcbi8vICAgICB0eXBlOiBcIk1hbW1hbFwiLFxuLy8gICAgIG5hbWU6IFwiXCIsXG4vLyAgICAgc2V0TmFtZTogKG5ld05hbWUpID0+IHtcbi8vICAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbi8vICAgICB9XG4vLyB9O1xuLy9cbi8vIGRvZy5zZXROYW1lKFwiUmVrc2lvXCIpO1xuLy8gY29uc29sZS5sb2coZG9nLm5hbWUpO1xuLy9cbi8vIHBvcHJhd2lvbmU6IHcgb2JpZWtjaWUgbmllIG1vxbxlIGJ5xIcgYXJyb3cgZnVuY3Rpb25cblxuLy8gICAgIGNvbnN0IGRvZyA9IHtcbi8vICAgICAgICAgdHlwZTogXCJNYW1tYWxcIixcbi8vICAgICAgICAgbmFtZTogXCJcIixcbi8vICAgICAgICAgc2V0TmFtZTogZnVuY3Rpb24obmV3TmFtZSkge1xuLy8gICAgICAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbi8vICAgICAgICAgfVxuLy8gICAgIH07XG4vL1xuLy8gZG9nLnNldE5hbWUoXCJSZWtzaW9cIik7XG4vLyBjb25zb2xlLmxvZyhkb2cubmFtZSk7XG5cbi8vYWxibzogbmllIHXFvHl3YcSHIHRoaXNcblxuY29uc3QgZG9nID0ge1xuICAgIHR5cGU6IFwiTWFtbWFsXCIsXG4gICAgbmFtZTogXCJcIixcbiAgICBzZXROYW1lOiAobmV3TmFtZSkgPT4ge1xuICAgICAgICBkb2cubmFtZSA9IG5ld05hbWU7XG4gICAgfVxufTtcblxuZG9nLnNldE5hbWUoXCJSZWtzaW9cIik7XG5jb25zb2xlLmxvZyhkb2cubmFtZSk7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvemFkYW5pZTA4LmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

eval("$(function () {\n\n    var span = $('div').find('span');\n    var ul = $('div').find('ul');\n\n    ul.hide();\n\n    // span.on('mouseover', function () {            pełna wersja\n    //     $(this).next().css('display', 'block');\n    // });\n\n    // span.on('mouseover',(e) => {\n    //     e.target.nextElementSibling.style.display = 'block';\n    // });\n\n    //albo\n\n    Array.from(span).forEach((span) => {\n        span.addEventListener(\"mouseover\", (e) => {\n            e.target.nextElementSibling.style.display = \"block\";\n        });\n    });\n\n\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvemFkYW5pZTA5LmpzPzJkZDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSx5Q0FBeUM7QUFDekM7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQSxRQUFROztBQUVSOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLOzs7QUFHTCxDQUFDIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBzcGFuID0gJCgnZGl2JykuZmluZCgnc3BhbicpO1xuICAgIHZhciB1bCA9ICQoJ2RpdicpLmZpbmQoJ3VsJyk7XG5cbiAgICB1bC5oaWRlKCk7XG5cbiAgICAvLyBzcGFuLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7ICAgICAgICAgICAgcGXFgm5hIHdlcnNqYVxuICAgIC8vICAgICAkKHRoaXMpLm5leHQoKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcbiAgICAvLyB9KTtcblxuICAgIC8vIHNwYW4ub24oJ21vdXNlb3ZlcicsKGUpID0+IHtcbiAgICAvLyAgICAgZS50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIC8vIH0pO1xuXG4gICAgLy9hbGJvXG5cbiAgICBBcnJheS5mcm9tKHNwYW4pLmZvckVhY2goKHNwYW4pID0+IHtcbiAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cblxufSk7XG5cblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvemFkYW5pZTA5LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ })
/******/ ]);