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
module.exports = __webpack_require__(3);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("$(() =>{\n\n\n\n//z wykładowcą\n\nclass Vehicle {\n    constructor(name) {\n        this.name = name;\n    }\n    getName () {\n        return this.name;\n    }\n\n}\n\nclass Boat extends Vehicle {\n    swim() {\n        console.log(this.getName() + ' pływa');\n    };\n    }\n\nclass Car extends Vehicle {\n    drive() {\n        console.log(this.getName()+' jeździ');\n    };\n\n}\n\nclass Plane extends Vehicle {\n    fly() {\n        console.log(this.getName()+' lata');\n    };\n}\n\nlet polonez = new Car('Polonez');\npolonez.drive();\n\nlet omega = new Boat ('Omega');\nomega.swim();\n\n// polonez.swim(); /błąd\n\n\n//task1\n\nclass Kaczka {\n    constructor (name,type) {\n        this.name = name;\n        this.type = type;\n    };\n    kwacz() {\n        console.log('kwa kwa');\n    }\n    plywaj() {\n        console.log('płynę...')\n    }\n    wyswietl() {\n        console.log('Wygląda jak ' + this.type);\n    }\n    lec() {\n        console.log('lecę');\n    }\n}\n\n\nlet kaczucha = new Kaczka ('kaczucha','zwykla');\nkaczucha.kwacz();\nkaczucha.plywaj();\nkaczucha.wyswietl();\n\n//task2\n\nclass DzikaKaczka extends Kaczka {\n    constructor (name,type){\n        super(name,type);\n        this.type= 'dzika';\n    }\n    wyswietl() {\n        console.log('Wygląda jak ' + this.type);\n    }\n}\n\nlet dzikaKaczucha = new DzikaKaczka('dzika kaczucha','dzika');\ndzikaKaczucha.kwacz();\ndzikaKaczucha.plywaj();\ndzikaKaczucha.wyswietl();\n\n//task3\n\nclass KrzyzowkaKaczka extends Kaczka {\n    constructor (name,type) {\n        super (name, type);\n        this.type = 'krzyżówka';\n    }\n    wyswietl() {\n        console.log('wygląda jak ' + this.type);\n    }\n}\n\nlet krzyzoKaczucha = new KrzyzowkaKaczka('krzyż', 'krzyżówka');\nkrzyzoKaczucha.kwacz();\nkrzyzoKaczucha.plywaj();\nkrzyzoKaczucha.wyswietl();\nkrzyzoKaczucha.lec();\n\n\n//task5\n\nclass GumowaKaczka extends Kaczka {\n    constructor (name,type) {\n        super (name,type);\n        this.type = 'gumowa';\n    }\n    lec() {\n        console.log('gumowa kaczki nie potrafią latać :(')\n    }\n}\n\nlet gumowaKaczucha = new GumowaKaczka('gum', 'gumowa');\ngumowaKaczucha.kwacz();\ngumowaKaczucha.plywaj();\ngumowaKaczucha.lec();\ngumowaKaczucha.wyswietl();\n\n\n\n\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvYXBwLmpzPzcxYjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQjs7O0FBR2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BLENBQUMiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoKCkgPT57XG5cblxuXG4vL3ogd3lrxYJhZG93Y8SFXG5cbmNsYXNzIFZlaGljbGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgZ2V0TmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG59XG5cbmNsYXNzIEJvYXQgZXh0ZW5kcyBWZWhpY2xlIHtcbiAgICBzd2ltKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldE5hbWUoKSArICcgcMWCeXdhJyk7XG4gICAgfTtcbiAgICB9XG5cbmNsYXNzIENhciBleHRlbmRzIFZlaGljbGUge1xuICAgIGRyaXZlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldE5hbWUoKSsnIGplxbpkemknKTtcbiAgICB9O1xuXG59XG5cbmNsYXNzIFBsYW5lIGV4dGVuZHMgVmVoaWNsZSB7XG4gICAgZmx5KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldE5hbWUoKSsnIGxhdGEnKTtcbiAgICB9O1xufVxuXG5sZXQgcG9sb25leiA9IG5ldyBDYXIoJ1BvbG9uZXonKTtcbnBvbG9uZXouZHJpdmUoKTtcblxubGV0IG9tZWdhID0gbmV3IEJvYXQgKCdPbWVnYScpO1xub21lZ2Euc3dpbSgpO1xuXG4vLyBwb2xvbmV6LnN3aW0oKTsgL2LFgsSFZFxuXG5cbi8vdGFzazFcblxuY2xhc3MgS2FjemthIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSx0eXBlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfTtcbiAgICBrd2FjeigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2t3YSBrd2EnKTtcbiAgICB9XG4gICAgcGx5d2FqKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncMWCeW7EmS4uLicpXG4gICAgfVxuICAgIHd5c3dpZXRsKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnV3lnbMSFZGEgamFrICcgKyB0aGlzLnR5cGUpO1xuICAgIH1cbiAgICBsZWMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdsZWPEmScpO1xuICAgIH1cbn1cblxuXG5sZXQga2FjenVjaGEgPSBuZXcgS2FjemthICgna2FjenVjaGEnLCd6d3lrbGEnKTtcbmthY3p1Y2hhLmt3YWN6KCk7XG5rYWN6dWNoYS5wbHl3YWooKTtcbmthY3p1Y2hhLnd5c3dpZXRsKCk7XG5cbi8vdGFzazJcblxuY2xhc3MgRHppa2FLYWN6a2EgZXh0ZW5kcyBLYWN6a2Ege1xuICAgIGNvbnN0cnVjdG9yIChuYW1lLHR5cGUpe1xuICAgICAgICBzdXBlcihuYW1lLHR5cGUpO1xuICAgICAgICB0aGlzLnR5cGU9ICdkemlrYSc7XG4gICAgfVxuICAgIHd5c3dpZXRsKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnV3lnbMSFZGEgamFrICcgKyB0aGlzLnR5cGUpO1xuICAgIH1cbn1cblxubGV0IGR6aWthS2FjenVjaGEgPSBuZXcgRHppa2FLYWN6a2EoJ2R6aWthIGthY3p1Y2hhJywnZHppa2EnKTtcbmR6aWthS2FjenVjaGEua3dhY3ooKTtcbmR6aWthS2FjenVjaGEucGx5d2FqKCk7XG5kemlrYUthY3p1Y2hhLnd5c3dpZXRsKCk7XG5cbi8vdGFzazNcblxuY2xhc3MgS3J6eXpvd2thS2FjemthIGV4dGVuZHMgS2FjemthIHtcbiAgICBjb25zdHJ1Y3RvciAobmFtZSx0eXBlKSB7XG4gICAgICAgIHN1cGVyIChuYW1lLCB0eXBlKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2tyennFvMOzd2thJztcbiAgICB9XG4gICAgd3lzd2lldGwoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3eWdsxIVkYSBqYWsgJyArIHRoaXMudHlwZSk7XG4gICAgfVxufVxuXG5sZXQga3J6eXpvS2FjenVjaGEgPSBuZXcgS3J6eXpvd2thS2FjemthKCdrcnp5xbwnLCAna3J6ecW8w7N3a2EnKTtcbmtyenl6b0thY3p1Y2hhLmt3YWN6KCk7XG5rcnp5em9LYWN6dWNoYS5wbHl3YWooKTtcbmtyenl6b0thY3p1Y2hhLnd5c3dpZXRsKCk7XG5rcnp5em9LYWN6dWNoYS5sZWMoKTtcblxuXG4vL3Rhc2s1XG5cbmNsYXNzIEd1bW93YUthY3prYSBleHRlbmRzIEthY3prYSB7XG4gICAgY29uc3RydWN0b3IgKG5hbWUsdHlwZSkge1xuICAgICAgICBzdXBlciAobmFtZSx0eXBlKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2d1bW93YSc7XG4gICAgfVxuICAgIGxlYygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2d1bW93YSBrYWN6a2kgbmllIHBvdHJhZmnEhSBsYXRhxIcgOignKVxuICAgIH1cbn1cblxubGV0IGd1bW93YUthY3p1Y2hhID0gbmV3IEd1bW93YUthY3prYSgnZ3VtJywgJ2d1bW93YScpO1xuZ3Vtb3dhS2FjenVjaGEua3dhY3ooKTtcbmd1bW93YUthY3p1Y2hhLnBseXdhaigpO1xuZ3Vtb3dhS2FjenVjaGEubGVjKCk7XG5ndW1vd2FLYWN6dWNoYS53eXN3aWV0bCgpO1xuXG5cblxuXG5cblxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("$(()=>{\n\n\n\nlet foods =[];\n\nclass Food {\n  constructor(name, protein, carbs, fat) {\n    this.name = name;\n    this.protein = protein;\n    this.carbs = carbs;\n    this.fat = fat;\n  }\n};\n\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvemFkYW5pZTA2LmpzP2Q1NDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoKCk9PntcblxuXG5cbmxldCBmb29kcyA9W107XG5cbmNsYXNzIEZvb2Qge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcm90ZWluLCBjYXJicywgZmF0KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByb3RlaW4gPSBwcm90ZWluO1xuICAgIHRoaXMuY2FyYnMgPSBjYXJicztcbiAgICB0aGlzLmZhdCA9IGZhdDtcbiAgfVxufTtcblxufSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9qcy96YWRhbmllMDYuanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);