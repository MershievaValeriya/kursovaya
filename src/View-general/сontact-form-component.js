
import { createElement } from '../framework/render.js';

function createContactFormTemplate() {
    return `
      <div class="contact-form-overlay" aria-labelledby="contact-form-title" role="dialog" aria-modal="true">
    <div class="contact-form">
        <button class="close-button" type="button" aria-label="Закрыть форму">✖</button>
        <h2 id="contact-form-title">Связаться с нами</h2>
        <form id="contact-form" aria-labelledby="contact-form-title">
            <label for="name">Имя:</label>
            <input type="text" id="name" name="name" placeholder="Ваше имя" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Ваш email" required>
            
            <label for="message">Сообщение:</label>
            <textarea id="message" name="message" placeholder="Ваше сообщение" required></textarea>
            
            <button type="submit">Отправить</button>
        </form>
    </div>
</div>

    `;
}

export default class ContactFormComponent {
    getTemplate() {
        return createContactFormTemplate();
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
        this.element.querySelector('#contact-form').addEventListener('submit', this.handleSubmit.bind(this));
    }

    close() {
        this.element.remove();
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.element.querySelector('#name').value;
        const email = this.element.querySelector('#email').value;
        const message = this.element.querySelector('#message').value;

        console.log('Сообщение отправлено:', { name, email, message });
        this.close();
    }
}
