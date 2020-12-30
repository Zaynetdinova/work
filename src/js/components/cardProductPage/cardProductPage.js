import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'
import {infoTable} from './js/infoTable'
import {inputFile} from '../catalog/js/inputFile'
import {anotherColorButton} from './js/anotherColorBorder'

import {formShow, infoProductShow, testInfo} from './js/infoProductShow'
import {favoritesProduct} from './js/favoritesProduct'


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
				case 'title-description-js':
					infoProductShow(element, e)
					break;
				case 'title-dop-info-js':
					testInfo(element, e)
					break;

				case 'wrapper-title':
					formShow(element, e)
					break;

				case 'favorites-product-js':
					favoritesProduct(element)
					break;
			}
		}
	}
}