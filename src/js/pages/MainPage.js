import {Page} from '../core/Page'
import {Header} from '../components/header/Header'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Footer} from '../components/footer/Footer'
import {Main} from '../components/main/Main'

export class MainPage extends Page {
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				Main,
				Footer
			]
	})
		return this.app.getRoot()
	}

	afterRender() {
		this.app.init()
		super.afterRender()
	}
}