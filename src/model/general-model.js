export default class GeneralModel {
    #headerData = {};
    #topData = {};
    #servicesData = [];
    #stocksData = [];
    #aboutText = '';
    #teamMembers = [];
    #observers = [];

    constructor() {
        this.#initializeData();
    }

    #initializeData() {
        this.#headerData = {};
        this.#topData = {};
        this.#servicesData = [];
        this.#stocksData = [];
        this.#aboutText = '';
        this.#teamMembers = [];
    }
    

    get header() {
        return this.#headerData;
    }

    get top() {
        return this.#topData;
    }

    get services() {
        return this.#servicesData;
    }

    get stocks() {
        return this.#stocksData;
    }

    get aboutText() {
        return this.#aboutText;
    }

    get teamMembers() {
        return this.#teamMembers;
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    removeObserver(observer) {
        this.#observers = this.#observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.#observers.forEach(observer => observer());
    }
}