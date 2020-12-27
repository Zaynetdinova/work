import {openSidebar} from './JS/openSidebar'
import {initialSliders} from './JS/initialSliders'
import {eventCommonCardHover} from './JS/eventCommonCardHover'
import {closeWhenClickingInAnInactiveZone} from './JS/closeWhenClickingInAnInactiveZone'
import {UserAgent} from './JS/userAgent'

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
			console.log(test.scrollWidth)
			console.log(test.scrollLeft)
			test.scrollLeft = test.scrollWidth
		}

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

