import {navigation} from '../../common/navigation'
import {navigationMobile} from '../../common/navigation-mobile'
import {basketPageTemplate} from './view/goodsInBaskets/basketPage.template'
import {breadCrumbs} from '../../common/breadCrumbs'


export function basketTemplate(link) {
  return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${breadCrumbs(link)}
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
