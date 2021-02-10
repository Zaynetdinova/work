import {ChoiceFilters} from '../../components/catalog/js/choiceFilters'
import {CatalogFunctions} from '../../components/catalog/js/CatalogFunctions'
import {PriceFilterRange} from '../../components/catalog/js/priceFilterRange'

export const catalogStorage = {
	catalogFunctions: () => {
		return new CatalogFunctions()
	},
	choiceFilters: () => {
		return new ChoiceFilters()
	},
	priceFilterRange: () => {
		return new PriceFilterRange()
	}
}