import HeaderComponent from './View-doctots/header-component.js';
import FooterComponent from './View-doctots/footer-component.js';
import {render, RenderPosition} from './framework/render.js';
import DoctorsPresenter from './presenter/doctors-presenter.js';


const headerContainer = document.querySelector('.board-app');
const doctorsContainer = document.querySelector('.main');
const footerContainer = document.querySelector('.board-app');

render(new HeaderComponent(), headerContainer, RenderPosition.BEFOREBEGIN);
new DoctorsPresenter(doctorsContainer);  
render(new FooterComponent(), footerContainer);