import StockModel from '../model/stock-model.js';
import StockComponent from '../View-stock/stock-component.js';

export default class StockPresenter {
    constructor(container) {
        this.container = container;
        this.model = new StockModel();
        this.component = new StockComponent();
        
    
        this.init();
    }

    init() {
        this.renderStocks();
    }

    renderStocks() {
        const stocks = this.model.getStocks();
        const stocksContainer = this.component.getElement().querySelector('.container_stock');

        stocks.forEach(stock => {
            const stockItem = document.createElement('div');
            stockItem.className = 'stock_item';
            
            stockItem.innerHTML = `
                <img src="${stock.image}" alt="" class="img_stock">
                <h4 class="stock_item_title">${stock.title}</h4>
                <p class="stock_item_text">${stock.description}</p>
                <button class="button">Консультация</button>
            `;

            stocksContainer.appendChild(stockItem);
        });

        this.container.appendChild(this.component.getElement());
    }
}
