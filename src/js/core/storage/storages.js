import {ChoiceFilters} from '../../components/catalog/js/choiceFilters'
import {CatalogFunctions} from '../../components/catalog/js/CatalogFunctions'
import {PriceFilterRange} from '../../components/catalog/js/priceFilterRange'
import {CommonCard, SizeCommonCard} from '../../components/common/commonCard/js/CommonCard'

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

export const commonCardStorage = {
	commonCard: () => {
		return new CommonCard()
	},
	sizeCommonCard: () => {
		return new SizeCommonCard()
	}
}