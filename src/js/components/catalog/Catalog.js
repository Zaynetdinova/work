import {Component} from "../../core/Component";
import {catalog} from "./catalog.template";
import {choiceFilter} from './js/choiceFilter'
import {choiceFilters} from './js/choiceFilters'

export class Catalog extends Component {
    static className = 'Catalog'

    constructor($root) {
        super($root, {
            name: 'Catalog',
            listeners: ['click', 'input']
        });
        this.activeFilter = []
    }

    toHTML() {
        return catalog()
    }

    onClick(e) {
        if(e.target.closest('article')) {
            const element = e.target.closest('article');

            switch (element.id) {
                case 'filter-catalog':
                    choiceFilter(e, element)
                    break
            }
        }
    }

    onInput(e) {
        choiceFilters(e)
    }
}