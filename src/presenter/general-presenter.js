import HeaderComponent from '../View-general/header-component.js';
import TopComponent from '../View-general/top-component.js';
import ServicesComponent from '../View-general/services-component.js';
import StockComponent from '../View-general/stock-component.js';
import AboutComponent from '../View-general/about-component.js';
import TeamComponent from '../View-general/team-component.js';
import FooterComponent from '../View-general/footer-component.js';

import { render } from '../framework/render.js';

export default class GeneralPresenter {
    #headerContainer = null;
    #topContainer = null;
    #servicesContainer = null;
    #stockContainer = null;
    #aboutContainer = null;
    #teamContainer = null;
    #footerContainer = null;
    #model = null;

    constructor({ model, containers }) {
        this.#model = model;
        this.#headerContainer = containers.header;
        this.#topContainer = containers.top;
        this.#servicesContainer = containers.services;
        this.#stockContainer = containers.stock;
        this.#aboutContainer = containers.about;
        this.#teamContainer = containers.team;
        this.#footerContainer = containers.footer;
    }

    init() {
        this.#renderHeader();
        this.#renderTop();
        this.#renderServices();
        this.#renderStock();
        this.#renderAbout();
        this.#renderTeam();
        this.#renderFooter();
    }

    #renderHeader() {
        const headerComponent = new HeaderComponent(this.#model.header);
        render(headerComponent, this.#headerContainer);
    }

    #renderTop() {
        const topComponent = new TopComponent(this.#model.top);
        render(topComponent, this.#topContainer);
    }

    #renderServices() {
        const servicesComponent = new ServicesComponent(this.#model.services);
        render(servicesComponent, this.#servicesContainer);
    }

    #renderStock() {
        const stockComponent = new StockComponent(this.#model.stocks);
        render(stockComponent, this.#stockContainer);
    }

    #renderAbout() {
        const aboutComponent = new AboutComponent(this.#model.aboutText);
        render(aboutComponent, this.#aboutContainer);
    }

    #renderTeam() {
        const teamComponent = new TeamComponent(this.#model.teamMembers);
        render(teamComponent, this.#teamContainer);
    }

    #renderFooter() {
        const footerComponent = new FooterComponent(); 
        render(footerComponent, this.#footerContainer);
    }
}