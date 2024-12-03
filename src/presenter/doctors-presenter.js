
import DoctorsModel from '../model/doctors-model.js';
import DoctorsComponent from '../View-doctots/doctors-component.js';

export default class DoctorsPresenter {
    constructor(container) {
        this.container = container;
        this.model = new DoctorsModel();
        this.component = new DoctorsComponent();
        
        
        this.init();
    }

    init() {
        this.renderDoctors();
    }

    renderDoctors() {
        const doctors = this.model.getDoctors();
        const doctorsContainer = this.component.getElement().querySelector('.container_doctors');

        doctors.forEach(doctor => {
            const doctorItem = document.createElement('div');
            doctorItem.className = 'doctors_item';

            doctorItem.innerHTML = `
                <picture class="doctors_picture">
                    <img src="${doctor.image}" alt="" class="img_doctors">
                </picture>
                <h4 class="doctors_names">${doctor.name}</h4>
                <p class="doctors_item_text"><b>Должность:</b><br>${doctor.position}<br>
                <b>Стаж работы по специальности:</b><br>${doctor.experience}</p>
            `;

            doctorsContainer.appendChild(doctorItem);
        });

        this.container.appendChild(this.component.getElement());
    }
}
