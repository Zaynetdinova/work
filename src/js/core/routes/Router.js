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
			case 'categories':
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