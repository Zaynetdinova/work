import {Component} from '../../core/Component'
import {cardProductPageTemplate} from './cardProductPage.template'
import {ChangeSizeCount} from '../common/js/changeSizeCount'
import {UtilsCardProductPage} from './js/utilsCardProductPage'
import {inputFile} from './js/inputFile'
import {CardProductPageSliders} from './js/CardProductPageSliders'
import {testDataCardProductPage} from '../../../testData/testDataCardProductPage'
import {ChangeFavoritesProduct} from '../../core/utils/utils'
import {ViewPhotoZoom} from '../../core/utils/viewPhotoZoom'


export class CardProductPage extends Component {
	static className = 'Card-product-page'

	constructor($root) {
		super($root, {
			name: 'CardProductPage',
			listeners: ['click']
		});
		this.utils

		this.productPageTitle = [
			{
				link: '/#categories-women',
				title: 'Женщинам',
				titleCategory: 'Платья',
				linkCategory: '/#catalog',
				titleType: 'Тип платья',
				titleProduct: 'Наименование товара',
				linkProduct: '/#card-product',
				linkType: '/#catalog',
			}
		]

		this.testQuantityStars = 3
	}

	toHTML() {
		return cardProductPageTemplate(
			testDataCardProductPage.cards,
			testDataCardProductPage.cards2,
			testDataCardProductPage.color,
			testDataCardProductPage.info,
			this.productPageTitle)
	}


	afterInitComponent() {
		this.utils = new UtilsCardProductPage()
    	const sliders = new CardProductPageSliders()
    	new ViewPhotoZoom()
		this.utils.transitionTitleScroll()
		this.utils.star(this.testQuantityStars)
		inputFile()
    // cardProductPage()
    sliders.init()
		new ChangeFavoritesProduct().init()
	}

	onClick(e) {
		if(e.target.closest('article')) {
			const element = e.target.closest('article');

			switch (element.id) {
				case 'info-table':
					const size = new ChangeSizeCount()
					size.init(e, true)
					break;
				case 'another-color-js':
					this.utils.anotherColorButton(e)
					break;
				case 'title-description-js':
					this.utils.infoProductShow('.description-module-js')
					break;
				case 'title-dop-info-js':
					this.utils.infoProductShow('.dop-info-js')
					break;
				case 'form-js':
					this.utils.openForm(element)
					break;
				case 'show-form-js':
					this.utils.showForm()
					break;
				case 'cancel-form-js':
					this.utils.cancelForm()
					break;
				case 'send-form-js':
					this.utils.sendForm()
					break;
				case 'zoom-photo-js':
					this.utils.popupPhotos()
					break;
        		case 'zoom-photo-js-mobile':
					this.utils.popupPhotos()
          			break;
			}
		}
	}
}


