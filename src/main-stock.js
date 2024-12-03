import HeaderComponent from './View-stock/header-component.js';
import FooterComponent from './View-stock/footer-component.js';
import { render, RenderPosition } from './framework/render.js';
import StockPresenter from './presenter/stock-presenter.js';


const headerContainer = document.querySelector('.board-app');
const stockContainer = document.querySelector('.main');
const footerContainer = document.querySelector('.board-app');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new StockPresenter(stockContainer);  
render(new FooterComponent(), footerContainer);