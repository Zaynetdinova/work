import {transitionWrapper} from '../../common/transitionTitle'
import {shoppingDelivery} from './view/shoppingDelivery'

export function aboutShoppingPageTemplate() {
	return `
        <div>
            ${transitionWrapper(link)}
           	<div class="title-shopping">О покупках</div>
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