import {transitionWrapper} from '../../common/transitionTitle'
import {navigation} from '../../personalArea/view/navigation'
import {titleShopping} from '../components/titleShopping'
import {shoppingDelivery} from './view/shoppingDelivery'

export function aboutShoppingPageTemplate() {
	return `
        <div>
            ${transitionWrapper(link)}
            ${titleShopping()}
            ${shoppingDelivery()}
        </div>
    `
}

let link = [
	{
		title: 'Хлебные крошки',
		link: '/#about-shopping'
	}
]