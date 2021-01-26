import plus from '../../../../images/cardProduct/plus.svg'

export class ChangeSizeCount {
	constructor() {

	}

	init(e, calculateTheAmount = false) {
		if(e.target.dataset.buttonName) {
			const buttonType = e.target.dataset.buttonName
			const $size = e.target.closest('[data-size]')
			const count = $size.querySelector('.input-count-js')
			count.value = this.changeCount(count.value, buttonType)

			if(calculateTheAmount) {
				this.updateCommonSumAndCount()
			}

		}
	}

	changeCount(valueCount, buttonType) {
		if(buttonType === 'plus') {
			return +valueCount + 1

		} else {
			if(valueCount == 0) {
				return 0
			}
			return +valueCount - 1
		}
	}

	updateCommonSumAndCount() {
		const $items = document.querySelectorAll('.product-item-js')

		const allElements = this.findAllElements($items)
		const obj = this.sumElements(allElements)

		//вставка
		const $count = document.querySelector('.common-count-js')
		const $sum = document.querySelector('.common-price-js')
		const numberDischarge = String(obj.sum).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
		$count.value = obj.count
		$sum.value = numberDischarge


	}

	findAllElements($items) {
		let arr = []
		$items.forEach((item) => {
			const count = item.querySelector('.input-count-js').value
			const price = item.querySelector('.price-js').dataset.price
			const commonSum = price * count
			const a = {
				count,
				commonSum
			}
			arr.push(a)
		})

		return arr
	}

	sumElements( arrPriceCount) {
		const initialValue = 0;
		const reducer = (accumulator, currentValue) => {
			return +accumulator + +currentValue.count
		}

		const reducer2 = (accumulator, currentValue) => {
			return +accumulator + +currentValue.commonSum
		}

		const count = arrPriceCount.reduce(reducer, initialValue)
		const sum = arrPriceCount.reduce(reducer2, initialValue)
		return {count, sum}
	}
}
