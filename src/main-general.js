import GeneralPresenter from './presenter/general-presenter.js';
import GeneralModel from './model/general-model.js';

const headerContainer = document.querySelector('header');
const topContainer = document.querySelector('.top');
const servicesContainer = document.querySelector('.services');
const stockContainer = document.querySelector('.stock');
const aboutContainer =  document.querySelector('.about');
const teamContainer = document.querySelector('.team');
const footerContainer = document.querySelector('footer');

const model = new GeneralModel();
const generalPresenter = new GeneralPresenter({
    model,
    containers: {
        header: headerContainer,
        top: topContainer,
        services: servicesContainer,
        stock: stockContainer,
        about: aboutContainer,
        team: teamContainer,
        footer: footerContainer
    }
});


generalPresenter.init();



