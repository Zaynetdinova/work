import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {Catalog} from "../components/catalog/Catalog";



export class CatalogPage extends Page{
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				Catalog,
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