/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/01_clase.js":
/*!****************************!*\
  !*** ./src/js/01_clase.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Product\": () => (/* binding */ Product)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Product = /*#__PURE__*/_createClass(function Product(id, name, displayName, sku, price, description) {\n  _classCallCheck(this, Product);\n  _defineProperty(this, \"id\", 0);\n  _defineProperty(this, \"name\", \"\");\n  _defineProperty(this, \"displayName\", \"\");\n  _defineProperty(this, \"sku\", 0);\n  _defineProperty(this, \"price\", 0);\n  _defineProperty(this, \"description\", \"\");\n  this.id = id;\n  this.name = name;\n  this.displayName = displayName;\n  this.sku = sku;\n  this.price = price;\n  this.description = description;\n});\n\n\n//# sourceURL=webpack://webpack2/./src/js/01_clase.js?");

/***/ }),

/***/ "./src/js/02_createProduct.js":
/*!************************************!*\
  !*** ./src/js/02_createProduct.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProduct\": () => (/* binding */ createProduct)\n/* harmony export */ });\n/* harmony import */ var _01_clase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01_clase.js */ \"./src/js/01_clase.js\");\n/* harmony import */ var _03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./03_randomGeneric.js */ \"./src/js/03_randomGeneric.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n\n\n\nfunction createProduct(productCount) {\n  for (var i = 0; i < productCount; i++) {\n    var product = new _01_clase_js__WEBPACK_IMPORTED_MODULE_0__.Product((0,_03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__.randomGeneric)(\"number\", {\n      minRange: 8,\n      maxRange: 8\n    }), \"product\" + i, \"DisplayName\" + i, (0,_03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__.randomGeneric)(\"number\", {\n      minRange: 8,\n      maxRange: 8\n    }), (0,_03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__.randomGeneric)(\"number\", {\n      minRange: 8,\n      maxRange: 8\n    }), (0,_03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__.randomGeneric)(\"string\", {\n      minRange: 8,\n      maxRange: 8\n    }));\n    _main_js__WEBPACK_IMPORTED_MODULE_2__.personList.push(product);\n    console.log(\"array\", _main_js__WEBPACK_IMPORTED_MODULE_2__.personList);\n  }\n}\n\n\n//# sourceURL=webpack://webpack2/./src/js/02_createProduct.js?");

/***/ }),

/***/ "./src/js/03_randomGeneric.js":
/*!************************************!*\
  !*** ./src/js/03_randomGeneric.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomGeneric\": () => (/* binding */ randomGeneric)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction randomGeneric(type, _ref) {\n  var minRange = _ref.minRange,\n    maxRange = _ref.maxRange;\n  var randomResult;\n  switch (type) {\n    case \"number\":\n      randomResult = Math.round(Math.random() * 100000000);\n      break;\n    case \"string\":\n      randomResult = _toConsumableArray(new Array(maxRange)).reduce(function (acc, item, i) {\n        acc += i;\n        return acc;\n      }, \"Producto\");\n    default:\n      break;\n  }\n  return randomResult;\n}\n\n\n//# sourceURL=webpack://webpack2/./src/js/03_randomGeneric.js?");

/***/ }),

/***/ "./src/js/04_getData.js":
/*!******************************!*\
  !*** ./src/js/04_getData.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _01_clase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./01_clase.js */ \"./src/js/01_clase.js\");\n/* harmony import */ var _03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./03_randomGeneric.js */ \"./src/js/03_randomGeneric.js\");\n/* harmony import */ var _05_printStock_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./05_printStock.js */ \"./src/js/05_printStock.js\");\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n\n\n\n\nfunction getData() {\n  var nameInput = document.querySelector(\"#name\").value;\n  var descriptionInput = document.querySelector(\"#description\").value;\n  var product = new _01_clase_js__WEBPACK_IMPORTED_MODULE_0__.Product((0,_03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__.randomGeneric)(\"number\", {\n    minRange: 8,\n    maxRange: 8\n  }), nameInput, nameInput, (0,_03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__.randomGeneric)(\"number\", {\n    minRange: 8,\n    maxRange: 8\n  }), (0,_03_randomGeneric_js__WEBPACK_IMPORTED_MODULE_1__.randomGeneric)(\"number\", {\n    minRange: 8,\n    maxRange: 8\n  }), descriptionInput);\n  _main_js__WEBPACK_IMPORTED_MODULE_3__.personList.push(product);\n  console.log(\"array\", _main_js__WEBPACK_IMPORTED_MODULE_3__.personList);\n  (0,_05_printStock_js__WEBPACK_IMPORTED_MODULE_2__.printStock)();\n}\n\n\n//# sourceURL=webpack://webpack2/./src/js/04_getData.js?");

/***/ }),

/***/ "./src/js/05_printStock.js":
/*!*********************************!*\
  !*** ./src/js/05_printStock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printStock\": () => (/* binding */ printStock)\n/* harmony export */ });\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/js/main.js\");\n\nfunction printStock() {\n  /* const [{id,name,displayName,sku,price,description}] = personList\r\n  console.log(\"p\",personList); */\n  _main_js__WEBPACK_IMPORTED_MODULE_0__.personList.forEach(function (data) {\n    var container = document.querySelector(\".container\");\n    console.log(container);\n    var template = document.querySelector(\".templateStuffs\").content;\n    var fragment = document.createDocumentFragment();\n    template.querySelector(\".name\").textContent = \"\".concat(data.name);\n    template.querySelector(\".id\").textContent = \"\".concat(data.id);\n    template.querySelector(\".sku\").textContent = \"\".concat(data.sku);\n    template.querySelector(\".price\").textContent = \"\".concat(data.price);\n    template.querySelector(\".description\").textContent = \"\".concat(data.description);\n    var clone = template.cloneNode(true);\n    fragment.appendChild(clone);\n    container.appendChild(fragment);\n  });\n}\n\n\n//# sourceURL=webpack://webpack2/./src/js/05_printStock.js?");

/***/ }),

/***/ "./src/js/06_setListeners.js":
/*!***********************************!*\
  !*** ./src/js/06_setListeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setListeners\": () => (/* binding */ setListeners)\n/* harmony export */ });\n/* harmony import */ var _04_getData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./04_getData.js */ \"./src/js/04_getData.js\");\n\nfunction setListeners() {\n  var form = document.querySelector(\".form\");\n  form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    (0,_04_getData_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\n  });\n}\n\n\n//# sourceURL=webpack://webpack2/./src/js/06_setListeners.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"personList\": () => (/* binding */ personList)\n/* harmony export */ });\n/* harmony import */ var _02_createProduct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./02_createProduct.js */ \"./src/js/02_createProduct.js\");\n/* harmony import */ var _06_setListeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./06_setListeners.js */ \"./src/js/06_setListeners.js\");\nvar personList = [];\n\n\n(function (_ref) {\n  var productCount = _ref.productCount;\n  //listeners\n  (0,_02_createProduct_js__WEBPACK_IMPORTED_MODULE_0__.createProduct)(productCount);\n  (0,_06_setListeners_js__WEBPACK_IMPORTED_MODULE_1__.setListeners)();\n})({\n  productCount: 5,\n  random: {\n    max: 500,\n    min: 100\n  }\n});\n\n//# sourceURL=webpack://webpack2/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;