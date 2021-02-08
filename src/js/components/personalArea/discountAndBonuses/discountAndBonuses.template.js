import {navigation} from "../../common/navigation";
import {transitionWrapper} from "../../common/transitionTitle";
import {discountAndBonusesPageTemplate} from "./view/discountAndBonusesPageTemplate";

export function discountAndBonusesTemplate() {
    return `
	    <div id="personal-area-js" class="wrapper-personal-area">
            ${transitionWrapper(link)}
            <div class="header-personal-area">
                <div class="title">Личный кабинет</div>
                <a href="/" class="exit">Выйти</a>
            </div>
            
            ${navigation('discount')}
            
            <div id="personal-area-content-js">
                ${discountAndBonusesPageTemplate()}
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
