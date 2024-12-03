import ServicesAndPricesComponent from '../View-servicesAndPrices/servicesAndPrices-component.js';
import ServicesAndPricesModel from '../model/servicesAndPrices-model.js';


export default class ServicesAndPricesPresenter {
    constructor(container) {
        this.container = container;
        this.model = new ServicesAndPricesModel();
        this.component = new ServicesAndPricesComponent();
        
    
        this.init();
    }

    init() {
        this.renderServices();
    }

    renderServices() {
        const services = this.model.getServices();
        const servicesContainer = this.component.getElement().querySelector('.services-inner');

        services.forEach(service => {
            const serviceDropdown = document.createElement('div');
            serviceDropdown.className = 'services-dropdown';

            const serviceTitle = document.createElement('ul');
            const titleItem = document.createElement('li');
            titleItem.innerText = service.category;
            titleItem.className = 'menu_list_item';
            serviceTitle.appendChild(titleItem);
            serviceDropdown.appendChild(serviceTitle);

            const serviceOptions = document.createElement('ul');
            serviceOptions.className = 'services-dropdown-content';

            service.options.forEach(option => {
                const optionItem = document.createElement('li');
                optionItem.innerText = option;
                serviceOptions.appendChild(optionItem);
            });

            serviceDropdown.appendChild(serviceOptions);
            servicesContainer.appendChild(serviceDropdown);
        });

        this.container.appendChild(this.component.getElement());
    }
}
