import {openSidebar} from './JS/openSidebar'
import {initialSliders} from './JS/initialSliders'
import {eventCommonCardHover} from './JS/eventCommonCardHover'
import {closeWhenClickingInAnInactiveZone} from './JS/closeWhenClickingInAnInactiveZone'
import {UserAgent} from './JS/userAgent'
import {quickView} from './JS/quickView'

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
			eventCommonCardHover()
		}
		closeWhenClickingInAnInactiveZone()
		const userAgent = new UserAgent()
		userAgent.operatingSystemDetection()

	}

	destroy() {

	}
}

