import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {CategoriesWomen} from '../components/categoriesWomen/CategoriesWomen'



export class ViewCategoriesPage extends Page{
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				CategoriesWomen,
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