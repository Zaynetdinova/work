import {Component} from '../../core/Component'
import {MainTemplate} from './Main.template'
import {Banner} from './view/banner/banner'
import {PopularBrand} from './view/popularBrand/PopularBrand'
import {SharesBlock} from './view/sharesBlock/sharesBlock'
import {MoyomodaBlock} from './view/moyomodaBlock/MoyomodaBlock'
import {Menu} from './view/menu1024/Menu'
import {Bestsellers} from './view/bestsellers/Bestsellers'



export class Main extends Component {
	static className = 'Main'

	constructor($root) {
		super($root, {
			name: 'Main',
			listeners: []
		});
		this.activeFilter = []
		this.banner = new Banner()
		this.popularBrand = new PopularBrand()
		this.sharesBlock = new SharesBlock()
		this.moyomodaBlock = new MoyomodaBlock()
		this.bestsellers = new Bestsellers()
		this.menu24 = new Menu()
	}

	afterInitComponent() {
		this.banner.slider()
		this.popularBrand.slider()
		this.sharesBlock.slider()
		this.moyomodaBlock.slider()
		this.bestsellers.slider()
		this.menu24.slider()
	}

	toHTML() {
		return MainTemplate(
			this.banner,
			this.menu24,
			this.popularBrand,
			this.sharesBlock,
			this.moyomodaBlock,
			this.bestsellers)
	}
}