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
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadContact: () => (/* binding */ loadContact)
/* harmony export */ });
const loadContact = () => {
    const content = document.getElementById('content');

    content.style.backgroundImage='url(https://res.cloudinary.com/dvmw658s9/image/upload/v1691040694/whmkrvujt0pgfnoltoow.jpg)';

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
    title.innerText = 'CONTATO';
    content.appendChild(title);

    // Contact Section Creation
    const contactSection = document.createElement('div');
    contactSection.id = 'contactSection';
    content.appendChild(contactSection);

    const subTitle = document.createElement('h2');
    subTitle.className = 'subTitle';
    subTitle.innerText = 'CONTATE-NOS';
    contactSection.appendChild(subTitle);

    const paragraphBlockCell = document.createElement('p');
    paragraphBlockCell.className = 'paragraphBlock';
    paragraphBlockCell.innerText = 'Telefone: +55 (98)55769196';
    contactSection.appendChild(paragraphBlockCell);

    const paragraphBlockEmail = document.createElement('p');
    paragraphBlockEmail.className = 'paragraphBlock';
    paragraphBlockEmail.innerText = 'Email: reservas@fogaodorio.com.br';
    contactSection.appendChild(paragraphBlockEmail);

    // Contact Form
    const contactFormBlock = document.createElement('div');
    contactFormBlock.id = 'contactFormBlock';
    contactSection.appendChild(contactFormBlock);

    const contactForm = document.createElement('form');
    contactForm.id = 'contactForm';
    contactFormBlock.appendChild(contactForm);

    const labelName = document.createElement('label');
    labelName.className = 'label';
    labelName.for = 'name';
    labelName.innerText = 'NOME:';
    contactForm.appendChild(labelName);

    const inputName = document.createElement('input');
    inputName.className = 'input';
    inputName.type = 'text';
    inputName.name = 'name';
    inputName.placeholder = 'Nome';
    contactForm.appendChild(inputName);

    const labelEmail = document.createElement('label');
    labelEmail.className = 'label';
    labelEmail.for = 'email';
    labelEmail.innerText = 'EMAIL:';
    contactForm.appendChild(labelEmail);

    const inputEmail = document.createElement('input');
    inputEmail.className = 'input';
    inputEmail.type = 'email';
    inputEmail.name = 'email';
    inputEmail.placeholder = 'Email';
    contactForm.appendChild(inputEmail);

    const labelTextArea = document.createElement('label');
    labelTextArea.className = 'label';
    labelTextArea.for = 'message';
    labelTextArea.innerText = 'MENSAGEM:';
    contactForm.appendChild(labelTextArea);

    const inputTextArea = document.createElement('textarea');
    inputTextArea.className = 'textarea';
    inputTextArea.name = 'message';
    contactForm.appendChild(inputTextArea);

    const formButton = document.createElement('button');
    formButton.id = 'formButton';
    formButton.innerText = 'ENVIAR';
    contactForm.appendChild(formButton);
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1YXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3R1YXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50Ly4vc3JjL2NvbnRhY3RQYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgbG9hZENvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb250ZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZT0ndXJsKGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2R2bXc2NThzOS9pbWFnZS91cGxvYWQvdjE2OTEwNDA2OTQvd2hta3J2dWp0MHBnZm5vbHRvb3cuanBnKSc7XHJcblxyXG4gICAgLy8gTmF2YmFyIENyZWF0aW9uXHJcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hdmJhci5pZCA9ICduYXZiYXInO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZiYXIpO1xyXG5cclxuICAgIGNvbnN0IG5hdkl0ZW1Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIG5hdkl0ZW1Ib21lLmlkID0gJ2hvbWUnO1xyXG4gICAgbmF2SXRlbUhvbWUuY2xhc3NOYW1lID0gJ25hdkl0ZW0nO1xyXG4gICAgbmF2SXRlbUhvbWUuaW5uZXJUZXh0ID0gJ0lOSUNJQUwnO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1Ib21lKTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBuYXZJdGVtTWVudS5pZCA9ICdtZW51JztcclxuICAgIG5hdkl0ZW1NZW51LmNsYXNzTmFtZSA9ICduYXZJdGVtJztcclxuICAgIG5hdkl0ZW1NZW51LmlubmVyVGV4dCA9ICdDQVJEw4FQSU8nO1xyXG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG5hdkl0ZW1NZW51KTtcclxuXHJcbiAgICBjb25zdCBuYXZJdGVtQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBuYXZJdGVtQ29udGFjdC5pZCA9ICdjb250YWN0JztcclxuICAgIG5hdkl0ZW1Db250YWN0LmNsYXNzTmFtZSA9ICduYXZJdGVtJztcclxuICAgIG5hdkl0ZW1Db250YWN0LmlubmVyVGV4dCA9ICdDT05UQVRPJztcclxuICAgIG5hdmJhci5hcHBlbmRDaGlsZChuYXZJdGVtQ29udGFjdCk7XHJcblxyXG4gICAgLy8gVGl0bGUgQ3JlYXRpb25cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlLmlkID0gJ3RpdGxlJztcclxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdDT05UQVRPJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIC8vIENvbnRhY3QgU2VjdGlvbiBDcmVhdGlvblxyXG4gICAgY29uc3QgY29udGFjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RTZWN0aW9uLmlkID0gJ2NvbnRhY3RTZWN0aW9uJztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFNlY3Rpb24pO1xyXG5cclxuICAgIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHN1YlRpdGxlLmNsYXNzTmFtZSA9ICdzdWJUaXRsZSc7XHJcbiAgICBzdWJUaXRsZS5pbm5lclRleHQgPSAnQ09OVEFURS1OT1MnO1xyXG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaEJsb2NrQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmFncmFwaEJsb2NrQ2VsbC5jbGFzc05hbWUgPSAncGFyYWdyYXBoQmxvY2snO1xyXG4gICAgcGFyYWdyYXBoQmxvY2tDZWxsLmlubmVyVGV4dCA9ICdUZWxlZm9uZTogKzU1ICg5OCk1NTc2OTE5Nic7XHJcbiAgICBjb250YWN0U2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhZ3JhcGhCbG9ja0NlbGwpO1xyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaEJsb2NrRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGhCbG9ja0VtYWlsLmNsYXNzTmFtZSA9ICdwYXJhZ3JhcGhCbG9jayc7XHJcbiAgICBwYXJhZ3JhcGhCbG9ja0VtYWlsLmlubmVyVGV4dCA9ICdFbWFpbDogcmVzZXJ2YXNAZm9nYW9kb3Jpby5jb20uYnInO1xyXG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYWdyYXBoQmxvY2tFbWFpbCk7XHJcblxyXG4gICAgLy8gQ29udGFjdCBGb3JtXHJcbiAgICBjb25zdCBjb250YWN0Rm9ybUJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0Rm9ybUJsb2NrLmlkID0gJ2NvbnRhY3RGb3JtQmxvY2snO1xyXG4gICAgY29udGFjdFNlY3Rpb24uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm1CbG9jayk7XHJcblxyXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbiAgICBjb250YWN0Rm9ybS5pZCA9ICdjb250YWN0Rm9ybSc7XHJcbiAgICBjb250YWN0Rm9ybUJsb2NrLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKTtcclxuXHJcbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxOYW1lLmNsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICBsYWJlbE5hbWUuZm9yID0gJ25hbWUnO1xyXG4gICAgbGFiZWxOYW1lLmlubmVyVGV4dCA9ICdOT01FOic7XHJcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dE5hbWUuY2xhc3NOYW1lID0gJ2lucHV0JztcclxuICAgIGlucHV0TmFtZS50eXBlID0gJ3RleHQnO1xyXG4gICAgaW5wdXROYW1lLm5hbWUgPSAnbmFtZSc7XHJcbiAgICBpbnB1dE5hbWUucGxhY2Vob2xkZXIgPSAnTm9tZSc7XHJcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxFbWFpbC5jbGFzc05hbWUgPSAnbGFiZWwnO1xyXG4gICAgbGFiZWxFbWFpbC5mb3IgPSAnZW1haWwnO1xyXG4gICAgbGFiZWxFbWFpbC5pbm5lclRleHQgPSAnRU1BSUw6JztcclxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGxhYmVsRW1haWwpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXRFbWFpbC5jbGFzc05hbWUgPSAnaW5wdXQnO1xyXG4gICAgaW5wdXRFbWFpbC50eXBlID0gJ2VtYWlsJztcclxuICAgIGlucHV0RW1haWwubmFtZSA9ICdlbWFpbCc7XHJcbiAgICBpbnB1dEVtYWlsLnBsYWNlaG9sZGVyID0gJ0VtYWlsJztcclxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGlucHV0RW1haWwpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsVGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWxUZXh0QXJlYS5jbGFzc05hbWUgPSAnbGFiZWwnO1xyXG4gICAgbGFiZWxUZXh0QXJlYS5mb3IgPSAnbWVzc2FnZSc7XHJcbiAgICBsYWJlbFRleHRBcmVhLmlubmVyVGV4dCA9ICdNRU5TQUdFTTonO1xyXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWxUZXh0QXJlYSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRUZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBpbnB1dFRleHRBcmVhLmNsYXNzTmFtZSA9ICd0ZXh0YXJlYSc7XHJcbiAgICBpbnB1dFRleHRBcmVhLm5hbWUgPSAnbWVzc2FnZSc7XHJcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dFRleHRBcmVhKTtcclxuXHJcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBmb3JtQnV0dG9uLmlkID0gJ2Zvcm1CdXR0b24nO1xyXG4gICAgZm9ybUJ1dHRvbi5pbm5lclRleHQgPSAnRU5WSUFSJztcclxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1CdXR0b24pO1xyXG59O1xyXG5cclxuZXhwb3J0IHtsb2FkQ29udGFjdH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9