import {Component} from "../../core/Component";
import {catalog} from "./catalog.template";
import {choiceFilter} from './js/choiceFilter'
import {choiceFilters, deleteFilterGroup} from './js/choiceFilters'
import {stateFilterMobile} from './js/stateFilterMobile'
import {stateNumberOfCardsPerPage} from './js/stateNumberOfCardsPerPage'
import {filterBy} from './js/filterBy'
import {priceFilterRange} from './js/priceFilterRange'
import {pointsCatalogOpen} from './js/pointsCatalogOpen'

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

    afterInitComponent() {
        priceFilterRange()
        pointsCatalogOpen()
    }

    onClick(e) {
        if(e.target.closest('article')) {
            const element = e.target.closest('article');

            switch (element.id) {
                case 'filter-catalog':
                    choiceFilter(e, element)
                    break
                case 'delete-filter-js':
                    deleteFilterGroup(element.dataset._id)
                    break
                case 'button-filter-mobile-js':
                    stateFilterMobile()
                    break
                case 'mobile-filter-close-js':
                    stateFilterMobile('close')
                    break
                case 'number-of-cards-per-page-js':
                    stateNumberOfCardsPerPage(element)
                    break
                case 'filter-by':
                    filterBy(element)
                    break
                case 'clear-filter-list':
                    deleteFilterGroup()
                    break
            }
        }
    }

    onInput(e) {
        choiceFilters(e)
    }
}