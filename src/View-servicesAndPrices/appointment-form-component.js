import { createElement } from '../framework/render.js';

function createAppointmentFormTemplate() {
    return `<div class="contact-form-overlay">
    <div class="contact-form">
        <button class="close-button">✖</button>
        <h2>Запись на прием</h2>
        <form id="appointment-form">
            <label for="name">Имя:</label>
            <input type="text" id="name" placeholder="Ваше имя" required>

            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Ваш email" required>

            <label for="phone">Телефон:</label>
            <input type="tel" id="phone" placeholder="Ваш телефон" required>

            <label for="date">Дата приема:</label>
            <input type="date" id="date" required>

            <label for="time">Время приема:</label>
            <input type="time" id="time" required>

            <label for="message">Сообщение:</label>
            <textarea id="message" placeholder="Введите ваше сообщение" rows="4"></textarea>

            <button type="submit">Оставить заявку на запись</button>
        </form>
    </div>
</div>

    `;
}

export default class AppointmentFormComponent {
    getTemplate() {
        return createAppointmentFormTemplate();
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
            this.#initEventListeners();
        }
        return this.element;
    }

    #initEventListeners() {
        this.element.querySelector('.close-button').addEventListener('click', this.close.bind(this));
        this.element.querySelector('#appointment-form').addEventListener('submit', this.handleSubmit.bind(this));
    }

    close() {
        this.element.remove();
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.element.querySelector('#name').value;
        const phone = this.element.querySelector('#phone').value;
        const date = this.element.querySelector('#date').value;
        const time = this.element.querySelector('#time').value;
        const message = this.element.querySelector('#message').value;

      
        // Здесь можно добавить логику для обработки данных формы, пожалуйста, адаптируйте под ваши нужды.
        console.log('Запись на прием:', { name, phone, date, time, message  });

        this.close(); // Закрывать форму после успешной записи (можно изменить логику)
    }
}
