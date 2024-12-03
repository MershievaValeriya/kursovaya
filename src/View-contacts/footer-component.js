import {createElement} from '../framework/render.js';


function createFooterComponentTemplate() {
    return (
        `    <footer class="footer">
        <div class="container footer_inner">
            <a class="logo" href="#">
                <img class="logo_img" src="images/logo2.png" alt="">
            </a>
            <nav class="menu footer_menu ">
                <ul class="menu_list footer_menu_list ">
                   <li class="menu_list_item">
                        <a class="menu_list_link" href="general.html">Главная</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="servicesAndPrices.html">Услуги и цены</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="stock.html">Акции</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="doctors.html">Врачи</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="reviews.html">Отзывы</a>
                    </li>
                    <li class="menu_list_item">
                        <a class="menu_list_link" href="contacts.html">Контакты</a>
                    </li>
                </ul>
            </nav>
            <div class="footer_contacts">
                <a class="phone_footer" href="tel:+4565779867">+45 65 77 98 67</a>
                <a class="email" href="mailto:sincereSmile@gmail.com">sincereSmile@gmail.com</a>
                <ul class="container footer_social">
                    <li class="footer_social_item"><a href="#" class="footer_social_link"><img src="images/whatsapp.png"
                                alt="" class="footer_social_img"></a></li>

                    <li class="footer_social_item"><a href="#" class="footer_social_link"><img src="images/vk.png"
                                alt="" class="footer_social_img"></a> </li>

                    <li class="footer_social_item"><a href="#" class="footer_social_link"><img
                                src="images/instagram.png" alt="" class="footer_social_img"></a></li>
                </ul>


            </div>
        </div>
    </footer>`
      );
}


export default class FooterComponent {
  getTemplate() {
    return createFooterComponentTemplate();
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
