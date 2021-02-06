import {extra} from '../view/sidebar/extra'
import {extraDataWomen} from '../view/sidebar/extraData'
import {newTest} from '../view/sidebar/subCategoriesMenu'

export class ExtraMenuItemShow {

	constructor() {
		this.$extraRoot = document.querySelector('#sidebar-extra-wrapper-js')
		this.$extraRootMobile = document.querySelector('#sidebar-extra-mobile-wrapper-js')
		this.menuExtra = null
	}

	init(e) {
		const el = e.target.closest('[data-parent-category]')


		if(el != undefined) {
			this.defineCategory(el.id)
		} else {
			// подумать над логикой
			// const parentPoint = el.closest('[data-parent-point]')
			// console.log(parentPoint)
			// this.$extraRoot.innerHTML = ''
		}
	}

	defineCategory(id) {
		if (id.toLowerCase().indexOf("women") != -1) {
			this.women(id)
		}

	}

	women(id) {
		switch (id) {
			case 'dressWomen':
				this.menuExtra = 'dress'
				break;
			case 'jerseyWoman':
				this.menuExtra = 'dress'
				break;
			case 'topWomen':
				this.menuExtra = 'top'
				break;
			case 'bottomWomen':
				this.menuExtra = 'bottom'
				break;
			default:
				this.menuExtra = 'tightsSocks'
		}

		this.initialCategory(this.menuExtra)
	}

	initialCategory(menuExtra) {
		console.log(this.$extraRoot)
		this.$extraRoot.innerHTML = `${extra(extraDataWomen[menuExtra])}`
		this.$extraRootMobile.innerHTML = `${extra(extraDataWomen[menuExtra])}`
	}
}