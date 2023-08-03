/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("window.onload = function() {\r\n    console.log('working');\r\n\r\n    const content = document.getElementById('content');\r\n\r\n    // Navbar Creation\r\n    const navbar = document.createElement('div');\r\n    navbar.id = 'navbar';\r\n    content.appendChild(navbar);\r\n\r\n    const navItemHome = document.createElement('h2');\r\n    navItemHome.className = 'navItem';\r\n    navItemHome.innerText = 'INICIAL';\r\n    navbar.appendChild(navItemHome);\r\n\r\n    const navItemMenu = document.createElement('h2');\r\n    navItemMenu.className = 'navItem';\r\n    navItemMenu.innerText = 'CARDÁPIO';\r\n    navbar.appendChild(navItemMenu);\r\n\r\n    const navItemContact = document.createElement('h2');\r\n    navItemContact.className = 'navItem';\r\n    navItemContact.innerText = 'CONTATO';\r\n    navbar.appendChild(navItemContact);\r\n\r\n    // Title Creation\r\n    const title = document.createElement('h1');\r\n    title.id = 'title';\r\n    title.innerText = 'FOGÃO DO RIO';\r\n    content.appendChild(title);\r\n\r\n    // About Section Creation\r\n    const aboutSection = document.createElement('div');\r\n    aboutSection.id = 'aboutSection';\r\n    content.appendChild(aboutSection);\r\n\r\n    const subTitle = document.createElement('h2');\r\n    subTitle.className = 'subTitle';\r\n    subTitle.innerText = 'O FOGÃO';\r\n    aboutSection.appendChild(subTitle);\r\n\r\n    const paragraphBlock = document.createElement('p');\r\n    paragraphBlock.className = 'paragraphBlock';\r\n    paragraphBlock.innerText = 'Localizado na cidade de Rio de Janeiro, com a praia de Ipanema na frente, experimente o sabor de um churraso rodízio irresistível. Temos a paixão de colocar na mesa pratos de alta qualidade, são selecionados da melhor carne da região.';\r\n    aboutSection.appendChild(paragraphBlock);\r\n\r\n};\n\n//# sourceURL=webpack://restuarant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;