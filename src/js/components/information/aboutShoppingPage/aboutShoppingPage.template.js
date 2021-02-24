import {shoppingDelivery} from './view/shoppingDelivery'
import {navigationInformationAboutShopping} from "../../common/navigationInformationAboutShopping";
import {navigationMobile} from "../../common/navigation-mobile";
import {breadCrumbs} from '../../common/breadCrumbs'

export function aboutShoppingPageTemplate(link) {
	return `
        <div>
            ${breadCrumbs(link)}
           	<div class="title-shopping">О покупках</div>
           	<div class="wrapper-navigation-info">
           	    ${navigationInformationAboutShopping('about-delivery')}
           	    ${navigationMobile('/#information/about-payment','доставка','/#information/question-answers')}
            </div>
            ${shoppingDelivery()}
        </div>
    `
}