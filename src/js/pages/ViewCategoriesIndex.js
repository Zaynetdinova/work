import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {eventGlobal} from '../core/eventGlobal'
import {openSidebar} from '../core/utils/openSidebar'

import {CategoriesView} from '../components/categoriesView/categoriesView'

import {Catalog} from "../components/catalog/Catalog";



export class ViewCategoriesIndex extends Page{
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				// CategoriesView,
				Catalog,
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