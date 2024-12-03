import ContactsModel from '../model/contacts-model.js';
import ContactsComponent from '../View-contacts/contacts-component.js';


export default class ContactsPresenter {
    constructor(container) {
        this.container = container;
        this.model = new ContactsModel();
        this.component = new ContactsComponent();

        this._init();
    }

    _init() {
        this.renderContacts();
        this._setAppointmentButtonListener();
    }

    renderContacts() {
        const contacts = this.model.getContacts();
        this.container.appendChild(this.component.getElement());
    }

    _setAppointmentButtonListener() {
        const button = this.component.getElement().querySelector('.button_record');
        button.addEventListener('click', () => {
            console.log('Запись на прием!');
            
        });
    }
}
