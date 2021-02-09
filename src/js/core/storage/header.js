import {HeaderFunctions} from '../../components/header/js/HeaderFunctions'
import {ExtraMenuItemShow} from '../../components/header/js/ExtraMenuItemShow'
import {openSidebarTest} from '../JS/openSidebar'

export const headerStorage = {
	headerFunctions: () => {
		return new HeaderFunctions()
	},
	extraMenuShow: () => {
		return new ExtraMenuItemShow()
	},
	openSidebar: () => {
		return new openSidebarTest()
	}
}



