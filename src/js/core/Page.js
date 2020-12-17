import {openSidebar} from './JS/openSidebar'
import {initialSliders} from './JS/initialSliders'
import {eventCommonCardHover} from './JS/eventCommonCardHover'
import {closeWhenClickingInAnInactiveZone} from './JS/closeWhenClickingInAnInactiveZone'

export class Page {
	constructor(params) {
		this.params = params
	}

	getRoot() {
		throw new Error('Method not implemented')
	}

	afterRender() {
		openSidebar()
		initialSliders()
		if(window.userRegistry) {
			eventCommonCardHover()
		}
		closeWhenClickingInAnInactiveZone()
	}

	destroy() {

	}
}