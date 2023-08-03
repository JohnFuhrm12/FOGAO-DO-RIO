import { loadMain } from './mainPage.js';
import { loadMenu } from './menuPage.js';
import { loadContact } from './contactPage.js';

import './styles.css';

// Nabvar Event Listeners
function loadListeners() {
    const content = document.getElementById('content');

    const homeTab = document.getElementById('home');
    homeTab.addEventListener('click', function() {
        content.innerHTML = '';
        loadMain();
        loadListeners();
    });

    const menuTab = document.getElementById('menu');
    menuTab.addEventListener('click', function() {
        content.innerHTML = '';
        loadMenu();
        loadListeners();
    });

    const contactTab = document.getElementById('contact');
    contactTab.addEventListener('click', function() {
        content.innerHTML = '';
        loadContact();
        loadListeners();
    });
};

// Load Main Page HTML Onload
window.onload = function() {
    loadMain();
    loadListeners();
};