import {Component} from '../../core/Component'
import {categoriesVideo} from './categoriesVideo.template'



export class CategoriesVideo extends Component {
	static className = 'CategoriesVideo'

	constructor($root) {
		super($root, {
			name: 'CategoriesVideo',
			// listeners: ['click', 'input', 'mouseenter', 'mouseover']
		});

	}

	toHTML() {
		return categoriesVideo()
	}
}