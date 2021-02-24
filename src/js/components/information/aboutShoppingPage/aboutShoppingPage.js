import {Component} from '../../../core/Component'
import {aboutShoppingPageTemplate} from './aboutShoppingPage.template'

export class AboutShoppingPage extends Component {
	static className = 'About-shopping'

	constructor($root) {
		super($root, {
			name: 'aboutShoppingPage',
			listeners: ['click']
		});
		this.link = [
			{
				title: 'Доставка',
				link: '/#information/about-shopping'
			}
		]
	}

	toHTML() {
		return aboutShoppingPageTemplate(this.link)
	}

	onClick() {}
}