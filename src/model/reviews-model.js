// reviews-model.js

export default class ReviewsModel {
    constructor() {
        this.loadReviews(); // Загружаем отзывы при создании модели
    }

    loadReviews() {
        const storedReviews = localStorage.getItem('reviews'); // Получаем данные из localStorage
        this.reviews = storedReviews ? JSON.parse(storedReviews) : []; // Если данные найдены, парсим их, иначе создаем пустой массив
    }

    saveReviews() {
        localStorage.setItem('reviews', JSON.stringify(this.reviews)); // Сохраняем актуальные отзывы в localStorage
    }

    getReviews() {
        return this.reviews; // Возвращаем текущие отзывы
    }

    addReview(review) {
        this.reviews.push(review); // Добавляем новый отзыв в массив
        this.saveReviews(); // Сохраняем обновленный массив в localStorage
    }

    deleteReview(index) {
        this.reviews.splice(index, 1); // Удаляем отзыв по индексу
        this.saveReviews(); // Сохраняем обновленный массив в localStorage
    }
}
