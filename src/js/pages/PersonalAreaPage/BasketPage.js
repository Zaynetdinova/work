import {Page} from "../../core/Page";
import {OptMoyo} from "../../components/OptMoyo/OptMoyo";
import {Header} from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";

import {Basket} from "../../../js/components/personalArea/Basket/Basket";

export class BasketPage extends Page{
  getRoot() {
    this.app = new OptMoyo( {
      components: [
        Header,
        Basket,
        Footer,
      ]
    })
    return this.app.getRoot()
  }

  afterRender() {
    this.app.init()
    super.afterRender()
  }
}
