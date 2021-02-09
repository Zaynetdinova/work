import {headerStorage} from '../../../core/storage/header'

export class HeaderFunctions {
	constructor() {
		this.deleteValue = document.querySelector('#desktop-search-delete-js')
		this.inputEl = document.querySelector('#desktop-search-input-js')
		this.$mobileSearch = document.querySelector('#Mobile-search-js')

		//
		this.deleteValue = document.querySelector('#mobile-search-delete-js')
		this.inputMobile = document.querySelector('#mobile-search-input-js')
		this.result = document.querySelector('#mobile-search-result')

		//
		this.sidebar = document.getElementById('sidebar-js')
		this.cancelMenu = this.sidebar.querySelector(`[data-id='cancel-js']`)
		this.buttonMenu = document.querySelector('#burger-menu')
		this.$parentExtraMobile = document.querySelector('#open-mobile-extra-js')
		this.$cancelButton = document.querySelector('#sub-categories-menu-close')
		//

		this.userData = document.querySelector('#wrapper-user-data-view-js')

		//
		this.$infoButton = document.querySelector('#info-mobile-view-js')

		this.eventListeners()
	}

	eventListeners() {
		this.deleteValue.addEventListener('click', () => this.clearInput())
		this.cancelMenu.addEventListener('click', () => this.menuClose())

		console.log(this.$cancelButton, this.$parentExtraMobile)
		this.$cancelButton.addEventListener('click', () => this.showMobileExtraMenu())
	}


	// search input Desktop and Mobile
	desktopSearchActive(element) {
		element.classList.add('input-header-active')
	}

	desktopSearchInputActive(e) {
		this.deleteValue.classList.add('Com-display-block')

		if(e.target.value === '') {
			this.deleteValue.classList.remove('Com-display-block')
		}
	}

	clearInput() {
		this.inputEl.value = ''
		if(this.inputEl.value === '') {
			this.deleteValue.classList.remove('Com-display-block')
		}
	}

	mobileSearchOpen() {
		if(this.$mobileSearch.classList.contains('display-block')) {
			this.$mobileSearch.classList.remove('display-block')
			document.body.classList.remove('Com-over-hidden')
		} else {
			this.$mobileSearch.classList.add('display-block')
			document.body.classList.add('Com-over-hidden')
		}
	}

	mobileSearchClose() {
		this.$mobileSearch.classList.remove('display-block')
		document.body.classList.remove('Com-over-hidden')
	}

	mobileSearchInput(e) {
		this.deleteValue.classList.add('Com-display-block')
		this.result.classList.add('Com-display-block')

		if(e.target.value === '') {
			this.deleteValue.classList.remove('Com-display-block')
			this.result.classList.remove('Com-display-block')
		}

		this.deleteValue.addEventListener('click', () => {
			this.inputMobile.value = ''
			if(this.inputMobile.value === '') {
				this.deleteValue.classList.remove('Com-display-block')
				this.result.classList.remove('Com-display-block')
			}
		})
	}

	// info
	infoOpen() {
		if(this.$infoButton.classList.contains('info-mobail-active-js')) {
			this.$infoButton.classList.remove('info-mobail-active-js')
			document.body.classList.remove('Com-over-hidden')
		} else {
			this.$infoButton.classList.add('info-mobail-active-js')
			document.body.classList.add('Com-over-hidden')
		}
	}

	infoClose() {
		this.$infoButton.classList.remove('info-mobail-active-js')
		document.body.classList.remove('Com-over-hidden')
	}

	// menu Open
	menuOpen() {
		if(this.buttonMenu.classList.contains('show')) {
			this.classListRemove()
		} else {
			this.classListAdd()
		}
	}

	menuClose() {
		this.classListRemove()
	}

	classListRemove () {
		this.buttonMenu.classList.remove('show')
		this.sidebar.classList.remove('Sidebar-open-js')
		document.body.classList.remove('Com-over-hidden')
		this.closeMobileExtraMenu()
		headerStorage.openSidebar().close()
	}

	classListAdd() {
		this.buttonMenu.classList.add('show')
		this.sidebar.classList.add('Sidebar-open-js')
		document.body.classList.add('Com-over-hidden')
	}

	showMobileExtraMenu() {
		this.$parentExtraMobile.classList.remove('show-extra-mobile')
		this.$parentExtraMobile.classList.add('show-extra-cancel')
	}

	closeMobileExtraMenu() {
		this.$parentExtraMobile.classList.remove('show-extra-mobile')
		this.$parentExtraMobile.classList.remove('show-extra-cancel')
	}

	//
	showRegistryUserData() {
		this.userData.classList.toggle('wrapper-user-data-view-show')
	}

	closeRegistryUserData() {
		this.userData.classList.remove('wrapper-user-data-view-show')
	}
}