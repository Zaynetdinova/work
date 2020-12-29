import plusBlack from '../../../../images/cardProduct/plus-black.svg'
import plus from '../../../../images/cardProduct/plus.svg'
export function infoTable(e) {
	if(e.target.dataset.buttonName) {
		const buttonType = e.target.dataset.buttonName
		const $size = e.target.closest('[data-size]')
		const count = $size.querySelector('.input-count-js')
		count.value = changeCount(count.value, buttonType)

		// if(count.value > 0 ) {
		// 	blackButton()
		// } else {
		// 	blackButton('remove')
		// }
		// function blackButton(type) {
		// 	const button = $size.querySelector('.plus')
		// 	if(type === 'remove') {
		// 		button.src=plus
		// 		return
		// 	}
		// 	button.classList.add('button-black')
		// 	button.src=plusBlack
		// }

	updateCommonSumAndCount()
	}
}

function changeCount(valueCount, buttonType) {
	if(buttonType === 'plus') {
		console.log('super')
		return +valueCount + 1

	} else {
		if(valueCount == 0) {
			return 0
		}
		return +valueCount - 1
	}
}

// переделать
function updateCommonSumAndCount() {
	const $items = document.querySelectorAll('.product-item-js')

	const allElements = findAllElements($items)
	const obj = sumElements(allElements)

	//вставка
	const $count = document.querySelector('.common-count-js')
	const $sum = document.querySelector('.common-price-js')
	$count.value = obj.count
	$sum.value = obj.sum


}

function findAllElements($items) {
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

function sumElements( arrPriceCount) {
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