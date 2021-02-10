import {Component} from "../../core/Component";
import {catalog} from "./catalog.template";
import {stateFilterMobile} from './js/stateFilterMobile'
import {pointsCatalogOpen} from './js/pointsCatalogOpen'
import {select} from './js/select'
import {numberPages} from './js/numberPages'

import {catalogStorage} from '../../core/storage/storages'

export class Catalog extends Component {
    static className = 'Catalog'

    constructor($root) {
        super($root, {
            name: 'Catalog',
            listeners: ['click', 'input']
        });
        this.activeFilter = []
        this.catalog = null
        this.catalogFilters = null
        this.range = null
    }

    toHTML() {
        return catalog()
    }

    afterInitComponent() {
        this.catalog = catalogStorage.catalogFunctions()
        this.catalogFilters = catalogStorage.choiceFilters()
        this.range = catalogStorage.priceFilterRange()
        this.range.init()
        pointsCatalogOpen()
        select()
    }

    onClick(e) {
        if(e.target.closest('[data-catalog-parent-event-js]')) {
            const element = e.target.closest('[data-catalog-parent-event-js]');

            switch (element.id) {
                case 'filter-catalog':
                    this.catalogFilters.toggleFilter(element)
                    break
                case 'delete-filter-js':
                    this.catalogFilters.defineDeleteFilterGroup(element.dataset._id)
                    break
                case 'button-filter-mobile-js':
                    stateFilterMobile()
                    break
                case 'mobile-filter-close-js':
                    stateFilterMobile('close')
                    break
                case 'filter-by':
                    // под вопросом
                    break
                case 'clear-filter-list':
                    this.catalogFilters.defineDeleteFilterGroup(element.dataset._id)
                    break
                case 'number-pages-js':
                    numberPages(e)
                    break
            }
        }
    }

    onInput(e) {
        this.catalogFilters.choiceFilter(e)
    }
}