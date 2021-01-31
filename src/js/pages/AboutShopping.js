import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {AboutShoppingPage} from '../components/aboutShoppingPage/aboutShoppingPage'

export class AboutShopping extends Page{
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				AboutShoppingPage,
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