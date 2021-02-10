import {openSidebarTest} from './JS/openSidebar'
import {initialSliders} from './JS/initialSliders'
import {closeWhenClickingInAnInactiveZone} from './JS/closeWhenClickingInAnInactiveZone'
import {UserAgent} from './JS/userAgent'
import {commonCardFunctions} from '../components/common/commonCard/js/commonCardFunctions'
import {popupQuickFunctions} from '../components/common/popupQuick/js/popupQuickFunctions'
import {Entry} from '../components/common/entry/entry'


export class Page {
	constructor(params) {
		this.params = params
		this.entry = new Entry()
	}

	getRoot() {
		throw new Error('Method not implemented')
	}

	afterRender() {
		this.entry.init()

		popupQuickFunctions()

		// extra sidebar
		new openSidebarTest()

		// openSidebar()

		// delete then
		initialSliders()
		//

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

