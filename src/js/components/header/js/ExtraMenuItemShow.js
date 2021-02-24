import {extra} from '../view/sidebar/extra'
import {extraDataGirlNewBorn, extraDataMen, extraDataWomen} from '../view/sidebar/extraData'
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
		if (id.toLowerCase().indexOf("men") != -1) {
			this.men(id)
		}
	}

	closeExtraMenu() {
		this.$extraRoot.innerHTML = ''
	}

	girlNewBorn(id) {
	  switch(id) {
      case 'dressGirlNewBorn':
        this.menuExtra = 'dress'
        break;
	  case 'jerseyGirlNewBorn':
		this.menuExtra = 'jersey'
		break;
	  case 'topGirlNewBorn':
		this.menuExtra = 'top'
		break;
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
				console.log('super')
				this.menuExtra = 'jersey'
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

	men(id) {
		switch (id) {
			case 't-shirtsMen':
				this.menuExtra = 'tShirts'
				break;
		}

		this.initialCategory(this.menuExtra, extraDataMen)
	}

	initialCategory(menuExtra, typeExtra) {
		this.$extraRoot.innerHTML = `${extra(typeExtra[menuExtra])}`
		this.$extraRootMobile.innerHTML = `${newTest(typeExtra[menuExtra])}`
	}
}
