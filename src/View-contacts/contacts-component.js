import {createElement} from '../framework/render.js';
import AppointmentFormComponent from './appointment-form-component.js'; // Импорт компонента формы

function createContactComponentTemplate() {
    return (
        `  <section class="contacts">
            <h3>Адрес стоматологии "Искренняя улыбка"</h3>
            <div class="container contacts_inner">
                <div class="contacts_content">
                    <h2 class="contacts_title ">Стоматология "Искренняя улыбка" на ул.Столярова, 29</h2>
                    <p class="contacts_text section_text">Телефон: +7(843) 5-587-661<br>
                        Электронная почта: gagarina@stomat9.ru<br><br>
                        Мы работаем:<br>
                        ПН-ПТ: 07:30-20:00,<br>
                        СБ: 09:00-15:00,<br>
                        ВС и праздничные дни-выходной<br><br>

                        Руководитель: Мартынов Илья Георгиевич<br>
                        Главный бухгалтер: Иванова Милана Викторовна<br><br>

                        Отдел кадров и экономисты: 2-102-132 <br>
                        Администрация: 2-102-132 <br>
                        Бухгалтерия: 2-102-132
                    </p>
                    <button class="button_record">Записаться на прием</button>
                </div>

                <picture class="contacts_cart">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2242.722014967245!2d49.05712967646477!3d55.79806477310101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415eacd48ea0e161%3A0x5bc5375f73cad31!2z0YPQuy4g0KHRgtC-0LvRj9GA0L7QstCwLCAyOSwg0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9LCA0MjAwMzA!5e0!3m2!1sru!2sru!4v1731927603383!5m2!1sru!2sru"
                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </picture>
            </div>

        </section>`
      );
}


export default class ContactComponent {
  getTemplate() {
    return createContactComponentTemplate();
  }


  getElement() {
    if (!this.element) {
        this.element = createElement(this.getTemplate());
        this.element.querySelector('.button_record').addEventListener('click', this.handleRecordButtonClick.bind(this));
    }
    return this.element;
 }

  handleRecordButtonClick() {
      const appointmentForm = new AppointmentFormComponent();
      document.body.append(appointmentForm.getElement());
  }

  removeElement() {
    this.element = null;
  }
}
