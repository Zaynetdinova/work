import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {CardProductPage} from '../components/cardProductPage/cardProductPage'

export class CardProduct extends Page{
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				CardProductPage,
				Footer,
			]
		})
		return this.app.getRoot()
	}

	afterRender() {
		this.app.init()
		super.afterRender()
	}
}