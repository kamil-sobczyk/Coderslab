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

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("$(() => {\n\n//z wykładowcą\n\n    const person = {\n        name: \"Vlad\",\n        lastName: \"Drăculea\",\n        yearOfBirth: 1431,\n        proffesion: \"Lord of Wallachia\"\n    };\n\n// function whoAreYou (obj){\n//     console.log(`My name is ${obj.name} ${obj.lastName}.\n//      I am ${2018 - obj.yearOfBirth} years old.\n//      My profession i ${obj.profession}`);\n// }\n\n    let whoAreYou = (obj) => {\n        console.log(`My name is ${obj.name} ${obj.lastName}.\n     I am ${2018 - obj.yearOfBirth} years old.\n     My profession i ${obj.profession}`);\n    };\n\n\n    whoAreYou(person);\n\n\n//task1\n\nlet num1 = 15;\nlet num2 = 23;\nlet sum = num1 + num2;\n\nconsole.log(`suma dwóch liczb ${num1} i ${num2} to ${sum}`)\n\n\n//task2\n\nvar name = \"Magda\";\n\nconsole.log(`moje imię i nazwisko to ${name} Strojwas`)\n\n\n//task3\n\n    let write = ()=> {\n    let tekst= `\"Myślę, że jest wiele piękna\nw posiadaniu problemów.\nTo jeden ze sposobów w jaki się uczymy\"\nHerbie Hancock`;\n        return tekst;\n    };\n\n    console.log(write());\n\n$('.cite').text(write());\n\n\n\n//task4\n\nlet arr1 = [1,2,5,9, 'string'] ;\n\n    let f = (arr) => {\n        console.log(...arr);\n\n    };\n\n    f(`${arr1}`);\n\n//task5\n\n    const button = {\n        value: \"Send message\",\n        idName: \"sendMsg\",\n        width: \"100px\",\n        padding: \"20px\",\n    };\n\n\n\n    let cytat =`to jest button\n    jego szerokość to ${button.width}.\n    Napis, który na nim widnieje to \"${button.idName}\"`;\n\n    console.log('cytat');\n\n\n    var newBtn = $('<button>');\n    newBtn.css('width', `${button.width}`);\n    newBtn.css('padding', `${button.padding}`);\n    newBtn.attr('idName', `${button.idName}`);\n    newBtn.val(`${button.value}`);\n    newBtn.text(`${button.value}`);\n\n\n$('.cite').append(newBtn);\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLFNBQVMsR0FBRyxhQUFhO0FBQzFELGVBQWUsdUJBQXVCO0FBQ3RDLDBCQUEwQixlQUFlO0FBQ3pDOztBQUVBO0FBQ0Esa0NBQWtDLFNBQVMsR0FBRyxhQUFhO0FBQzNELFlBQVksdUJBQXVCO0FBQ25DLHVCQUF1QixlQUFlO0FBQ3RDOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdDQUFnQyxLQUFLLEtBQUssS0FBSyxNQUFNLElBQUk7OztBQUd6RDs7QUFFQTs7QUFFQSx1Q0FBdUMsS0FBSzs7O0FBRzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxTQUFTLEtBQUs7O0FBRWQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQyx1Q0FBdUMsY0FBYzs7QUFFckQ7OztBQUdBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsNkJBQTZCLGVBQWU7QUFDNUMsNkJBQTZCLGNBQWM7QUFDM0Msa0JBQWtCLGFBQWE7QUFDL0IsbUJBQW1CLGFBQWE7OztBQUdoQzs7O0FBR0EsQ0FBQyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJCgoKSA9PiB7XG5cbi8veiB3eWvFgmFkb3djxIVcblxuICAgIGNvbnN0IHBlcnNvbiA9IHtcbiAgICAgICAgbmFtZTogXCJWbGFkXCIsXG4gICAgICAgIGxhc3ROYW1lOiBcIkRyxINjdWxlYVwiLFxuICAgICAgICB5ZWFyT2ZCaXJ0aDogMTQzMSxcbiAgICAgICAgcHJvZmZlc2lvbjogXCJMb3JkIG9mIFdhbGxhY2hpYVwiXG4gICAgfTtcblxuLy8gZnVuY3Rpb24gd2hvQXJlWW91IChvYmope1xuLy8gICAgIGNvbnNvbGUubG9nKGBNeSBuYW1lIGlzICR7b2JqLm5hbWV9ICR7b2JqLmxhc3ROYW1lfS5cbi8vICAgICAgSSBhbSAkezIwMTggLSBvYmoueWVhck9mQmlydGh9IHllYXJzIG9sZC5cbi8vICAgICAgTXkgcHJvZmVzc2lvbiBpICR7b2JqLnByb2Zlc3Npb259YCk7XG4vLyB9XG5cbiAgICBsZXQgd2hvQXJlWW91ID0gKG9iaikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgTXkgbmFtZSBpcyAke29iai5uYW1lfSAke29iai5sYXN0TmFtZX0uXG4gICAgIEkgYW0gJHsyMDE4IC0gb2JqLnllYXJPZkJpcnRofSB5ZWFycyBvbGQuXG4gICAgIE15IHByb2Zlc3Npb24gaSAke29iai5wcm9mZXNzaW9ufWApO1xuICAgIH07XG5cblxuICAgIHdob0FyZVlvdShwZXJzb24pO1xuXG5cbi8vdGFzazFcblxubGV0IG51bTEgPSAxNTtcbmxldCBudW0yID0gMjM7XG5sZXQgc3VtID0gbnVtMSArIG51bTI7XG5cbmNvbnNvbGUubG9nKGBzdW1hIGR3w7NjaCBsaWN6YiAke251bTF9IGkgJHtudW0yfSB0byAke3N1bX1gKVxuXG5cbi8vdGFzazJcblxudmFyIG5hbWUgPSBcIk1hZ2RhXCI7XG5cbmNvbnNvbGUubG9nKGBtb2plIGltacSZIGkgbmF6d2lza28gdG8gJHtuYW1lfSBTdHJvandhc2ApXG5cblxuLy90YXNrM1xuXG4gICAgbGV0IHdyaXRlID0gKCk9PiB7XG4gICAgbGV0IHRla3N0PSBgXCJNecWbbMSZLCDFvGUgamVzdCB3aWVsZSBwacSZa25hXG53IHBvc2lhZGFuaXUgcHJvYmxlbcOzdy5cblRvIGplZGVuIHplIHNwb3NvYsOzdyB3IGpha2kgc2nEmSB1Y3p5bXlcIlxuSGVyYmllIEhhbmNvY2tgO1xuICAgICAgICByZXR1cm4gdGVrc3Q7XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKHdyaXRlKCkpO1xuXG4kKCcuY2l0ZScpLnRleHQod3JpdGUoKSk7XG5cblxuXG4vL3Rhc2s0XG5cbmxldCBhcnIxID0gWzEsMiw1LDksICdzdHJpbmcnXSA7XG5cbiAgICBsZXQgZiA9IChhcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJyKTtcblxuICAgIH07XG5cbiAgICBmKGAke2FycjF9YCk7XG5cbi8vdGFzazVcblxuICAgIGNvbnN0IGJ1dHRvbiA9IHtcbiAgICAgICAgdmFsdWU6IFwiU2VuZCBtZXNzYWdlXCIsXG4gICAgICAgIGlkTmFtZTogXCJzZW5kTXNnXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHB4XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxuICAgIH07XG5cblxuXG4gICAgbGV0IGN5dGF0ID1gdG8gamVzdCBidXR0b25cbiAgICBqZWdvIHN6ZXJva2/Fm8SHIHRvICR7YnV0dG9uLndpZHRofS5cbiAgICBOYXBpcywga3TDs3J5IG5hIG5pbSB3aWRuaWVqZSB0byBcIiR7YnV0dG9uLmlkTmFtZX1cImA7XG5cbiAgICBjb25zb2xlLmxvZygnY3l0YXQnKTtcblxuXG4gICAgdmFyIG5ld0J0biA9ICQoJzxidXR0b24+Jyk7XG4gICAgbmV3QnRuLmNzcygnd2lkdGgnLCBgJHtidXR0b24ud2lkdGh9YCk7XG4gICAgbmV3QnRuLmNzcygncGFkZGluZycsIGAke2J1dHRvbi5wYWRkaW5nfWApO1xuICAgIG5ld0J0bi5hdHRyKCdpZE5hbWUnLCBgJHtidXR0b24uaWROYW1lfWApO1xuICAgIG5ld0J0bi52YWwoYCR7YnV0dG9uLnZhbHVlfWApO1xuICAgIG5ld0J0bi50ZXh0KGAke2J1dHRvbi52YWx1ZX1gKTtcblxuXG4kKCcuY2l0ZScpLmFwcGVuZChuZXdCdG4pO1xuXG5cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);