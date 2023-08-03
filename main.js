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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n\r\n\r\n// Load Main Page HTML Onload\r\nwindow.onload = function() {\r\n    (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.loadMain)();\r\n};\n\n//# sourceURL=webpack://restuarant/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMain: () => (/* binding */ loadMain)\n/* harmony export */ });\nconst loadMain = () => {\r\n    const content = document.getElementById('content');\r\n\r\n    // Navbar Creation\r\n    const navbar = document.createElement('div');\r\n    navbar.id = 'navbar';\r\n    content.appendChild(navbar);\r\n\r\n    const navItemHome = document.createElement('h2');\r\n    navItemHome.className = 'navItem';\r\n    navItemHome.innerText = 'INICIAL';\r\n    navbar.appendChild(navItemHome);\r\n\r\n    const navItemMenu = document.createElement('h2');\r\n    navItemMenu.className = 'navItem';\r\n    navItemMenu.innerText = 'CARDÁPIO';\r\n    navbar.appendChild(navItemMenu);\r\n\r\n    const navItemContact = document.createElement('h2');\r\n    navItemContact.className = 'navItem';\r\n    navItemContact.innerText = 'CONTATO';\r\n    navbar.appendChild(navItemContact);\r\n\r\n    // Title Creation\r\n    const title = document.createElement('h1');\r\n    title.id = 'title';\r\n    title.innerText = 'FOGÃO DO RIO';\r\n    content.appendChild(title);\r\n\r\n    // About Section Creation\r\n    const aboutSection = document.createElement('div');\r\n    aboutSection.id = 'aboutSection';\r\n    content.appendChild(aboutSection);\r\n\r\n    const subTitle = document.createElement('h2');\r\n    subTitle.className = 'subTitle';\r\n    subTitle.innerText = 'O FOGÃO';\r\n    aboutSection.appendChild(subTitle);\r\n\r\n    const paragraphBlock = document.createElement('p');\r\n    paragraphBlock.className = 'paragraphBlock';\r\n    paragraphBlock.innerText = 'Localizado na cidade de Rio de Janeiro, com a praia de Ipanema na frente, experimente o sabor de um churraso rodízio irresistível. Temos a paixão de colocar na mesa pratos de alta qualidade, são selecionados da melhor carne da região.';\r\n    aboutSection.appendChild(paragraphBlock);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restuarant/./src/mainPage.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;