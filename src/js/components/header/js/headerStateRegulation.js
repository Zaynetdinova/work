import {headerStorage} from '../../../core/storage/header'

export class HeaderStateRegulation {
	constructor() {
		this.menu = headerStorage.headerMenu()
		this.header = headerStorage.headerFunctions()
	}

	init(state) {
		switch (state) {
			case 'menuOpen':
				// close
				this.header.mobileSearchClose()
				this.header.closeRegistryUserData()
				this.header.infoClose()
				//
				this.menu.menuOpen()
				break
			case 'mobileSearchOpen':
				//close
				this.menu.menuClose()
				this.header.closeRegistryUserData()
				this.header.infoClose()
				//
				this.header.mobileSearchOpen()
				break
			case 'infoOpen':
				// close
				this.header.mobileSearchClose()
				this.menu.menuClose()
				this.header.closeRegistryUserData()
				//
				this.header.infoOpen()
				break
			case 'showRegistry':
				// close
				this.menu.menuClose()
				this.header.mobileSearchClose()
				this.header.infoClose()
				//
				this.header.showRegistryUserData()
				break
		}
	}


}