import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {eventGlobal} from '../core/eventGlobal'
import {openSidebar} from '../core/utils/openSidebar'
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

		window.userRegistry = true
		return this.app.getRoot()
	}

	afterRender() {
		openSidebar()
		eventGlobal()
		this.app.init()
	}
}