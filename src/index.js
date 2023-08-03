import { loadMain } from './mainPage.js';
import { loadMenu } from './menuPage.js';
import { loadContact } from './contactPage.js';

const content = document.getElementById('content');

// Nabvar Event Listeners
function loadListeners() {
    const homeTab = document.getElementById('home');
    homeTab.addEventListener('click', function() {
        content.innerHTML = '';
        loadMain();
        loadListeners();
        console.log('loaded home');
    });

    const menuTab = document.getElementById('menu');
    menuTab.addEventListener('click', function() {
        content.innerHTML = '';
        loadMenu();
        loadListeners();
        console.log('loaded menu');
    });

    const contactTab = document.getElementById('contact');
    contactTab.addEventListener('click', function() {
        content.innerHTML = '';
        loadContact();
        loadListeners();
        console.log('loaded contact');
    });
};

// Load Main Page HTML Onload
window.onload = function() {
    loadMain();
    loadListeners();
};