import {transitionWrapper} from "../../common/transitionTitle";
import {navigation} from "../../common/navigation";
import {navigationMobile} from "../../common/navigation-mobile";

export  function ordersStatusTemplate() {
    return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            <div class="wrapper-navigation-personal-area">
                ${navigation('order-status')}
                ${navigationMobile('/#personal-area/personal-data','история заказов','/#personal-area/discount-and-bonuses')}
            </div>
          
            
            <div id="personal-area-content-js">
                
            </div>
        </div>
    `
}

let link = [
    {
        title: 'Личный кабинет',
        link: '/#personal-area'
    }
]
