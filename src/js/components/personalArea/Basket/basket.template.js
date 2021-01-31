import {transitionWrapper} from "../../common/transitionTitle";
import {navigation} from '../view/navigation'
import {basketPageTemplate} from "./view/basketPage.template";
import {deliveryPageTemplate} from "./view/deliveryPage.template";
import {paymentPageTemplate} from "./view/paymentPage.template";

export function basketTemplate() {
  return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <div class="exit">Выйти</div>
            </div>
            
            ${navigation('basket')}
            
            <div id="personal-area-content-js">
                ${basketPageTemplate()}
            </div>
        </div>
    `
}

// ${basketPageTemplate()}
// ${deliveryPageTemplate()}

let link = [
  {
    title: 'Личный кабинет',
    link: '/#personal-area'
  }
]
