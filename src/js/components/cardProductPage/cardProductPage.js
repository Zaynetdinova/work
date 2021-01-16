import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'
import {inputFile} from '../catalog/js/inputFile'
import {anotherColorButton} from './js/anotherColorBorder'
import {infoProductShow, testInfo} from './js/infoProductShow'
import {favoritesProduct} from './js/favoritesProduct'
import {openForm} from './js/openForm'
import {viewPhotoZoom} from './js/viewPhotoZoom'
import {showForm} from './js/showForm'
import {popupSliderPhoto} from './js/popupSliderPhoto'
import {initialSlider} from './js/initialSlider'
import {changeSizeCount} from '../common/js/changeSizeCount'

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
		initialSlider()
		viewPhotoZoom()
		inputFile()

	}

	onClick(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'info-table':
					changeSizeCount(e)
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
				case 'favorites-product-js':
					favoritesProduct(element)
					break;
				case 'form-js':
					openForm(element)
					break
				case 'show-form-js':
					showForm()
					break
				case 'cancel-form-js':
					showForm('cancel')
					break
				case 'send-form-js':
					showForm('send')
					break
				case 'zoom-photo-js':
					popupSliderPhoto()
					break
				case 'close-popup-js':
					popupSliderPhoto('close')
					break
			}
		}
	}
}