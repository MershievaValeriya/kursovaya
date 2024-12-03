import HeaderComponent from './View-servicesAndPrices/header-component.js';
import FooterComponent from './View-servicesAndPrices/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import ServicesAndPricesPresenter from './presenter/servicesAndPrices-presenter.js';


const headerContainer = document.querySelector('.board-app');
const servicesAndPricesContainer = document.querySelector('.main');
const footerContainer = document.querySelector('.board-app');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new ServicesAndPricesPresenter(servicesAndPricesContainer);  
render(new FooterComponent(), footerContainer);
