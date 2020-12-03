import {Page} from '../core/Page'
// import {$} from '../core/dom'
import {Header} from '../components/header/Header'
import {Main} from '../components/main/Main'
import {OptMoyo} from '../components/OptMoyo/OptMoyo'
import {PopularBrand} from '../components/popularBrand/PopularBrand'
import {SharesBlock} from '../components/sharesBlock/sharesBlock'
import {MoyomodaBlock} from '../components/moyomodaBlock/MoyomodaBlock'
import {Bestsellers} from '../components/bestsellers/Bestsellers'
import {Footer} from '../components/footer/Footer'
import {eventGlobal} from '../core/eventGlobal'

export class MainPage extends Page {
	getRoot() {
		this.app = new OptMoyo( {
  	components: [
    Header,
    Main,
    PopularBrand,
    SharesBlock,
    MoyomodaBlock,
    Bestsellers,
    Footer
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