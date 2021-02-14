import {transitionWrapper} from "../../common/transitionTitle";
import {navigation} from "../../common/navigation";
import {navigationMobile} from "../../common/navigation-mobile";
import {wrapOrder} from "./components/wrapOrder";
import {wrapOrderMobail} from './components/wrapOrderMobail'

export  function ordersStatusTemplate() {
    return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            <div class="name-user">Имя пользователя</div>
            <div class="wrapper-navigation-personal-area">
                ${navigation('order-status')}
                ${navigationMobile('/#personal-area/personal-data','история заказов','/#personal-area/discount-and-bonuses')}
            </div>
          
            
            <div id="personal-area-content-js">
                <div class="desktop">
                    ${wrapOrder()}
                </div>
                <div class="mobail">
                    ${wrapOrderMobail()}              
                </div>
            </div>
        </div>
    `
}

let link = [
    {
        title: 'История заказов',
        link: '/#personal-area/order-status'
    }
]
