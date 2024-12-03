import { createElement } from '../framework/render.js';
import AppointmentFormComponent from './appointment-form-component.js'; 

function createTopComponentTemplate() {
  return (
    ` <div class="container_top">
                <div class="top_content ">
                    <h3 class="top_title "> Улыбка вашей мечты начинается здесь!</h3>
                    <p class="top_text section_text">Мы рады видеть вас на нашем сайте стомотологии "Искренняя улыбка "😄🦷 Здесь здоровье вашей улыбки — наша главная забота. Мы понимаем, что красивая и здоровая улыбка — это не только признак хорошего самочувствия, но и залог уверенности в себе. Наша команда высококвалифицированных специалистов готова предоставить вам широкий спектр стоматологических услуг, начиная от профилактических осмотров и чисток до сложных восстановительных процедур. Мы здесь, чтобы
                        сделать вашу улыбку ярче! 🌟✨</p>

                    <button class="button_record">Записаться на прием</button>
                </div>
                <picture class="top_img">
                    <img class="top_img_picture" src="images/top1.png" alt="">
                </picture>
            </div>`
  );
}


export default class TopComponent {
  getTemplate() {
    return createTopComponentTemplate();
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
