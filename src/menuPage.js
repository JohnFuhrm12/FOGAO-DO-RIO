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

export {loadMenu};