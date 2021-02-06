import {openSidebar, openSidebarTest} from './JS/openSidebar'
import {initialSliders} from './JS/initialSliders'
import {closeWhenClickingInAnInactiveZone} from './JS/closeWhenClickingInAnInactiveZone'
import {UserAgent} from './JS/userAgent'
import {commonCardFunctions} from '../components/common/commonCard/js/commonCardFunctions'
import {popupQuickFunctions} from '../components/common/popupQuick/js/popupQuickFunctions'
import {Entry} from '../components/common/entry/entry'

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

		// problem (импортировать только однк функцию)
		const entry = new Entry()
		entry.init()
		///
		popupQuickFunctions()
		// extra sidebar
		new openSidebarTest()

		// openSidebar()
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

