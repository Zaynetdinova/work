import {navigation} from "../../common/navigation";
import {discountAndBonusesPageTemplate} from "./view/discountAndBonusesPageTemplate";
import {navigationMobile} from "../../common/navigation-mobile";
import {breadCrumbs} from '../../common/breadCrumbs'

export function discountAndBonusesTemplate(link) {
    return `
	    <div id="personal-area-js" class="wrapper-personal-area">
            ${breadCrumbs(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            <div class="name-user">Имя пользователя</div>
            <div class="wrapper-navigation-personal-area">
                ${navigation('discount')}
                ${navigationMobile('/#personal-area/order-status','Скидки и Бонусы','/#personal-area/favorites')}
            </div>
            
            
            <div id="personal-area-content-js">
                ${discountAndBonusesPageTemplate()} 
            </div>
        </div>
	`
}
