import {$} from '../dom'
import {ActiveRoute} from './ActiveRoute'

export class Router {
	constructor(selector, routes) {
		if(!selector) {
			throw new Error('Selector is not provided')
		}

		this.$placeholder = $(selector)
		this.routes = routes
		this.page = null
		this.changePageHandler = this.changePageHandler.bind(this)
		this.init()
	}

	init() {
		window.addEventListener('hashchange', this.changePageHandler)
		this.changePageHandler()
	}

	changePageHandler(event) {
		if(this.page) {
			this.page.destroy()
		}
		this.$placeholder.html('')

		let Page
		switch (ActiveRoute.path) {
			case 'categories-women':
				Page = this.routes.viewCategoriesPage
				break;
			case 'catalog':
				Page = this.routes.viewCategoriesIndex
				break;
			case 'categories-children':
				Page = this.routes.viewCategoriesChildren
				break;
			case 'card-product':
				Page = this.routes.cardProduct
				break;
      		case 'personal-area/basket':
        		Page = this.routes.personalAreaBasket
        		break;
      		case 'personal-area/personal-data':
        		Page = this.routes.personalAreaData
        		break;
			case 'personal-area/discount-and-bonuses':
				Page = this.routes.personalAreaBonusesPage
				break;
			case 'personal-area/favorites':
				Page = this.routes.personalAreaChosen
				break;
			case 'personal-area/order-status':
				Page = this.routes.personalAreaOrdersStatus
				break;
			case 'personal-area/view-order':
				Page = this.routes.personalAreaViewOrder
				break;
			case 'personal-area/delivery-page':
				Page = this.routes.personalAreaDeliveryPage
				break;
			case 'personal-area/online-order':
				Page =this.routes.onlineOrderPage
				break;
			case 'personal-area/order-done':
				Page = this.routes.orderDonePage
				break;
			case 'personal-area/payment-page':
				Page = this.routes.personalAreaPaymentPage
				break;
			case 'information/about-shopping':
				Page = this.routes.aboutShoppingPage
				break;
			case 'information/about-payment':
				Page =this.routes.aboutPaymentPage
				break;
			case 'information/question-answers':
				Page = this.routes.aboutQuestionAnswers
				break;
			case 'information/cooperation':
				Page = this.routes.aboutCooperation
				break;
			case 'information/size':
				Page = this.routes.aboutSize
				break;
			case 'information/return':
				Page = this.routes.aboutReturn
				break;
			case 'information/contacts':
				Page = this.routes.aboutContacts
				break;
			case 'information/about-us':
				Page = this.routes.aboutUs
				break;
			case 'information/working-condition':
				Page = this.routes.aboutWorkingCondition
				break;
			default:
				Page = this.routes.mainPage
		}
		this.page = new Page(ActiveRoute.param)
		this.$placeholder.append(this.page.getRoot())
		this.page.afterRender()
	}

	destroy() {
		window.removeEventListener('hashchange', this.changePageHandler)
	}

}
