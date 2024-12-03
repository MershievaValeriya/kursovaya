import { createElement } from '../framework/render.js';
import AppointmentFormComponent from './appointment-form-component.js'; // Импорт компонента формы
import ContactFormComponent from './сontact-form-component.js'; // Импортируем компонент формы связи
import CallbackFormComponent from './callback-form-component.js'; // Импортируем компонент формы обратного звонка

function createServicesComponentTemplate() {
    return (

        `<div class="general">
                <div>
                    <h3 class="for your">Важное для Вас</h3>

                    <div class="services-inner">
                        <h3>Услуги </h3>

                        <div class="services-dropdown">
                            <ul class="services-title">
                                <li>Имплантация зубов</li>
                            </ul>
                            <ul class="services-dropdown-content">
                                <li>Имплантация зубов</li>
                                <li>Имплантация зубов по системе Osstem</li>
                                <li>Имплантация зубов по системе Semados</li>
                                <li>Имплантация зубов по системе Hiossen</li>
                                <li>Имплантация зубов по системе Straumann</li>
                                <li>Имплантация зубов по системе Anthogyr</li>
                                <li>Костная пластика</li>
                                <li>Имплантация зубов Все на 4 (6)</li>
                            </ul>
                        </div>

                        <div class="services-dropdown">
                            <ul class="services-title">
                                <li>Протезирование зубов</li>
                            </ul>
                            <ul class="services-dropdown-content">
                                <li>Безметалловые цельнокерамические конструкции</li>
                                <li>Съемные протезы</li>
                                <li>Бюгельное протезирование</li>
                                <li>Циркониевые коронки</li>
                                <li>Виниры</li>
                                <li>Протезирование металлокерамикой</li>
                                <li>Зуботехническая лаборатория</li>
                            </ul>
                        </div>

                        <div class="services-dropdown">
                            <ul class="services-title">
                                <li>Терапевтическая стомотология</li>
                            </ul>
                            <ul class="services-dropdown-content">
                                <li>Лечение кариеса</li>
                                <li>Лечение каналов зуба</li>
                                <li>Профессиональная чистка</li>
                                <li>Отбеливание</li>
                                <li>Удаление зуба</li>
                                <li>Реставрация зуба</li>
                                <li>Лечение дёсен</li>
                                <li>Пластика десны</li>
                                <li>Профилактика</li>
                                <li>Лечение зубов под микроскопом</li>
                            </ul>
                        </div>

                        <div class="services-dropdown">
                            <ul class="services-title">
                                <li>Исправление прикуса</li>
                            </ul>
                            <ul class="services-dropdown-content">
                                <li>Брекеты Damon</li>
                                <li>Керамические брекеты</li>
                                <li>Металлические брекеты</li>
                                <li>Пластиковые брекеты</li>
                                <li>Безлигатурные брекет-системы</li>
                                <li>Лингвальные брекет-системы</li>
                                <li>Ортодонтические пластинки</li>
                                <li>Элайнеры</li>
                            </ul>
                        </div>

                        <div class="services-dropdown">
                            <ul class="services-title">
                                <li>Диагностика</li>
                            </ul>
                            <ul class="services-dropdown-content">
                                <li>Радиовизиография</li>
                                <li>Компьютерная томография</li>
                                <li>Панорамный снимок</li>
                                <li>Пластиковые брекеты</li>

                            </ul>
                        </div>

                        <button class="button_contact">Связаться</button>
                        <button class="button_call">Заявка на обратный звонок</button>
                        <button class="button_appoint">Записаться на прием</button>
                    </div>
                </div>
            </div>`
    );
}

export default class ServicesComponent {
    getTemplate() {
        return createServicesComponentTemplate();
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
