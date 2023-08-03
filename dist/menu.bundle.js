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
  !*** ./src/menuPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadMenu: () => (/* binding */ loadMenu)
/* harmony export */ });
const loadMenu = () => {
    const content = document.getElementById('content');

    content.style.backgroundImage='url(https://res.cloudinary.com/dvmw658s9/image/upload/v1691040271/sn1eqy6bbpanoqdaoa1e.jpg)';

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
    title.innerText = 'CARDÁPIO';
    content.appendChild(title);

    // Menu Section Creation
    const menuSection = document.createElement('div');
    menuSection.id = 'menuSection';
    content.appendChild(menuSection);

    const subTitle = document.createElement('h2');
    subTitle.className = 'subTitle';
    subTitle.innerText = 'O CARDÁPIO';
    menuSection.appendChild(subTitle);

    const paragraphBlock = document.createElement('p');
    paragraphBlock.className = 'paragraphBlock';
    paragraphBlock.innerText = 'Nosso seleção de carnes tem muitas variedades e cortes, todos os seleções são acompanhados de uma entrada e um vinho de sua escolha.';
    menuSection.appendChild(paragraphBlock);

    // Menu Creation
    const menuBlockRow1 = document.createElement('div');
    menuBlockRow1.className = 'menuBlockRow';
    menuSection.appendChild(menuBlockRow1);

    const menuBlock1 = document.createElement('div');
    menuBlock1.className = 'menuBlock';
    menuBlockRow1.appendChild(menuBlock1);

    const menuBlock1Title = document.createElement('h2');
    menuBlock1Title.className = 'menuBlockTitle';
    menuBlock1Title.innerText = 'PICANHA';
    menuBlock1.appendChild(menuBlock1Title);

    const menuBlock1Info = document.createElement('p');
    menuBlock1Info.className = 'menuBlockInfo';
    menuBlock1Info.innerText = 'A picanha é um corte tipicamente brasileiro.';
    menuBlock1.appendChild(menuBlock1Info);

    const menuBlock2 = document.createElement('div');
    menuBlock2.className = 'menuBlock';
    menuBlockRow1.appendChild(menuBlock2);

    const menuBlock2Title = document.createElement('h2');
    menuBlock2Title.className = 'menuBlockTitle';
    menuBlock2Title.innerText = 'COSTELÃO';
    menuBlock2.appendChild(menuBlock2Title);

    const menuBlock2Info = document.createElement('p');
    menuBlock2Info.className = 'menuBlockInfo';
    menuBlock2Info.innerText = 'Este corte é assado lentamente por até 7 horas até alcançar o ponto perfeito.';
    menuBlock2.appendChild(menuBlock2Info);

    const menuBlock3 = document.createElement('div');
    menuBlock3.className = 'menuBlock';
    menuBlockRow1.appendChild(menuBlock3);

    const menuBlock3Title = document.createElement('h2');
    menuBlock3Title.className = 'menuBlockTitle';
    menuBlock3Title.innerText = 'ALCATRA';
    menuBlock3.appendChild(menuBlock3Title);

    const menuBlock3Info = document.createElement('p');
    menuBlock3Info.className = 'menuBlockInfo';
    menuBlock3Info.innerText = 'É um dos cortes mais versáteis do boi.';
    menuBlock3.appendChild(menuBlock3Info);

    // Row 2 of Menu
    const menuBlockRow2 = document.createElement('div');
    menuBlockRow2.className = 'menuBlockRow';
    menuSection.appendChild(menuBlockRow2);

    const menuBlock1of2 = document.createElement('div');
    menuBlock1of2.className = 'menuBlock';
    menuBlockRow2.appendChild(menuBlock1of2);

    const menuBlock1of2Title = document.createElement('h2');
    menuBlock1of2Title.className = 'menuBlockTitle';
    menuBlock1of2Title.innerText = 'FRALDINHA';
    menuBlock1of2.appendChild(menuBlock1of2Title);

    const menuBlock1of2Info = document.createElement('p');
    menuBlock1of2Info.className = 'menuBlockInfo';
    menuBlock1of2Info.innerText = 'Corte com paladar diferenciado, disputa com a picanha.';
    menuBlock1of2.appendChild(menuBlock1of2Info);

    const menuBlock2of2 = document.createElement('div');
    menuBlock2of2.className = 'menuBlock';
    menuBlockRow2.appendChild(menuBlock2of2);

    const menuBlock2of2Title = document.createElement('h2');
    menuBlock2of2Title.className = 'menuBlockTitle';
    menuBlock2of2Title.innerText = 'COSTELA';
    menuBlock2of2.appendChild(menuBlock2of2Title);

    const menuBlock2of2Info = document.createElement('p');
    menuBlock2of2Info.className = 'menuBlockInfo';
    menuBlock2of2Info.innerText = 'Este corte clássico é preparado de forma tradicional, proporcionando um sabor autêntico.';
    menuBlock2of2.appendChild(menuBlock2of2Info);

    const menuBlock3of2 = document.createElement('div');
    menuBlock3of2.className = 'menuBlock';
    menuBlockRow2.appendChild(menuBlock3of2);

    const menuBlock3of2Title = document.createElement('h2');
    menuBlock3of2Title.className = 'menuBlockTitle';
    menuBlock3of2Title.innerText = 'ANCHO';
    menuBlock3of2.appendChild(menuBlock3of2Title);

    const menuBlock3of2Info = document.createElement('p');
    menuBlock3of2Info.className = 'menuBlockInfo';
    menuBlock3of2Info.innerText = 'Os cortes de bife ancho são assados lentamente, garantindo uma carne macia e suculenta com sabor único.';
    menuBlock3of2.appendChild(menuBlock3of2Info);

};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vc3JjL21lbnVQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbG9hZE1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2bXc2NThzOS9pbWFnZS91cGxvYWQvdjE2OTEwNDAyNzEvc24xZXF5NmJicGFub3FkYW9hMWUuanBnKSc7XHJcblxyXG4gICAgLy8gTmF2YmFyIENyZWF0aW9uXHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hdmJhci5pZCA9ICduYXZiYXInO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW1Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG5hdkl0ZW1Ib21lLmlkID0gJ2hvbWUnO1xyXG4gICAgbmF2SXRlbUhvbWUuY2xhc3NOYW1lID0gJ25hdkl0ZW0nO1xyXG4gICAgbmF2SXRlbUhvbWUuaW5uZXJUZXh0ID0gJ0lOSUNJQUwnO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1Ib21lKTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBuYXZJdGVtTWVudS5pZCA9ICdtZW51JztcclxuICAgIG5hdkl0ZW1NZW51LmNsYXNzTmFtZSA9ICduYXZJdGVtJztcclxuICAgIG5hdkl0ZW1NZW51LmlubmVyVGV4dCA9ICdDQVJEw4FQSU8nO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1NZW51KTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBuYXZJdGVtQ29udGFjdC5pZCA9ICdjb250YWN0JztcclxuICAgIG5hdkl0ZW1Db250YWN0LmNsYXNzTmFtZSA9ICduYXZJdGVtJztcclxuICAgIG5hdkl0ZW1Db250YWN0LmlubmVyVGV4dCA9ICdDT05UQVRPJztcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZJdGVtQ29udGFjdCk7XHJcblxyXG4gICAgLy8gVGl0bGUgQ3JlYXRpb25cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdDQVJEw4FQSU8nO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgLy8gTWVudSBTZWN0aW9uIENyZWF0aW9uXHJcbiAgICBjb25zdCBtZW51U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudVNlY3Rpb24uaWQgPSAnbWVudVNlY3Rpb24nO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51U2VjdGlvbik7XHJcblxyXG4gICAgY29uc3Qgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgc3ViVGl0bGUuY2xhc3NOYW1lID0gJ3N1YlRpdGxlJztcclxuICAgIHN1YlRpdGxlLmlubmVyVGV4dCA9ICdPIENBUkTDgVBJTyc7XHJcbiAgICBtZW51U2VjdGlvbi5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGhCbG9jay5jbGFzc05hbWUgPSAncGFyYWdyYXBoQmxvY2snO1xyXG4gICAgcGFyYWdyYXBoQmxvY2suaW5uZXJUZXh0ID0gJ05vc3NvIHNlbGXDp8OjbyBkZSBjYXJuZXMgdGVtIG11aXRhcyB2YXJpZWRhZGVzIGUgY29ydGVzLCB0b2RvcyBvcyBzZWxlw6fDtWVzIHPDo28gYWNvbXBhbmhhZG9zIGRlIHVtYSBlbnRyYWRhIGUgdW0gdmluaG8gZGUgc3VhIGVzY29saGEuJztcclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKHBhcmFncmFwaEJsb2NrKTtcclxuXHJcbiAgICAvLyBNZW51IENyZWF0aW9uXHJcbiAgICBjb25zdCBtZW51QmxvY2tSb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51QmxvY2tSb3cxLmNsYXNzTmFtZSA9ICdtZW51QmxvY2tSb3cnO1xyXG4gICAgbWVudVNlY3Rpb24uYXBwZW5kQ2hpbGQobWVudUJsb2NrUm93MSk7XHJcblxyXG4gICAgY29uc3QgbWVudUJsb2NrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUJsb2NrMS5jbGFzc05hbWUgPSAnbWVudUJsb2NrJztcclxuICAgIG1lbnVCbG9ja1JvdzEuYXBwZW5kQ2hpbGQobWVudUJsb2NrMSk7XHJcblxyXG4gICAgY29uc3QgbWVudUJsb2NrMVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1lbnVCbG9jazFUaXRsZS5jbGFzc05hbWUgPSAnbWVudUJsb2NrVGl0bGUnO1xyXG4gICAgbWVudUJsb2NrMVRpdGxlLmlubmVyVGV4dCA9ICdQSUNBTkhBJztcclxuICAgIG1lbnVCbG9jazEuYXBwZW5kQ2hpbGQobWVudUJsb2NrMVRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBtZW51QmxvY2sxSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lbnVCbG9jazFJbmZvLmNsYXNzTmFtZSA9ICdtZW51QmxvY2tJbmZvJztcclxuICAgIG1lbnVCbG9jazFJbmZvLmlubmVyVGV4dCA9ICdBIHBpY2FuaGEgw6kgdW0gY29ydGUgdGlwaWNhbWVudGUgYnJhc2lsZWlyby4nO1xyXG4gICAgbWVudUJsb2NrMS5hcHBlbmRDaGlsZChtZW51QmxvY2sxSW5mbyk7XHJcblxyXG4gICAgY29uc3QgbWVudUJsb2NrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUJsb2NrMi5jbGFzc05hbWUgPSAnbWVudUJsb2NrJztcclxuICAgIG1lbnVCbG9ja1JvdzEuYXBwZW5kQ2hpbGQobWVudUJsb2NrMik7XHJcblxyXG4gICAgY29uc3QgbWVudUJsb2NrMlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1lbnVCbG9jazJUaXRsZS5jbGFzc05hbWUgPSAnbWVudUJsb2NrVGl0bGUnO1xyXG4gICAgbWVudUJsb2NrMlRpdGxlLmlubmVyVGV4dCA9ICdDT1NURUzDg08nO1xyXG4gICAgbWVudUJsb2NrMi5hcHBlbmRDaGlsZChtZW51QmxvY2syVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVCbG9jazJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVudUJsb2NrMkluZm8uY2xhc3NOYW1lID0gJ21lbnVCbG9ja0luZm8nO1xyXG4gICAgbWVudUJsb2NrMkluZm8uaW5uZXJUZXh0ID0gJ0VzdGUgY29ydGUgw6kgYXNzYWRvIGxlbnRhbWVudGUgcG9yIGF0w6kgNyBob3JhcyBhdMOpIGFsY2Fuw6dhciBvIHBvbnRvIHBlcmZlaXRvLic7XHJcbiAgICBtZW51QmxvY2syLmFwcGVuZENoaWxkKG1lbnVCbG9jazJJbmZvKTtcclxuXHJcbiAgICBjb25zdCBtZW51QmxvY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51QmxvY2szLmNsYXNzTmFtZSA9ICdtZW51QmxvY2snO1xyXG4gICAgbWVudUJsb2NrUm93MS5hcHBlbmRDaGlsZChtZW51QmxvY2szKTtcclxuXHJcbiAgICBjb25zdCBtZW51QmxvY2szVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbWVudUJsb2NrM1RpdGxlLmNsYXNzTmFtZSA9ICdtZW51QmxvY2tUaXRsZSc7XHJcbiAgICBtZW51QmxvY2szVGl0bGUuaW5uZXJUZXh0ID0gJ0FMQ0FUUkEnO1xyXG4gICAgbWVudUJsb2NrMy5hcHBlbmRDaGlsZChtZW51QmxvY2szVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVCbG9jazNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVudUJsb2NrM0luZm8uY2xhc3NOYW1lID0gJ21lbnVCbG9ja0luZm8nO1xyXG4gICAgbWVudUJsb2NrM0luZm8uaW5uZXJUZXh0ID0gJ8OJIHVtIGRvcyBjb3J0ZXMgbWFpcyB2ZXJzw6F0ZWlzIGRvIGJvaS4nO1xyXG4gICAgbWVudUJsb2NrMy5hcHBlbmRDaGlsZChtZW51QmxvY2szSW5mbyk7XHJcblxyXG4gICAgLy8gUm93IDIgb2YgTWVudVxyXG4gICAgY29uc3QgbWVudUJsb2NrUm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUJsb2NrUm93Mi5jbGFzc05hbWUgPSAnbWVudUJsb2NrUm93JztcclxuICAgIG1lbnVTZWN0aW9uLmFwcGVuZENoaWxkKG1lbnVCbG9ja1JvdzIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVCbG9jazFvZjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVCbG9jazFvZjIuY2xhc3NOYW1lID0gJ21lbnVCbG9jayc7XHJcbiAgICBtZW51QmxvY2tSb3cyLmFwcGVuZENoaWxkKG1lbnVCbG9jazFvZjIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVCbG9jazFvZjJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtZW51QmxvY2sxb2YyVGl0bGUuY2xhc3NOYW1lID0gJ21lbnVCbG9ja1RpdGxlJztcclxuICAgIG1lbnVCbG9jazFvZjJUaXRsZS5pbm5lclRleHQgPSAnRlJBTERJTkhBJztcclxuICAgIG1lbnVCbG9jazFvZjIuYXBwZW5kQ2hpbGQobWVudUJsb2NrMW9mMlRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBtZW51QmxvY2sxb2YySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lbnVCbG9jazFvZjJJbmZvLmNsYXNzTmFtZSA9ICdtZW51QmxvY2tJbmZvJztcclxuICAgIG1lbnVCbG9jazFvZjJJbmZvLmlubmVyVGV4dCA9ICdDb3J0ZSBjb20gcGFsYWRhciBkaWZlcmVuY2lhZG8sIGRpc3B1dGEgY29tIGEgcGljYW5oYS4nO1xyXG4gICAgbWVudUJsb2NrMW9mMi5hcHBlbmRDaGlsZChtZW51QmxvY2sxb2YySW5mbyk7XHJcblxyXG4gICAgY29uc3QgbWVudUJsb2NrMm9mMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudUJsb2NrMm9mMi5jbGFzc05hbWUgPSAnbWVudUJsb2NrJztcclxuICAgIG1lbnVCbG9ja1JvdzIuYXBwZW5kQ2hpbGQobWVudUJsb2NrMm9mMik7XHJcblxyXG4gICAgY29uc3QgbWVudUJsb2NrMm9mMlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG1lbnVCbG9jazJvZjJUaXRsZS5jbGFzc05hbWUgPSAnbWVudUJsb2NrVGl0bGUnO1xyXG4gICAgbWVudUJsb2NrMm9mMlRpdGxlLmlubmVyVGV4dCA9ICdDT1NURUxBJztcclxuICAgIG1lbnVCbG9jazJvZjIuYXBwZW5kQ2hpbGQobWVudUJsb2NrMm9mMlRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBtZW51QmxvY2syb2YySW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1lbnVCbG9jazJvZjJJbmZvLmNsYXNzTmFtZSA9ICdtZW51QmxvY2tJbmZvJztcclxuICAgIG1lbnVCbG9jazJvZjJJbmZvLmlubmVyVGV4dCA9ICdFc3RlIGNvcnRlIGNsw6Fzc2ljbyDDqSBwcmVwYXJhZG8gZGUgZm9ybWEgdHJhZGljaW9uYWwsIHByb3BvcmNpb25hbmRvIHVtIHNhYm9yIGF1dMOqbnRpY28uJztcclxuICAgIG1lbnVCbG9jazJvZjIuYXBwZW5kQ2hpbGQobWVudUJsb2NrMm9mMkluZm8pO1xyXG5cclxuICAgIGNvbnN0IG1lbnVCbG9jazNvZjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVCbG9jazNvZjIuY2xhc3NOYW1lID0gJ21lbnVCbG9jayc7XHJcbiAgICBtZW51QmxvY2tSb3cyLmFwcGVuZENoaWxkKG1lbnVCbG9jazNvZjIpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVCbG9jazNvZjJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBtZW51QmxvY2szb2YyVGl0bGUuY2xhc3NOYW1lID0gJ21lbnVCbG9ja1RpdGxlJztcclxuICAgIG1lbnVCbG9jazNvZjJUaXRsZS5pbm5lclRleHQgPSAnQU5DSE8nO1xyXG4gICAgbWVudUJsb2NrM29mMi5hcHBlbmRDaGlsZChtZW51QmxvY2szb2YyVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVCbG9jazNvZjJJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWVudUJsb2NrM29mMkluZm8uY2xhc3NOYW1lID0gJ21lbnVCbG9ja0luZm8nO1xyXG4gICAgbWVudUJsb2NrM29mMkluZm8uaW5uZXJUZXh0ID0gJ09zIGNvcnRlcyBkZSBiaWZlIGFuY2hvIHPDo28gYXNzYWRvcyBsZW50YW1lbnRlLCBnYXJhbnRpbmRvIHVtYSBjYXJuZSBtYWNpYSBlIHN1Y3VsZW50YSBjb20gc2Fib3Igw7puaWNvLic7XHJcbiAgICBtZW51QmxvY2szb2YyLmFwcGVuZENoaWxkKG1lbnVCbG9jazNvZjJJbmZvKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQge2xvYWRNZW51fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=