import {navigation} from "../../common/navigation";
import {navigationMobile} from "../../common/navigation-mobile";
import {wrapOrder} from "./components/wrapOrder";
import {wrapOrderMobile} from './components/wrapOrderMobail'
import {breadCrumbs} from '../../common/breadCrumbs'

export  function ordersStatusTemplate(link) {
    return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${breadCrumbs(link)}
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
                <div class="mobile">
                    ${wrapOrderMobile()}
                </div>
            </div>
        </div>
    `
}