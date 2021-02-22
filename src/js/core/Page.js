import {commonCardStorage, entryStorage} from './storage/storages'
import {closeWhenClickingInAnInactiveZone, UserAgent} from './utils/utils'
import {PopupQuick} from '../components/common/popupQuick/js/popupQuickFunctions'
import {openSidebarTest} from "./utils/openSidebar";


export class Page {
	constructor(params) {
		this.params = params


	}

	getRoot() {
		throw new Error('Method not implemented')
	}

	afterRender() {
		new entryStorage.entry()
		new PopupQuick().init()
    new openSidebarTest()

		if(window.userRegistry) {
			new commonCardStorage.commonCard()
		}
		closeWhenClickingInAnInactiveZone()
		new UserAgent()
	}

	destroy() {

	}
}

