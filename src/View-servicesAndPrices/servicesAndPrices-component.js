import {createElement} from '../framework/render.js';
import AppointmentFormComponent from './appointment-form-component.js'; 
import ContactFormComponent from './сontact-form-component.js'; 
import CallbackFormComponent from './callback-form-component.js'; 

function createServicesAndPricesComponentTemplate() {
    return (
        `<div class="general">
    <div>
        <h2 class="for your">Улуги и цены на услуги стомотологии "Искренняя улыбка"</h2>

        <div class="services-inner">
            <h3>Услуги </h3>

            <div class="services-dropdown">
                <div class="services-dropdown">
                    <ul class="services-title">
                        <li>Имплантация зубов</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Имплантация зубов - <span class="service-price">30,000 руб.</span></li>
                        <li>Имплантация зубов по системе Osstem - <span class="service-price">35,000 руб.</span></li>
                        <li>Имплантация зубов по системе Semados - <span class="service-price">33,000 руб.</span></li>
                        <li>Имплантация зубов по системе Hiossen - <span class="service-price">32,000 руб.</span></li>
                        <li>Имплантация зубов по системе Straumann - <span class="service-price">40,000 руб.</span></li>
                        <li>Имплантация зубов по системе Anthogyr - <span class="service-price">34,000 руб.</span></li>
                        <li>Костная пластика - <span class="service-price">25,000 руб.</span></li>
                        <li>Имплантация зубов Все на 4 (6) - <span class="service-price">150,000 руб.</span></li>
                    </ul>
                </div>

                <div class="services-dropdown">
                    <ul class="services-title">
                        <li>Протезирование зубов</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Безметалловые цельнокерамические конструкции - <span class="service-price">45,000
                                руб.</span></li>
                        <li>Съемные протезы - <span class="service-price">20,000 руб.</span></li>
                        <li>Бюгельное протезирование - <span class="service-price">30,000 руб.</span></li>
                        <li>Циркониевые коронки - <span class="service-price">40,000 руб.</span></li>
                        <li>Виниры - <span class="service-price">25,000 руб.</span></li>
                        <li>Протезирование металлокерамикой - <span class="service-price">35,000 руб.</span></li>
                        <li>Зуботехническая лаборатория - <span class="service-price">10,000 руб.</span></li>
                    </ul>
                </div>

                <div class="services-dropdown">
                    <ul class="services-title">
                        <li>Терапевтическая стоматология</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Лечение кариеса - <span class="service-price">3,000 руб.</span></li>
                        <li>Лечение каналов зуба - <span class="service-price">5,000 руб.</span></li>
                        <li>Профессиональная чистка - <span class="service-price">2,500 руб.</span></li>
                        <li>Отбеливание - <span class="service-price">6,000 руб.</span></li>
                        <li>Удаление зуба - <span class="service-price">2,000 руб.</span></li>
                        <li>Реставрация зуба - <span class="service-price">4,000 руб.</span></li>
                        <li>Лечение дёсен - <span class="service-price">3,500 руб.</span></li>
                        <li>Пластика десны - <span class="service-price">8,000 руб.</span></li>
                        <li>Профилактика - <span class="service-price">1,500 руб.</span></li>
                        <li>Лечение зубов под микроскопом - <span class="service-price">7,000 руб.</span></li>
                    </ul>
                </div>

                <div class="services-dropdown">
                    <ul class="services-title">
                        <li>Исправление прикуса</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Брекеты Damon - <span class="service-price">60,000 руб.</span></li>
                        <li>Керамические брекеты - <span class="service-price">70,000 руб.</span></li>
                        <li>Металлические брекеты - <span class="service-price">50,000 руб.</span></li>
                        <li>Пластиковые брекеты - <span class="service-price">55,000 руб.</span></li>
                        <li>Безлигатурные брекет-системы - <span class="service-price">65,000 руб.</span></li>
                        <li>Лингвальные брекет-системы - <span class="service-price">80,000 руб.</span></li>
                        <li>Ортодонтические пластинки - <span class="service-price">20,000 руб.</span></li>
                        <li>Элайнеры - <span class="service-price">75,000 руб.</span></li>
                    </ul>
                </div>

                <div class="services-dropdown">
                    <ul class="services-title">
                        <li>Диагностика</li>
                    </ul>
                    <ul class="services-dropdown-content">
                        <li>Радиовизиография - <span class="service-price">1,500 руб.</span></li>
                        <li>Компьютерная томография - <span class="service-price">4,500 руб.</span></li>
                        <li>Панорамный снимок - <span class="service-price">2,000 руб.</span></li>
                    </ul>
                </div>

            </div>

            <button class="button_contact">Связаться</button>
            <button class="button_call">Заявка на обратный звонок</button>
            <button class="button_appoint">Записаться на прием</button>
        </div>
    </div>
</div>`
      );
}


export default class ServicesAndPricesComponent {
  getTemplate() {
    return createServicesAndPricesComponentTemplate();
  }


  getElement() {
    if (!this.element) {
        this.element = createElement(this.getTemplate());
        this.element.querySelector('.button_appoint').addEventListener('click', this.handleRecordButtonClick.bind(this));
        this.element.querySelector('.button_contact').addEventListener('click', this.handleContactButtonClick.bind(this));
        this.element.querySelector('.button_call').addEventListener('click', this.handleCallbackButtonClick.bind(this));
        this.#initEventListeners();
    }
    return this.element;
    }

    #initEventListeners() {
        const titles = this.element.querySelectorAll('.services-title');
        titles.forEach(title => {
            title.addEventListener('click', () => {
                const dropdownContent = title.nextElementSibling;
                dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
            });
        });
    }

    handleRecordButtonClick() {
        const appointmentForm = new AppointmentFormComponent();
        document.body.append(appointmentForm.getElement());
    }

    handleContactButtonClick() {
        const contactForm = new ContactFormComponent();
        document.body.append(contactForm.getElement());
    }

    handleCallbackButtonClick() {
        const callbackForm = new CallbackFormComponent();
        document.body.append(callbackForm.getElement());
    }


  removeElement() {
    this.element = null;
  }
}
