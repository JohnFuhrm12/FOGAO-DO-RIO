const loadContact = () => {
    const content = document.getElementById('content');

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

export {loadContact};