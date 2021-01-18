import {openSidebar} from './JS/openSidebar'
import {initialSliders} from './JS/initialSliders'
import {closeWhenClickingInAnInactiveZone} from './JS/closeWhenClickingInAnInactiveZone'
import {UserAgent} from './JS/userAgent'
import {quickView} from './JS/quickView'
import {commonCardFunctions} from '../components/common/commonCard/js/commonCardFunctions'

export class Page {
	constructor(params) {
		this.params = params
	}

	getRoot() {
		throw new Error('Method not implemented')
	}

	afterRender() {
		const test = document.querySelector('.test1')
		if(test) {
			test.scrollLeft = test.scrollWidth
		}

		quickView()
		openSidebar()
		initialSliders()
		if(window.userRegistry) {
			commonCardFunctions()
		}
		closeWhenClickingInAnInactiveZone()
		const userAgent = new UserAgent()
		userAgent.operatingSystemDetection()

	}

	destroy() {

	}
}

