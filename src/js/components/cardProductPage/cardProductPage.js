import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'

export class CardProductPage extends Component {
	static className = 'Card-product-page'

	constructor($root) {
		super($root, {
			name: 'CardProductPage',
			listeners: []
		});
	}

	toHTML() {
		return cardProductPageTemplate()
	}
}