import {transitionWrapper} from "../../common/transitionTitle";
import {navigation} from "../../common/navigation";
import {navigationMobile} from "../../common/navigation-mobile";
import {basketPageTemplate} from "./view/basketPage.template";


export function basketTemplate() {
  return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            <div class="name-user">Имя пользователя</div>
            <div class="wrapper-navigation-personal-area">
                ${navigation('basket')}
                ${navigationMobile('/#personal-area/favorites','Корзина','/#personal-area/personal-data')}
            </div>

            <div id="personal-area-content-js">
                ${basketPageTemplate()}
            </div>
        </div>
    `
}


let link = [
  {
    title: 'Корзина',
    link: '/#personal-area/basket'
  }
]

