import {createElement} from '../framework/render.js';


function createAboutComponentTemplate() {
    return (
        ` <div>
                <h3 class="for your">Интересное о Нас</h3>
                <div class="about_us">
                    <div class="container about_inner">
                        <div class="about_content">
                            <h2 class="about_title">
                                Современное оборудование для вашего здоровья
                            </h2>
                            <p class="about_text section_text">
                                В нашей стоматологической клинике мы гордимся тем, что используем только самое
                                современное и
                                высококачественное оборудование. Мы понимаем, что здоровье ваших зубов и десен требует
                                не
                                только
                                профессионализма врачей, но и надежных технологий.
                            </p>


                        </div>
                        <ul class="about_list section_content_descr">
                            <li class="about_item"><img class="about_item_picture" src="images/about-1.jpg" alt=""></li>
                            <li class="about_item"><img class="about_item_picture" src="images/about-2.jpg" alt=""></li>
                            <li class="about_item"><img class="about_item_picture" src="images/about-3.jpg" alt=""></li>
                            <li class="about_item"><img class="about_item_picture" src="images/about-4.jpg" alt=""></li>
                        </ul>
                    </div>
                </div>
            </div>`
      );
}


export default class AboutComponent {
  getTemplate() {
    return createAboutComponentTemplate();
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
