import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'
import {infoTable} from './js/infoTable'
import {inputFile} from '../catalog/js/inputFile'
import {anotherColorButton} from './js/anotherColorBorder'

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

	afterInitComponent() {
		inputFile()
	}

	onClick(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'info-table':
					infoTable(e)
					break;
				case 'another-color-js':
					anotherColorButton(e)
					break;
			}
		}
	}
}