import {createElement} from '../framework/render.js';


function createTeamComponentTemplate() {
    return (
        `<div class="container section_inner">
                <div class="team_descr section_descr">
                    <h2 class="team_title title">
                        Наша команда
                    </h2>
                    <p class="team_text section_text">
                        В стоматологии "Искренняя улыбка" работает команда опытных и квалифицированных специалистов,
                        включая стоматологов, гигиенистов и ортодонтов. Каждый из наших сотрудников проходит регулярное
                        обучение и повышение квалификации, чтобы оставаться в курсе современных технологий и методик
                        лечения.
                    </p>
                </div>
                <ul class="team_list">
                    <li class="team_item"><img src="images/team-1.jpeg" alt="" class="team_item_picture"></li>
                    <li class="team_item"><img src="images/team-2.jpeg" alt="" class="team_item_picture"></li>
                    <li class="team_item"><img src="images/team-3.jpeg" alt="" class="team_item_picture"></li>
                    <li class="team_item"><img src="images/team-4.jpeg" alt="" class="team_item_picture"></li>
                </ul>
            </div>`
      );
}


export default class TeamComponent {
  getTemplate() {
    return createTeamComponentTemplate();
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
