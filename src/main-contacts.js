import HeaderComponent from './View-contacts/header-component.js';
import FooterComponent from './View-contacts/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import ContactsPresenter from './presenter/contacts-presenter.js';


const headerContainer = document.querySelector('header');
const contactsContainer = document.querySelector('.main');
const footerContainer = document.querySelector('footer');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new ContactsPresenter(contactsContainer);  
render(new FooterComponent(), footerContainer);