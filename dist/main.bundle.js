/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMain: () => (/* binding */ loadMain)
/* harmony export */ });
const loadMain = () => {
    const content = document.getElementById('content');

    content.style.backgroundImage='url(https://res.cloudinary.com/dvmw658s9/image/upload/v1691027297/x0r2h32amkyqvjkxfwko.jpg)';

    // Navbar Creation
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    content.appendChild(navbar);

    const navItemHome = document.createElement('h2');
    navItemHome.id = 'home';
    navItemHome.className = 'navItem';
    navItemHome.innerText = 'INICIAL';
    navbar.appendChild(navItemHome);

    const navItemMenu = document.createElement('h2');
    navItemMenu.id = 'menu';
    navItemMenu.className = 'navItem';
    navItemMenu.innerText = 'CARDÁPIO';
    navbar.appendChild(navItemMenu);

    const navItemContact = document.createElement('h2');
    navItemContact.id = 'contact';
    navItemContact.className = 'navItem';
    navItemContact.innerText = 'CONTATO';
    navbar.appendChild(navItemContact);

    // Title Creation
    const title = document.createElement('h1');
    title.id = 'title';
    title.innerText = 'FOGÃO DO RIO';
    content.appendChild(title);

    // About Section Creation
    const aboutSection = document.createElement('div');
    aboutSection.id = 'aboutSection';
    content.appendChild(aboutSection);

    const subTitle = document.createElement('h2');
    subTitle.className = 'subTitle';
    subTitle.innerText = 'O FOGÃO';
    aboutSection.appendChild(subTitle);

    const paragraphBlock = document.createElement('p');
    paragraphBlock.className = 'paragraphBlock';
    paragraphBlock.innerText = 'Localizado na cidade de Rio de Janeiro, com a praia de Ipanema na frente, experimente o sabor de um churraso rodízio irresistível. Temos a paixão de colocar na mesa pratos de alta qualidade, são selecionados da melhor carne da região.';
    aboutSection.appendChild(paragraphBlock);
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1YXJhbnQvLi9zcmMvbWFpblBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBsb2FkTWFpbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnRlbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlPSd1cmwoaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZHZtdzY1OHM5L2ltYWdlL3VwbG9hZC92MTY5MTAyNzI5Ny94MHIyaDMyYW1reXF2amt4Zndrby5qcGcpJztcclxuXHJcbiAgICAvLyBOYXZiYXIgQ3JlYXRpb25cclxuICAgIGNvbnN0IG5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2YmFyLmlkID0gJ25hdmJhcic7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdmJhcik7XHJcblxyXG4gICAgY29uc3QgbmF2SXRlbUhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbmF2SXRlbUhvbWUuaWQgPSAnaG9tZSc7XHJcbiAgICBuYXZJdGVtSG9tZS5jbGFzc05hbWUgPSAnbmF2SXRlbSc7XHJcbiAgICBuYXZJdGVtSG9tZS5pbm5lclRleHQgPSAnSU5JQ0lBTCc7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2SXRlbUhvbWUpO1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW1NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG5hdkl0ZW1NZW51LmlkID0gJ21lbnUnO1xyXG4gICAgbmF2SXRlbU1lbnUuY2xhc3NOYW1lID0gJ25hdkl0ZW0nO1xyXG4gICAgbmF2SXRlbU1lbnUuaW5uZXJUZXh0ID0gJ0NBUkTDgVBJTyc7XHJcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobmF2SXRlbU1lbnUpO1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW1Db250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG5hdkl0ZW1Db250YWN0LmlkID0gJ2NvbnRhY3QnO1xyXG4gICAgbmF2SXRlbUNvbnRhY3QuY2xhc3NOYW1lID0gJ25hdkl0ZW0nO1xyXG4gICAgbmF2SXRlbUNvbnRhY3QuaW5uZXJUZXh0ID0gJ0NPTlRBVE8nO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1Db250YWN0KTtcclxuXHJcbiAgICAvLyBUaXRsZSBDcmVhdGlvblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gJ0ZPR8ODTyBETyBSSU8nO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgLy8gQWJvdXQgU2VjdGlvbiBDcmVhdGlvblxyXG4gICAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFNlY3Rpb24uaWQgPSAnYWJvdXRTZWN0aW9uJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRTZWN0aW9uKTtcclxuXHJcbiAgICBjb25zdCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBzdWJUaXRsZS5jbGFzc05hbWUgPSAnc3ViVGl0bGUnO1xyXG4gICAgc3ViVGl0bGUuaW5uZXJUZXh0ID0gJ08gRk9Hw4NPJztcclxuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGhCbG9jay5jbGFzc05hbWUgPSAncGFyYWdyYXBoQmxvY2snO1xyXG4gICAgcGFyYWdyYXBoQmxvY2suaW5uZXJUZXh0ID0gJ0xvY2FsaXphZG8gbmEgY2lkYWRlIGRlIFJpbyBkZSBKYW5laXJvLCBjb20gYSBwcmFpYSBkZSBJcGFuZW1hIG5hIGZyZW50ZSwgZXhwZXJpbWVudGUgbyBzYWJvciBkZSB1bSBjaHVycmFzbyByb2TDrXppbyBpcnJlc2lzdMOtdmVsLiBUZW1vcyBhIHBhaXjDo28gZGUgY29sb2NhciBuYSBtZXNhIHByYXRvcyBkZSBhbHRhIHF1YWxpZGFkZSwgc8OjbyBzZWxlY2lvbmFkb3MgZGEgbWVsaG9yIGNhcm5lIGRhIHJlZ2nDo28uJztcclxuICAgIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhCbG9jayk7XHJcbn07XHJcblxyXG5leHBvcnQge2xvYWRNYWlufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=