const loadMain = window.onload = function() {
    const content = document.getElementById('content');

    // Navbar Creation
    const navbar = document.createElement('div');
    navbar.id = 'navbar';
    content.appendChild(navbar);

    const navItemHome = document.createElement('h2');
    navItemHome.className = 'navItem';
    navItemHome.innerText = 'INICIAL';
    navbar.appendChild(navItemHome);

    const navItemMenu = document.createElement('h2');
    navItemMenu.className = 'navItem';
    navItemMenu.innerText = 'CARDÁPIO';
    navbar.appendChild(navItemMenu);

    const navItemContact = document.createElement('h2');
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

export default loadMain;