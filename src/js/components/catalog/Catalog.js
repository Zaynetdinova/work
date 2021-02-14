import {Component} from "../../core/Component";
import {catalog} from "./catalog.template";
import {select} from './js/select'

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
        this.catalog.pointsCatalogOpen()
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
                  this.catalog.openFilterMobile()
                    break
                case 'mobile-filter-close-js':
                  this.catalog.closeFilterMobile()
                    break
                case 'clear-filter-list':
                    this.catalogFilters.defineDeleteFilterGroup(element.dataset._id)
                    break
                case 'number-pages-js':
                  this.catalog.changeNumberPage(e)
                    break
            }
        }
    }

    onInput(e) {
        this.catalogFilters.choiceFilter(e)
    }
}
