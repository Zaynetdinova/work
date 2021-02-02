import {Component} from '../../../core/Component'
import {aboutShoppingPageTemplate} from './aboutShoppingPage.template'

export class AboutShoppingPage extends Component {
	static className = 'About-shopping'

	constructor($root) {
		super($root, {
			name: 'aboutShoppingPage',
			listeners: ['click']
		});
	}

	toHTML() {
		return aboutShoppingPageTemplate()
	}

	onClick() {}
}