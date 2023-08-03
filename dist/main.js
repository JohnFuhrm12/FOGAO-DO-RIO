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

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nconst loadContact = () => {\r\n    const content = document.getElementById('content');\r\n\r\n    // Navbar Creation\r\n    const navbar = document.createElement('div');\r\n    navbar.id = 'navbar';\r\n    content.appendChild(navbar);\r\n\r\n    const navItemHome = document.createElement('h2');\r\n    navItemHome.id = 'home';\r\n    navItemHome.className = 'navItem';\r\n    navItemHome.innerText = 'INICIAL';\r\n    navbar.appendChild(navItemHome);\r\n\r\n    const navItemMenu = document.createElement('h2');\r\n    navItemMenu.id = 'menu';\r\n    navItemMenu.className = 'navItem';\r\n    navItemMenu.innerText = 'CARDÁPIO';\r\n    navbar.appendChild(navItemMenu);\r\n\r\n    const navItemContact = document.createElement('h2');\r\n    navItemContact.id = 'contact';\r\n    navItemContact.className = 'navItem';\r\n    navItemContact.innerText = 'CONTATO';\r\n    navbar.appendChild(navItemContact);\r\n\r\n    // Title Creation\r\n    const title = document.createElement('h1');\r\n    title.id = 'title';\r\n    title.innerText = 'CONTATO';\r\n    content.appendChild(title);\r\n\r\n    // Contact Section Creation\r\n    const contactSection = document.createElement('div');\r\n    contactSection.id = 'contactSection';\r\n    content.appendChild(contactSection);\r\n\r\n    const subTitle = document.createElement('h2');\r\n    subTitle.className = 'subTitle';\r\n    subTitle.innerText = 'CONTATE-NOS';\r\n    contactSection.appendChild(subTitle);\r\n\r\n    const paragraphBlockCell = document.createElement('p');\r\n    paragraphBlockCell.className = 'paragraphBlock';\r\n    paragraphBlockCell.innerText = 'Telefone: +55 (98)55769196';\r\n    contactSection.appendChild(paragraphBlockCell);\r\n\r\n    const paragraphBlockEmail = document.createElement('p');\r\n    paragraphBlockEmail.className = 'paragraphBlock';\r\n    paragraphBlockEmail.innerText = 'Email: reservas@fogaodorio.com.br';\r\n    contactSection.appendChild(paragraphBlockEmail);\r\n\r\n    // Contact Form\r\n    const contactFormBlock = document.createElement('div');\r\n    contactFormBlock.id = 'contactFormBlock';\r\n    contactSection.appendChild(contactFormBlock);\r\n\r\n    const contactForm = document.createElement('form');\r\n    contactForm.id = 'contactForm';\r\n    contactFormBlock.appendChild(contactForm);\r\n\r\n    const labelName = document.createElement('label');\r\n    labelName.className = 'label';\r\n    labelName.for = 'name';\r\n    labelName.innerText = 'NOME:';\r\n    contactForm.appendChild(labelName);\r\n\r\n    const inputName = document.createElement('input');\r\n    inputName.className = 'input';\r\n    inputName.type = 'text';\r\n    inputName.name = 'name';\r\n    inputName.placeholder = 'Nome';\r\n    contactForm.appendChild(inputName);\r\n\r\n    const labelEmail = document.createElement('label');\r\n    labelEmail.className = 'label';\r\n    labelEmail.for = 'email';\r\n    labelEmail.innerText = 'EMAIL:';\r\n    contactForm.appendChild(labelEmail);\r\n\r\n    const inputEmail = document.createElement('input');\r\n    inputEmail.className = 'input';\r\n    inputEmail.type = 'email';\r\n    inputEmail.name = 'email';\r\n    inputEmail.placeholder = 'Email';\r\n    contactForm.appendChild(inputEmail);\r\n\r\n    const labelTextArea = document.createElement('label');\r\n    labelTextArea.className = 'label';\r\n    labelTextArea.for = 'message';\r\n    labelTextArea.innerText = 'MENSAGEM:';\r\n    contactForm.appendChild(labelTextArea);\r\n\r\n    const inputTextArea = document.createElement('textarea');\r\n    inputTextArea.className = 'textarea';\r\n    inputTextArea.name = 'message';\r\n    contactForm.appendChild(inputTextArea);\r\n\r\n    const formButton = document.createElement('button');\r\n    formButton.id = 'formButton';\r\n    formButton.innerText = 'ENVIAR';\r\n    contactForm.appendChild(formButton);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restuarant/./src/contactPage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ \"./src/mainPage.js\");\n/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ \"./src/menuPage.js\");\n/* harmony import */ var _contactPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage.js */ \"./src/contactPage.js\");\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\n\r\n// Nabvar Event Listeners\r\nfunction loadListeners() {\r\n    const homeTab = document.getElementById('home');\r\n    homeTab.addEventListener('click', function() {\r\n        content.innerHTML = '';\r\n        (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.loadMain)();\r\n        loadListeners();\r\n        console.log('loaded home');\r\n    });\r\n\r\n    const menuTab = document.getElementById('menu');\r\n    menuTab.addEventListener('click', function() {\r\n        content.innerHTML = '';\r\n        (0,_menuPage_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\r\n        loadListeners();\r\n        console.log('loaded menu');\r\n    });\r\n\r\n    const contactTab = document.getElementById('contact');\r\n    contactTab.addEventListener('click', function() {\r\n        content.innerHTML = '';\r\n        (0,_contactPage_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\r\n        loadListeners();\r\n        console.log('loaded contact');\r\n    });\r\n};\r\n\r\n// Load Main Page HTML Onload\r\nwindow.onload = function() {\r\n    (0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.loadMain)();\r\n    loadListeners();\r\n};\n\n//# sourceURL=webpack://restuarant/./src/index.js?");

/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMain: () => (/* binding */ loadMain)\n/* harmony export */ });\nconst loadMain = () => {\r\n    const content = document.getElementById('content');\r\n\r\n    // Navbar Creation\r\n    const navbar = document.createElement('div');\r\n    navbar.id = 'navbar';\r\n    content.appendChild(navbar);\r\n\r\n    const navItemHome = document.createElement('h2');\r\n    navItemHome.id = 'home';\r\n    navItemHome.className = 'navItem';\r\n    navItemHome.innerText = 'INICIAL';\r\n    navbar.appendChild(navItemHome);\r\n\r\n    const navItemMenu = document.createElement('h2');\r\n    navItemMenu.id = 'menu';\r\n    navItemMenu.className = 'navItem';\r\n    navItemMenu.innerText = 'CARDÁPIO';\r\n    navbar.appendChild(navItemMenu);\r\n\r\n    const navItemContact = document.createElement('h2');\r\n    navItemContact.id = 'contact';\r\n    navItemContact.className = 'navItem';\r\n    navItemContact.innerText = 'CONTATO';\r\n    navbar.appendChild(navItemContact);\r\n\r\n    // Title Creation\r\n    const title = document.createElement('h1');\r\n    title.id = 'title';\r\n    title.innerText = 'FOGÃO DO RIO';\r\n    content.appendChild(title);\r\n\r\n    // About Section Creation\r\n    const aboutSection = document.createElement('div');\r\n    aboutSection.id = 'aboutSection';\r\n    content.appendChild(aboutSection);\r\n\r\n    const subTitle = document.createElement('h2');\r\n    subTitle.className = 'subTitle';\r\n    subTitle.innerText = 'O FOGÃO';\r\n    aboutSection.appendChild(subTitle);\r\n\r\n    const paragraphBlock = document.createElement('p');\r\n    paragraphBlock.className = 'paragraphBlock';\r\n    paragraphBlock.innerText = 'Localizado na cidade de Rio de Janeiro, com a praia de Ipanema na frente, experimente o sabor de um churraso rodízio irresistível. Temos a paixão de colocar na mesa pratos de alta qualidade, são selecionados da melhor carne da região.';\r\n    aboutSection.appendChild(paragraphBlock);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restuarant/./src/mainPage.js?");

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nconst loadMenu = () => {\r\n    const content = document.getElementById('content');\r\n\r\n    // Navbar Creation\r\n    const navbar = document.createElement('div');\r\n    navbar.id = 'navbar';\r\n    content.appendChild(navbar);\r\n\r\n    const navItemHome = document.createElement('h2');\r\n    navItemHome.id = 'home';\r\n    navItemHome.className = 'navItem';\r\n    navItemHome.innerText = 'INICIAL';\r\n    navbar.appendChild(navItemHome);\r\n\r\n    const navItemMenu = document.createElement('h2');\r\n    navItemMenu.id = 'menu';\r\n    navItemMenu.className = 'navItem';\r\n    navItemMenu.innerText = 'CARDÁPIO';\r\n    navbar.appendChild(navItemMenu);\r\n\r\n    const navItemContact = document.createElement('h2');\r\n    navItemContact.id = 'contact';\r\n    navItemContact.className = 'navItem';\r\n    navItemContact.innerText = 'CONTATO';\r\n    navbar.appendChild(navItemContact);\r\n\r\n    // Title Creation\r\n    const title = document.createElement('h1');\r\n    title.id = 'title';\r\n    title.innerText = 'CARDÁPIO';\r\n    content.appendChild(title);\r\n\r\n    // Menu Section Creation\r\n    const menuSection = document.createElement('div');\r\n    menuSection.id = 'menuSection';\r\n    content.appendChild(menuSection);\r\n\r\n    const subTitle = document.createElement('h2');\r\n    subTitle.className = 'subTitle';\r\n    subTitle.innerText = 'O CARDÁPIO';\r\n    menuSection.appendChild(subTitle);\r\n\r\n    const paragraphBlock = document.createElement('p');\r\n    paragraphBlock.className = 'paragraphBlock';\r\n    paragraphBlock.innerText = 'Localizado na cidade de Rio de Janeiro, com a praia de Ipanema na frente, experimente o sabor de um churraso rodízio irresistível. Temos a paixão de colocar na mesa pratos de alta qualidade, são selecionados da melhor carne da região.';\r\n    menuSection.appendChild(paragraphBlock);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://restuarant/./src/menuPage.js?");

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