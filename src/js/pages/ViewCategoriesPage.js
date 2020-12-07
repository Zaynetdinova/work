import {Page} from '../core/Page'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {Header} from '../components/header/Header'
import {Footer} from '../components/footer/Footer'
import {eventGlobal} from '../core/eventGlobal'
import {CategoriesVideo} from '../components/categoriesVideo/categoriesVideo'
import {TransitionTitle} from "../components/categoriesTransitionTitle/transitionTitle";
import {PartnerOffers} from "../components/partnerOffers/PartnerOffers";

export class ViewCategoriesPage extends Page{
	getRoot() {
		this.app = new OptMoyo( {
			components: [
				Header,
				TransitionTitle,
				CategoriesVideo,
				Footer,
			]
		})

		window.userRegistry = true
		return this.app.getRoot()
	}

	afterRender() {
		eventGlobal()
		this.app.init()
	}
}