import {Component} from '../../core/Component'
import {categoriesChildren} from "./categoriesChildren.template";


export class CategoriesChildren extends Component {
    static className = 'CategoriesChildren'
    constructor($root) {
        super($root, {
            name: 'CategoriesChildren',
            listeners: []
        });
    }

    toHTML() {
        return categoriesChildren()
    }
}
