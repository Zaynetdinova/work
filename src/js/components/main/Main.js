import {Component} from '../../core/Component'
import {MainTemplate} from './Main.template'
import {Banner} from './view/banner/banner'
import {PopularBrand} from './view/popularBrand/PopularBrand'
import {SharesBlock} from './view/sharesBlock/sharesBlock'
import {MoyomodaBlock} from './view/moyomodaBlock/MoyomodaBlock'



export class Main extends Component {
	static className = 'Main'

	constructor($root) {
		super($root, {
			name: 'Main',
			listeners: []
		});
		this.activeFilter = []
	}

	afterInitComponent() {
		const banner = new Banner()
		const popularBrand = new PopularBrand()
		const sharesBlock = new SharesBlock()
		const moyomodaBlock = new MoyomodaBlock()
		banner.slider()
		popularBrand.slider()
		sharesBlock.slider()
		moyomodaBlock.slider()
	}

	toHTML() {
		return MainTemplate()
	}
}