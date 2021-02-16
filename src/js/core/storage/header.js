import {HeaderFunctions, HeaderMenu} from '../../components/header/js/HeaderFunctions'
import {ExtraMenuItemShow} from '../../components/header/js/ExtraMenuItemShow'

import {HeaderStateRegulation} from '../../components/header/js/headerStateRegulation'

export const headerStorage = {
	headerFunctions: () => {
		return new HeaderFunctions()
	},
	extraMenuShow: () => {
		return new ExtraMenuItemShow()
	},
	headerMenu: () => {
		return new HeaderMenu()
	},
	headerStateRegulation: () => {
		return new HeaderStateRegulation()
	}
}



