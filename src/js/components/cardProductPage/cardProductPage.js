import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'
import {infoTable} from './js/infoTable'

export class CardProductPage extends Component {
	static className = 'Card-product-page'

	constructor($root) {
		super($root, {
			name: 'CardProductPage',
			listeners: ['click']
		});
	}

	toHTML() {
		return cardProductPageTemplate()
	}

	onClick(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'info-table':
					infoTable(e)

			}
		}
	}
}