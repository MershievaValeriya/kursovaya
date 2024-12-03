import { createElement } from '../framework/render.js';


function createStockComponentTemplate() {
    return (
        `<div class="general">
        
        <div class="container_stock_main">
                <h3>Скидки и акции на декабрь 2024 г.</h3>
                <div class="container_stock">

                    <div class="stock_item">
                        <img src="images/stock1.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">Комплекс профессиональной гигиены полости рта за 3500 руб</h4>
                        <p class="stock_item_text">Ультразвук, Air Flow, фторирование, полировка.<br> Сообщить до
                            приема.
                        </p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                    <div class="stock_item">
                        <img src="images/stock2.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">Премиальный французский Имплант Anthogyr с установкой за 35 000 руб
                        </h4>
                        <p class="stock_item_text">Сообщить до приема.</p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                    <div class="stock_item">
                        <img src="images/stock3.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">Зафиксируем ваши съемные протезы на локаторах за 125 000 руб.</h4>
                        <p class="stock_item_text">Что входит в систему крепления Locator:<br>
                            - Консультация хирурга, ортопеда;<br>
                            - План лечения;<br>
                            - Имплантация;<br>
                            - Акриловый протез;<br>
                            - Анестезия;<br>
                            - Удаление зубов, костная пластика.</p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                    <div class="stock_item">
                        <img src="images/stock4.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">Все зубы сразу за 230 000 руб. под ключ!</h4>
                        <p class="stock_item_text">Несъемный протез на 4 имплантах на всю челюсть!<br>Сообщить до
                            приема.
                        </p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                    <div class="stock_item">
                        <img src="images/stock5.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">Лечение с применением кислородной седации (закись азота) 2450 руб.
                            Безопасно и эффективно.</h4>
                        <p class="stock_item_text">Сообщить до приема.</p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                    <div class="stock_item">
                        <img src="images/stock10.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">ЛЕЧЕНИЕ ЗУБОВ ВО СНЕ, ПЕРВЫЙ ЧАС НАРКОЗА 15 000 руб, ПОСЛЕДУЮЩИЕ
                            ЧАСЫ -
                            9 000 руб</h4>
                        <p class="stock_item_text">Сообщить до приема.</p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                    <div class="stock_item">
                        <img src="images/stock6.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">КОМПЛЕКСНАЯ ПРОФЕССИОНАЛЬНАЯ ГИГИЕНА ЗУБОВ ЗА ВЗРОСЛЫМ 5000 РУБ.,
                            ДЕТЯМ
                            4000 РУБ.</h4>
                        <p class="stock_item_text">Снятие зубного камня методом ультразвук;<br>
                            Удаление пигментированного зубного налета методом AirFlow;<br>
                            Фторирование всех поверхностей зубов.<br>Сообщить до приема.</p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                    <div class="stock_item">
                        <img src="images/stock7.jpg" alt="" class="img_stock">
                        <h4 class="stock_item_title">Скидка 25% на чистку пациентам с имплантами, установленными в нашей
                            клинике!</h4>
                        <p class="stock_item_text">Сообщить до приема.</p>
                        <button class="button_consultation">Консультация</button>
                    </div>

                </div>
            </div>
            </div>`
    );
}


export default class StockComponent {
    getTemplate() {
        return createStockComponentTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
            this.#initEventListeners(); // Новый метод для регистрации всех обработчиков
        }
        return this.element;
    }

    #initEventListeners() {
        // Ищем все кнопки "Консультация" и регистрируем обработчик для каждой
        const buttons = this.element.querySelectorAll('.button_consultation');
        
        buttons.forEach(button => {
            button.addEventListener('click', this.handleConsultationButtonClick.bind(this));
        });
    }

    handleConsultationButtonClick() {
        const consultationInfo = document.createElement('div');
        consultationInfo.innerHTML = `
            <div class="info-overlay">
                <div class="info-content">
                    <button class="close-button">✖</button>
                    <h2>Консультация</h2>
                    <p>Запишитесь на консультацию, чтобы узнать больше о наших услугах.</p>
                    <p>Стоимость консультации: от 1000 рублей.</p>
                    <p>График работы: Пн - Пт, с 9:00 до 18:00.</p>
                    <p>Вы можете позвонить нам по телефону: <strong>+7 (999) 123-45-67</strong></p>
                </div>
            </div>
        `;

        document.body.append(consultationInfo);

        consultationInfo.querySelector('.close-button').addEventListener('click', () => {
            consultationInfo.remove();
        });
    }

    removeElement() {
        this.element = null;
    }
}