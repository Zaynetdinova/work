import {Component} from '../../core/Component'
import {categoriesViewTemplate} from "./categoriesView.template";


export class CategoriesView extends Component {
	static className = 'CategoriesView'
	constructor($root) {
		super($root, {
			name: 'CategoriesView',
			listeners: []
		});
	}

	toHTML() {
		return categoriesViewTemplate()
	}
}
