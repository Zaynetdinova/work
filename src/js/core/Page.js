import {openSidebarTest} from './JS/openSidebar'
import {initialSliders} from './JS/initialSliders'

import {Entry} from '../components/common/entry/entry'

import {commonCardStorage} from './storage/storages'
import {closeWhenClickingInAnInactiveZone, UserAgent} from './utils/utils'
import {PopupQuick} from '../components/common/popupQuick/js/popupQuickFunctions'


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
		new PopupQuick().init()



		new openSidebarTest()

		initialSliders()


		if(window.userRegistry) {
			new commonCardStorage.commonCard()
		}

		closeWhenClickingInAnInactiveZone()
		new UserAgent()


	}

	destroy() {

	}
}

