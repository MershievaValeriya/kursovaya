import {createElement} from '../framework/render.js';


function createHeaderComponentTemplate() {
    return (
        ` <header class="header">
        <div class="container header_inner">
            <a class="logo" href="#">
                <img class="logo_img" src="images/logo1.png" alt="">
            </a>

            <nav class="menu header_menu">
                <button class="menu_btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="menu_list header_menu_list">
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="general.html">Главная</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="servicesAndPrices.html">Услуги и цены</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="stock.html">Акции</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="doctors.html">Врачи</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="reviews.html">Отзывы</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="contacts.html">Контакты</a>
                    </li>
                </ul>

            </nav>

            <a class="phone" href="tel:+4565779867">+45 65 77 98 67</a>

        </div>
    </header>`
      );
}


export default class HeaderComponent {
    getTemplate() {
        return createHeaderComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
            this._initEventListeners(); 
        }

        return this.element;
    }

    _initEventListeners() {
        const menuButton = this.element.querySelector('.menu_btn');
        const menu = this.element.querySelector('.header_menu');

        menuButton.addEventListener('click', () => {
            menu.classList.toggle('open');
        });
    }

    removeElement() {
        this.element = null;
    }
}
