import {Banner} from './view/banner/banner'
import {PopularBrand} from './view/popularBrand/PopularBrand'
import {SharesBlock} from './view/sharesBlock/sharesBlock'
import {MoyomodaBlock} from './view/moyomodaBlock/MoyomodaBlock'
import {Bestsellers} from './view/bestsellers/Bestsellers'
import {Menu} from './view/menu1024/Menu'

export function MainTemplate() {
	const banner = new Banner()
	const menu24 = new Menu()
	const popularBrand = new PopularBrand()
	const sharesBlock = new SharesBlock()
	const moyomodaBlock = new MoyomodaBlock()
	const bestsellers = new Bestsellers()
	return `
	 	<div>
			${banner.toHTML()}
			${menu24.toHTML()}
			${popularBrand.toHTML()}
			${sharesBlock.toHTML()}
			${moyomodaBlock.toHTML()}
			${bestsellers.toHTML()}
		</div>
	`
}