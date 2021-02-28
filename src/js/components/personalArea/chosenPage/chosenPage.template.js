import {card} from "../../common/commonCard/card";
import {navigation} from "../../common/navigation";
import {navigationMobile} from "../../common/navigation-mobile";
import {breadCrumbs} from '../../common/breadCrumbs'

export  function chosenPageTemplate(link, goods) {
    return `
        <div id="personal-area-js" class="wrapper-personal-area">
            ${breadCrumbs(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            <div class="name-user">Имя пользователя</div>
            <div class="wrapper-navigation-personal-area">
                ${navigation('favorites')}
                ${navigationMobile('/#personal-area/discount-and-bonuses','избранное','/#personal-area/basket')}
            </div>
        </div>
        <div class="wrapper-favorite">
            <div class="cards">
                    ${goods.map(i => {
                    return `
                    ${card(i)}
                    `}).join('')}
                </div> 
        </div>
    `
}

