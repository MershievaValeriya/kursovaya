import {createElement} from '../framework/render.js';


function createDoctorsComponentTemplate() {
    return (
        `<section class="doctors">
            <h3>Врачи стоматологии "Искренняя улыбка"</h3>
            <div class="container_doctors">

                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors1.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Комаров Михаил Матвеевич</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-хирург-имплантолог<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2021 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors2.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Скворцов Михаил Михайлович</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-хирург-имплантолог-ортопед<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2019 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors3.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Виноградов Никита Иванович</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-терапевт-эндодонтист<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2019 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors4.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Васильева Елизавета Дмитриевна</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-терапевт<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2018 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors5.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Воронин Александр Дмитриевич</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-терапевт-эндодонтист-микроскопист<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2019 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors6.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Прохорова Милана Лукинична</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2021 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors8.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Егорова Алиса Артёмовна</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2019 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors9.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Вишневский Артём Константинович</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-ортодонт<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2019 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors10.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Алексеева Екатерина Владимировна</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-ортодонт<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2018 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors11.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Денисова Ульяна Германовна</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-терапевт<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2017 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors12.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Безруков Арсений Максимович</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-терапевт<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2020 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors13.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Зуева София Станиславовна</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог-терапевт-эндодонтист<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2019 года
                    </p>
                </div>
                <div class="doctors_item">
                    <picture class="doctors_picture">
                        <img src="images/doctors14.jpg" alt="" class="img_doctors">
                    </picture>
                    <h4 class="doctors_names">Моисеева Софья Эмировна</h4>
                    <p class="doctors_item_text"><b>Должность:</b><br>
                        Врач-стоматолог<br>
                        <b>Стаж работы по специальности:</b><br>
                        с 2021 года
                    </p>
                </div>
            </div>
        </section> `
      );
}


export default class DoctorsComponent {
  getTemplate() {
    return createDoctorsComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}
