import {extra} from '../view/sidebar/extra'
import {extraDataGirlNewBorn, extraDataWomen} from '../view/sidebar/extraData'
import {newTest} from '../view/sidebar/subCategoriesMenu'

export class ExtraMenuItemShow {

	constructor() {
		this.$extraRoot = document.querySelector('#sidebar-extra-wrapper-js')
		this.$extraRootMobile = document.querySelector('#sidebar-extra-mobile-wrapper-js')
		this.menuExtra = null

	}



	init(e) {
	  console.log('init', e.target)
    if(e.target.closest('.point')){
       this.$extraRoot.innerHTML = ''
      return
    }
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
    if (id.toLowerCase().indexOf("newborn") != -1) {
      this.girlNewBorn(id)
    }
	}

	closeExtraMenu() {
		this.$extraRoot.innerHTML = ''
	}

	girlNewBorn(id) {
	  switch(id) {
      case 'dressGirlNewBorn':
        this.menuExtra = 'dress'
        break
      default:
        this.menuExtra = 'dress'
	  }

    this.initialCategory(this.menuExtra, extraDataGirlNewBorn)
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

		this.initialCategory(this.menuExtra, extraDataWomen)
	}

	initialCategory(menuExtra, typeExtra) {
		this.$extraRoot.innerHTML = `${extra(typeExtra[menuExtra])}`
		this.$extraRootMobile.innerHTML = `${newTest(typeExtra[menuExtra])}`
	}
}
