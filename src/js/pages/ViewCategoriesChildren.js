import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {CategoriesChildren} from "../components/categoriesChildren/CategoriesChildren";

export class ViewCategoriesChildren extends Page{
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				CategoriesChildren,
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