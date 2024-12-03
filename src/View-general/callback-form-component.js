
import { createElement } from '../framework/render.js';

function createCallbackFormTemplate() {
    return `
        <div class="callback-form-overlay">
    <div class="callback-form">
        <button class="close-button">✖</button>
        <h2>Заявка на обратный звонок</h2>
        <form id="callback-form">
            <label for="name">Имя:</label>
            <input type="text" id="name" placeholder="Введите ваше имя" required>
            
            <label for="phone">Телефон:</label>
            <input type="tel" id="phone" placeholder="Введите ваш телефон" required>
            
            <button type="submit">Отправить</button>
        </form>
    </div>
</div>

    `;
}

export default class CallbackFormComponent {
    getTemplate() {
        return createCallbackFormTemplate();
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
        this.element.querySelector('#callback-form').addEventListener('submit', this.handleSubmit.bind(this));
    }

    close() {
        this.element.remove();
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.element.querySelector('#name').value;
        const phone = this.element.querySelector('#phone').value;

        console.log('Заявка на обратный звонок:', { name, phone });
        this.close();
    }
}
