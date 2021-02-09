import {transitionWrapper} from '../../common/transitionTitle'
import {shoppingDelivery} from './view/shoppingDelivery'
import {navigationInformationAboutShopping} from "../../common/navigationInformationAboutShopping";
import {navigationMobile} from "../../common/navigation-mobile";

export function aboutShoppingPageTemplate() {
	return `
        <div>
            ${transitionWrapper(link)}
           	<div class="title-shopping">О покупках</div>
           	<div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('about-delivery')}
           	    ${navigationMobile('/#information/about-payment','доставка','/#information/question-answers')}
            </div>
            ${shoppingDelivery()}
        </div>
    `
}

let link = [
	{
		title: 'Доставка',
		link: '/#information/about-shopping'
	}
]