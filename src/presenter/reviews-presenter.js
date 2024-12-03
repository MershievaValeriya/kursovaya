import ReviewsModel from '../model/reviews-model.js';
import ReviewsComponent from '../View-reviews/reviews-component.js';

export default class ReviewsPresenter {
    constructor(container) {
        this.container = container;

        this.model = new ReviewsModel(); 
        this.renderReviews(); 
        this._setFormSubmitListener(); 
    }

    renderReviews() {

        const onDelete = (index) => {
            this.model.deleteReview(index); 
            this.renderReviews(); // Перерисовываем отзывы
        };
        
        const component = new ReviewsComponent(this.model.getReviews(), onDelete); 
        this.container.innerHTML = ''; 
        this.container.appendChild(component.getElement()); 
    }

    _setFormSubmitListener() {
        const form = this.container.querySelector('#commentForm'); 

        if (form) {
            form.addEventListener('submit', (event) => {
                event.preventDefault(); 

              
                const name = form.querySelector('#name').value;
                const date = form.querySelector('#date').value;
                const reviewText = form.querySelector('#reviewText').value;
                const doctorName = form.querySelector('#doctorName').value;

                
                const newReview = { name, date, text: reviewText, doctorName };

                
                this.model.addReview(newReview);

                
                this.renderReviews();
                
                
                form.reset();
            });
        }
    }
}
